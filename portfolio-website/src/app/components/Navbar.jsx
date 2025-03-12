'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();

    return (
        <nav className="#4A4A4A p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                <div className="absolute top-4 right-4 space-x-4">
                    <Link href="/" className="`${pathname === '/' ? 'text-white' : text-gray-300 hover:text-black'}`}">
                        Home
                    </Link>
                    <Link href="/aboutpage" className="`${pathname === '/aboutpage' ? 'text-white' : text-gray-300 hover:text-white'}`}">
                        About Me
                    </Link>
                    <Link href="/projectspage" className="`${pathname === '/projectspage' ? 'text-white' : text-gray-300 hover:text-white'}`}">
                        Projects
                    </Link>
                    <Link href="/contractpage" className="`${pathname === '/contractpage' ? 'text-white' : text-gray-300 hover:text-white'}`}">
                        Contract
                    </Link>
                </div>
            </div>
        </nav>
    );
}