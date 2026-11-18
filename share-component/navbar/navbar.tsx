"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  PhoneInTalk, ArrowForward, KeyboardArrowDown,
  School, Quiz, Computer, Science, BusinessCenter, 
  Functions, HistoryEdu, Gavel, Psychology, People, BarChart, 
  LocalHospital, Biotech, PsychologyAlt, MenuBook, Home as HomeIcon,
  Info as InfoIcon, Close as CloseIcon, Menu as MenuIcon, AutoStories,
  Shield as ShieldIcon, Description, ContactMail
} from '@mui/icons-material';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Footer Services with added Icons to match the "old design" look
  const services = [
    { name: "Assignment Help", url: "/assignment-help/", icon: <HistoryEdu /> },
    { name: "Essay Help", url: "/essay-help/", icon: <Description /> },
    { name: "Homework Help", url: "/homework-help/", icon: <MenuBook /> },
    { name: "Take My AWS Exam", url: "/take-my-aws-exam/", icon: <Computer /> },
    { name: "Take My Microsoft Azure Exam", url: "/take-my-microsoft-azure-exam/", icon: <Computer /> },
    { name: "Take My CompTIA Exam", url: "/take-my-comptia-exam/", icon: <Computer /> },
    { name: "Take My GED Exam", url: "/take-my-ged-exam/", icon: <Quiz /> },
    { name: "Take My GMAT Exam", url: "/take-my-gmat-exam/", icon: <Computer /> },
    { name: "Take My GRE Exam", url: "/take-my-gre-exam/", icon: <MenuBook /> },
    { name: "Take My HESI Exam", url: "/take-my-hesi-exam/", icon: <LocalHospital /> },
    { name: "Take My HiSET Exam", url: "/take-my-hiset-exam/", icon: <Quiz /> },
    { name: "Take My Insurance Exam", url: "/take-my-insurance-exam/", icon: <ShieldIcon /> },
    { name: "Take My Lean Six Sigma Exam", url: "/take-my-lean-six-sigma-exam/", icon: <BusinessCenter /> },
    { name: "Take My LSAT Exam", url: "/take-my-lsat-exam/", icon: <Gavel /> },
    { name: "Take My PMP Exam", url: "/take-my-pmp-exam/", icon: <BusinessCenter /> },
    { name: "Take My Real Estate Exam", url: "/take-my-real-estate-exam/", icon: <HomeIcon /> },
    { name: "Take My TEAS Exam", url: "/take-my-teas-exam/", icon: <Biotech /> },
  ];

  // Footer Subjects with added Icons to match the "old design" look
  const subjects = [
    { name: "Take My Accounting Exam For Me", url: "/take-my-accounting-exam-for-me/", icon: <BarChart /> },
    { name: "Take My Algebra Exam For Me", url: "/take-my-algebra-exam-for-me/", icon: <Functions /> },
    { name: "Take My Biology Exam For Me", url: "/take-my-biology-exam-for-me/", icon: <Biotech /> },
    { name: "Take My Business Law Exam For Me", url: "/take-my-business-law-exam-for-me/", icon: <BusinessCenter /> },
    { name: "Take My Calculus Exam For Me", url: "/take-my-calculus-exam-for-me/", icon: <Functions /> },
    { name: "Take My Chemistry Exam For Me", url: "/take-my-chemistry-exam-for-me/", icon: <Science /> },
    { name: "Take My Computer Science Exam For Me", url: "/take-my-computer-science-exam-for-me/", icon: <Computer /> },
    { name: "Take My Economics Exam For Me", url: "/take-my-economics-exam-for-me/", icon: <BarChart /> },
    { name: "Take My English Exam For Me", url: "/take-my-english-exam-for-me/", icon: <MenuBook /> },
    { name: "Take My Finance Exam For Me", url: "/take-my-finance-exam-for-me/", icon: <Functions /> },
    { name: "Take My History Exam For Me", url: "/take-my-history-exam-for-me/", icon: <HistoryEdu /> },
    { name: "Take My Law Exam For Me", url: "/take-my-law-exam-for-me/", icon: <Gavel /> },
    { name: "Take My Math Exam For Me", url: "/take-my-math-exam-for-me/", icon: <Functions /> },
    { name: "Take My Nursing Exam For Me", url: "/take-my-nursing-exam-for-me/", icon: <LocalHospital /> },
    { name: "Take My Philosophy Exam For Me", url: "/take-my-philosophy-exam-for-me/", icon: <PsychologyAlt /> },
    { name: "Take My Physics Exam For Me", url: "/take-my-physics-exam-for-me/", icon: <Science /> },
    { name: "Take My Psychology Exam For Me", url: "/take-my-psychology-exam-for-me/", icon: <Psychology /> },
    { name: "Take My Sociology Exam For Me", url: "/take-my-sociology-exam-for-me/", icon: <People /> },
    { name: "Take My Statistics Exam For Me", url: "/take-my-statistics-exam-for-me/", icon: <BarChart /> },
    { name: "Take My WGU Exam", url: "/take-my-wgu-exam/", icon: <School /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null); 
  };

  const handleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

  const isActive = (path: string) => {
    if (!path) return false;
    const normalizedPath = path.replace(/\/+$/, "") || "/";
    const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
    return normalizedPathname === normalizedPath;
  };

  const isCategoryActive = (basePath: string) => {
    if (!basePath) return false;
    const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
    const normalizedBasePath = basePath.replace(/\/+$/, "");
    return normalizedPathname.startsWith(normalizedBasePath);
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className="w-full bg-white border-b border-[#e6ebf5] shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-[90px]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" prefetch={false}>
                <Image src="/logo1.png" alt="Logo" width={340} height={85} priority className={styles.logo} />
              </Link>
            </div>

            {/* Desktop Navigation - using OLD design classes */}
            <div className={styles.centerNav}>
              <Link href="/" prefetch={false} className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>

              {/* Services Mega Menu */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('ser')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${(isCategoryActive('/services') || services.some(s => isActive(s.url))) ? styles.activeText : ''}`}>
                  Services <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <div className={`${styles.megaMenu} ${styles.scrollMenu} ${openDropdown === 'ser' ? styles.show : ''}`}>
                  {services.map((item) => {
                    return (
                      <Link key={item.name} href={item.url} prefetch={false} className={`${styles.flexItem} ${isActive(item.url) ? styles.dropdownActive : ''}`}>
                        {item.icon} {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Subjects Mega Menu */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('sub')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${(isCategoryActive('/subjects') || subjects.some(s => isActive(s.url))) ? styles.activeText : ''}`}>
                  Subjects <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <div className={`${styles.megaMenu} ${styles.scrollMenu} ${openDropdown === 'sub' ? styles.show : ''}`}>
                  {subjects.map((sub) => {
                     return (
                      <Link key={sub.name} href={sub.url} prefetch={false} className={`${styles.flexItem} ${isActive(sub.url) ? styles.dropdownActive : ''}`}>
                        {sub.icon} {sub.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="/about" prefetch={false} className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>
                About
              </Link>

              <Link href="/contact/" prefetch={false} className={`${styles.navLink} ${isActive('/contact/') ? styles.active : ''}`}>
                Contact Us
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+12123476533" className="flex items-center gap-1.5 bg-gradient-to-r from-[#16305c] to-[#2a4d8f] text-white px-4 py-2.5 rounded shadow-sm font-semibold text-[14px] hover:opacity-90 transition-opacity">
                <PhoneInTalk fontSize="small" /> Live Call
              </a>
              <Link href="/contact/" prefetch={false} className="flex items-center gap-1.5 bg-[#16305c] text-white px-4 py-2.5 rounded shadow-sm font-semibold text-[14px] hover:bg-[#2a4d8f] transition-colors">
                Get Started <ArrowForward fontSize="small" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={handleDrawerToggle} className="text-[#1f2a44] p-2">
                <MenuIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleDrawerToggle}>
        <div className={`fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center p-5 border-b border-[#e6ebf5]">
            <Image src="/logo1.png" alt="Logo" width={200} height={50} className={styles.drawerLogo} />
            <button onClick={handleDrawerToggle} className="text-[#4a5578]">
              <CloseIcon />
            </button>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            <ul className={styles.mobileList}>
              <li className={`${styles.mobileListItem} ${isActive('/') ? styles.mobActive : ''}`}>
                <Link href="/" prefetch={false} onClick={handleDrawerToggle}><HomeIcon /> Home</Link>
              </li>

              <li className={`${styles.mobileListItem} ${(isCategoryActive('/services') || services.some(s => isActive(s.url))) ? styles.mobActive : ''}`} onClick={() => handleDropdown('ser')}>
                <div className={styles.labelWithIcon}><School /> Services</div>
                <KeyboardArrowDown sx={{ color: '#1f2a44', transform: openDropdown === 'ser' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'ser' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {services.map(s => {
                    return (
                      <Link key={s.name} href={s.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(s.url) ? styles.mobSubActive : ''}>
                        {s.icon} {s.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <li className={`${styles.mobileListItem} ${(isCategoryActive('/subjects') || subjects.some(s => isActive(s.url))) ? styles.mobActive : ''}`} onClick={() => handleDropdown('sub')}>
                <div className={styles.labelWithIcon}><AutoStories /> Subjects</div>
                <KeyboardArrowDown sx={{ color: '#1f2a44', transform: openDropdown === 'sub' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'sub' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {subjects.map(sub => {
                    return (
                      <Link key={sub.name} href={sub.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(sub.url) ? styles.mobSubActive : ''}>
                        {sub.icon} {sub.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <li className={`${styles.mobileListItem} ${isActive('/about') ? styles.mobActive : ''}`}>
                <Link href="/about" prefetch={false} onClick={handleDrawerToggle}><InfoIcon /> About</Link>
              </li>

              <li className={`${styles.mobileListItem} ${isActive('/contact/') ? styles.mobActive : ''}`}>
                <Link href="/contact/" prefetch={false} onClick={handleDrawerToggle}><ContactMail /> Contact Us</Link>
              </li>
            </ul>

            <div className="p-5 mt-2 space-y-3">
              <a href="+12123476533" className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#16305c] to-[#2a4d8f] text-white px-4 py-3 rounded-md font-bold w-full">
                <PhoneInTalk /> Live Call
              </a>
              <Link href="/contact/" onClick={handleDrawerToggle} className="flex items-center justify-center gap-2 bg-[#16305c] text-white px-4 py-3 rounded-md font-bold w-full">
                Get Started <ArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;