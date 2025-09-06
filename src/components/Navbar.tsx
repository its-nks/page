import Link from "next/link";
import { Button } from "@/components/button"; // only if you added button.tsx

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow">
            <div className="text-xl font-bold">CodeRithm</div>
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Button>Sign In</Button>
            </div>
        </nav>
    );
}
