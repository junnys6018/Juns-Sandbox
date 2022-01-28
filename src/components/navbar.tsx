import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="container flex flex-row items-center py-10">
            <Link
                to="/"
                className="font-semibold text-3xl mr-auto bg-clip-text text-transparent bg-gradient-to-r from-[#ff0099] to-[#ff9900]"
            >
                Jun&apos;s Sandbox
            </Link>
            <Link to="/" className="font-medium text-xl text-pink-600">
                Home
            </Link>
        </nav>
    );
}
