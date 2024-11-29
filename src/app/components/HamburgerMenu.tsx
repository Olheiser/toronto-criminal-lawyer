"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "@/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<number | null>(null);

    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement>(null); // Reference for the menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleDropdownToggle = (index: number) => {
        // If the same dropdown is clicked, close it; otherwise, open the new one
        setActiveDropdown(activeDropdown === index ? null : index);
    
        // Only update sub-dropdown state for mobile
        //if (typeof window !== "undefined" && window.innerWidth < 1000) {
            //setActiveSubDropdown(activeSubDropdown === index ? null : index);
        //}
    };

    const handleSubDropdownToggle = (index: number) => {
        setActiveSubDropdown(activeSubDropdown === index ? null : index);
    };

    const handleMouseEnter = (index: number) => {
        setActiveDropdown(index);
        setActiveSubDropdown(null); // Be minful of this. Reset sub-dropdown when switching main dropdown

    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setActiveSubDropdown(null); // Reset sub-dropdown when mouse leaves
    };

    const handleSubMouseEnter = (index: number) => {
        setActiveSubDropdown(index);
    };

    const handleSubMouseLeave = () => {
        setActiveSubDropdown(null);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    // Close menu when pathname changes
    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false); // Close the menu when navigating to a new page
            setActiveDropdown(null); // Reset dropdowns
        }
    }, [pathname]); // Trigger whenever the route changes


    return (
        <div ref={menuRef}>
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label={menuOpen ? "Open navigation menu" : "Close navigation menu"}
            >
                {menuOpen ? '✖' : '☰'}
            </button>
            <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ""}`}>
                <li 
                    onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleMouseEnter(0) : undefined}
                    onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleMouseLeave : undefined}
                >
                    <div className={styles.menuItemRow}>
                        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(0)}>
                            ▾
                        </span>
                    </div>
                    
                    <ul className={`${styles.dropdown} ${
                            activeDropdown === 0 ? styles.showDropdown : ""
                        }`}>
                        <li><Link href="/about/team" className={pathname === "/about/team" ? styles.active : ""}>Team</Link></li>
                        <li><Link href="/about/reported-cases" className={pathname === "/about/reported-cases" ? styles.active : ""}>Reported Cases</Link></li>
                    </ul>
                </li>
                <li
                    onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => setDropdownOpen(true) : undefined}
                    onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => setDropdownOpen(false) : undefined}
                >
                    <div className={styles.menuItemRow}>
                        <Link href="/criminal-process" className={pathname === "/criminal-process" ? styles.active : ""}>Criminal Process</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(1)}>
                            ▾
                        </span>
                    </div>
                    <ul className={`${styles.dropdown} 
                        ${activeDropdown === 1 ? styles.showDropdown : ""}`}
                    >
                        <li><Link href="/criminal-process/can-i-beat-the-charges" className={pathname === "/criminal-process/can-i-beat-the-charges" ? styles.active : ""}>Can I Beat the Charges?</Link></li>
                        <li><Link href="/criminal-process/should-i-plead-guilty" className={pathname === "/criminal-process/should-i-plead-guilty" ? styles.active : ""}>Should I Plead Guilty?</Link></li>
                        <li><Link href="/criminal-process/your-rights" className={pathname === "/criminal-process/your-rights" ? styles.active : ""}>Your Rights</Link></li>
                        <li><Link href="/criminal-process/penalties-and-sentencing" className={pathname === "/criminal-process/penalties-and-sentencing" ? styles.active : ""}>Penalties & Sentencing</Link></li>
                        <li><Link href="/criminal-process/faq" className={pathname === "/criminal-process/faq" ? styles.active : ""}>FAQ</Link></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => setDropdownOpen(true) : undefined}
                    onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => setDropdownOpen(false) : undefined}
                >
                    <div className={styles.menuItemRow}>
                        <Link href="/practice-areas" className={pathname === "/practice-areas" ? styles.active : ""}>Practice Areas</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(2)}>
                            ▾
                        </span>
                    </div>
                    <ul className={`${styles.dropdown} 
                        ${activeDropdown === 2 ? styles.showDropdown : ""}`}
                    >
                        {/* Submenu Level 1 -> Assault*/}
                        <li
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(0) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                        >
                            <div className={styles.submenuItemRow}>
                                <Link href="/practice-areas/assault-charges" className={pathname === "/practice-areas/assault-charges" ? styles.active : ""}>Assault Charges</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(0)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 0 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/assault-charges/assault" className={pathname === "/practice-areas/assault-charges/assault" ? styles.active : ""}>Assault</Link></li>
                            </ul>
                        </li>
                        {/* Submenu Level 1 -> Impaired Driving*/}
                        <li
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(1) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                        >
                            <div className={styles.submenuItemRow}>
                                <Link href="/practice-areas/driving-offences">Driving Offences</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(1)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 1 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/driving-offences/impaired-driving">Impaired Driving</Link></li>
                            </ul>
                        </li>
                        {/* Submenu Level 1 -> Fraud Charges*/}
                        <li 
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(2) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                            
                        >
                            <div className={styles.submenuItemRow}>    
                                <Link href="/practice-areas/fraud-charges">Fraud Charges</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(2)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 2 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/fraud-charges/fraud">Fraud</Link></li>
                            </ul>
                        </li>
                        {/* Submenu Level 1 -> Drug Charges*/}
                        <li
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(3) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                        >
                            <div className={styles.submenuItemRow}>
                                <Link href="/practice-areas/drug-charges">Drug Charges</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(3)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 3 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/drug-charges/possession-of-narcotics">Possession of Narcotics</Link></li>
                            </ul>
                        </li>
                        {/* Submenu Level 1 -> Property Crimes*/}
                        <li
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(4) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                        >
                            <div className={styles.submenuItemRow}>
                                <Link href="/practice-areas/property-crimes">Property Crimes</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(4)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 4 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/property-crimes/robbery">Robbery</Link></li>
                            </ul>
                        </li>
                        {/* Submenu Level 1 -> Sexual Offences*/}
                        <li
                            onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleSubMouseEnter(5) : undefined}
                            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleSubMouseLeave : undefined}
                        >
                            <div className={styles.submenuItemRow}>
                                <Link href="/practice-areas/sexual-offences">Sexual Offences</Link>
                                <span
                                    className={styles.dropdownArrow}
                                    onClick={() => handleSubDropdownToggle(5)}
                                >
                                    ▾
                                </span>
                            </div>
                            <ul className={`${styles.subDropdown} ${
                                        activeSubDropdown === 5 ? styles.showSubDropdown : ""
                                    }`}>
                                <li><Link href="/practice-areas/sexual-offences/sexual-assault">Sexual Assault</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/practice-areas/criminal-harassment">Criminal Harassment</Link></li>
                        <li><Link href="/practice-areas/young-offenders">Young Offenders</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerMenu;