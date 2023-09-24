import { Button, Tailwind } from '@react-email/components';

const Email = () => {
    return (
        <Tailwind>
            <Button
                className="bg-brand px-3 py-2 font-medium leading-4 text-white"
                href="https://example.com"
            >
                Click me
            </Button>
        </Tailwind>
    );
};