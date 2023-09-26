import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { env } from "./env.mjs";

const redis = new Redis({
  url: env.UPSTASH_REDIS_URL,
  token: env.UPSTASH_REDIS_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export default async function middleware(
  request: NextRequest,
  _event: NextFetchEvent,
): Promise<Response | undefined> {
  if (request.method !== "POST") {
    return NextResponse.next();
  }
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    console.log(`User has exceeded rate limit from ip: ${ip}`);
  }
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}

export const config = {
  matcher: "/",
};
