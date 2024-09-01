import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li className="md:invisible visible"><Link>U.Profile</Link></li>
        <li><Link><button className="btn btn-accent bg-[#68BC26]">Home</button></Link></li>
        <li><Link to='/users'><button className="btn sm:link w-full  btn-accent bg-[#68BC26]">Users</button></Link></li>
    </>
    return (
        <div className="navbar bg-base-100 px-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-28 h-28" src="/src/assets/logo_plane-removebg-preview.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <Link><button className="btn md:visible invisible btn-accent bg-[#68BC26]">U.Profile</button></Link>
                <img className="w-14 h-14 md:visible invisible" src="/src/assets/user.png" alt="" />
                <Link><button className="btn btn-accent bg-[#68BC26]">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;