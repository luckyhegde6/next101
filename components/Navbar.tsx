
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    DevNext
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-500">About</Link>
                    </li>
                    <li>
                        <Link href="/events" className="hover:text-blue-500">Events</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-blue-500">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar