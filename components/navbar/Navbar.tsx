"use client"
import './Navbar.css';
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP)

const links = [
    { label: 'Product', href: '#product' },
    { label: 'Blog', href: '#blog' },
    { label: 'Support', href: '#support' },
    { label: 'Log In', href: '#login' },
];

export default function Navbar() {
    const navbarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const navbar = navbarRef.current;
        if (!navbar) return;

        const navbarContent = navbar.querySelector<HTMLElement>(".navbar-content-container");
        if (!navbarContent) return;

        let hidden = window.scrollY > 80;
        gsap.set(navbarContent, { opacity: hidden ? 0 : 1 });
        navbar.classList.toggle("is-scrolled", window.scrollY > 0);

        ScrollTrigger.create({
            start: 0,
            onRefresh: (self) => {
                navbar.classList.toggle("is-scrolled", self.scroll() > 0);
            },
            onUpdate: (self) => {
                navbar.classList.toggle("is-scrolled", self.scroll() > 0);
                const shouldHide = self.scroll() > 80 && self.direction === 1;
                if (shouldHide === hidden) return;

                hidden = shouldHide;
                gsap.to(navbarContent, {
                    opacity: hidden ? 0 : 1,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            },
        });
    }, { dependencies: [] });
    return (
        <header className="site-header" ref={navbarRef}>
            <div className="content-container navbar-content-container">
                <div className="center-container navbar-center-container">
                    <nav className="navbar" aria-label="Main navigation">
                        <a className="navbar-logo" href="/" aria-label="Team home">
                            team<span>.</span>
                        </a>

                        <div className="navbar-links">
                            {links.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                            <div className="navbar-cta"><span>Get Access</span></div>
                        </div>
                        <div className="m-nav-button">
                            <img className="m-nav-button-image" src="/menu-button.png"/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
