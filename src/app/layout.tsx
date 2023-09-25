import './globals.css';
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";

export const metadata = {
  title: 'WillTransfer',
  description: 'A way to send files to another person.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextSSRPlugin
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <body>
        <main className="flex flex-col h-screen">
          <nav className="bg-gray-800 py-4">
            <div className="container px-2 flex justify-between items-center">
              <div className="text-white font-bold text-xl">
                WillTransfer
              </div>
            </div>
          </nav>
          <div className="h-screen px-2">
            {children}
          </div>
          <footer className="bg-gray-800 p-4 text-center text-white">
            <p>Made by <a href="https://willholmes.dev" className='underline'>Will Holmes</a></p>
          </footer>
        </main>
      </body>
    </html>
  )
}
