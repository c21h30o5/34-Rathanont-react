import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="border-b text-xl font-bold">
            <ul className="flex justify-end py-8 px-12 gap-x-12">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}