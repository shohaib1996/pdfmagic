"use client"
import Container from "@/app/utils/Container";
import logo from "@/assets/pdfLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-base-200 ">
            <Container>
                <footer className="footer p-10  text-base-content ">
                    <aside>
                        <Link href={'/'} className="btn btn-ghost text-xl">
                            <Image height={75} width={75} src={logo} alt='logo'></Image>
                            <p className="font-bold">PDFmagic</p>
                        </Link>
                        <p>The Kingfishers.<br />Every tool you need to work with PDFs in one place</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;