"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/pdfLogo.png";
import Container from '@/app/utils/Container';
const Header = () => {
    const navLink = [
        {
            name: "Home",
            pathName: "/"
        },
        {
            name: "About",
            pathName: "/about"
        },
        {
            name: "Contact",
            pathName: "/contact"
        },
        // {
        //     name: "Dashboard",
        //     pathName: "/dashboard"
        // },
    ]
    return (
        <div className=" bg-base-100 shadow-xl z-50 sticky top-0 h-15">
            <Container>
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navLink.map((nav) => (
                                        <Link key={nav.name} href={nav.pathName}>
                                            <li>
                                                <button className='text-xl font-bold'>{nav.name}</button>
                                            </li>
                                        </Link >
                                    ))
                                }


                            </ul>
                        </div>
                        <Link href={'/'} className="btn btn-ghost text-xl">
                            <Image height={75} width={75} src={logo} alt='logo'></Image>
                            <p className='font-bold'>PDFmagic</p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-4">
                            {
                                navLink.map((nav) => (
                                    <Link key={nav.name} href={nav.pathName}>
                                        <li>
                                            <button className='text-lg font-semibold'>{nav.name}</button>
                                        </li>
                                    </Link >
                                ))
                            }

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[#FF5800] text-white font-bold">Login</a>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Header;