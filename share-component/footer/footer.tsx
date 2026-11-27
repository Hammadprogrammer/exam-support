  "use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const subjects = [
    { name: "Take My Accounting Exam For Me", url: "/take-my-accounting-exam-for-me/" },
    { name: "Take My Algebra Exam For Me", url: "/take-my-algebra-exam-for-me/" },
    { name: "Take My Biology Exam For Me", url: "/take-my-biology-exam-for-me/" },
    { name: "Take My Business Law Exam For Me", url: "/take-my-business-law-exam-for-me/" },
    { name: "Take My Calculus Exam For Me", url: "/take-my-calculus-exam-for-me/" },
    { name: "Take My Chemistry Exam For Me", url: "/take-my-chemistry-exam-for-me/" },
    { name: "Take My Computer Science Exam For Me", url: "/take-my-computer-science-exam-for-me/" },
    { name: "Take My Economics Exam For Me", url: "/take-my-economics-exam-for-me/" },
    { name: "Take My English Exam For Me", url: "/take-my-english-exam-for-me/" },
    { name: "Take My Finance Exam For Me", url: "/take-my-finance-exam-for-me/" },
    { name: "Take My History Exam For Me", url: "/take-my-history-exam-for-me/" },
    { name: "Take My Law Exam For Me", url: "/take-my-law-exam-for-me/" },
    { name: "Take My Math Exam For Me", url: "/take-my-math-exam-for-me/" },
    { name: "Take My Nursing Exam For Me", url: "/take-my-nursing-exam-for-me/" },
    { name: "Take My Philosophy Exam For Me", url: "/take-my-philosophy-exam-for-me/" },
    { name: "Take My Physics Exam For Me", url: "/take-my-physics-exam-for-me/" },
    { name: "Take My Psychology Exam For Me", url: "/take-my-psychology-exam-for-me/" },
    { name: "Take My Sociology Exam For Me", url: "/take-my-sociology-exam-for-me/" },
    { name: "Take My Statistics Exam For Me", url: "/take-my-statistics-exam-for-me/" }
  ];

  const services = [
    { name: "Take My GED Exam", url: "/take-my-ged-exam/" },
    { name: "Take My GMAT Exam", url: "/take-my-gmat-exam/" },
    { name: "Take My GRE Exam", url: "/take-my-gre-exam/" },
    { name: "Take My HESI Exam", url: "/take-my-hesi-exam/" },
    { name: "Take My HiSET Exam", url: "/take-my-hiset-exam/" },
    { name: "Take My LSAT Exam", url: "/take-my-lsat-exam/" },
    { name: "Take My PMP Exam", url: "/take-my-pmp-exam/" },
    { name: "Take My TEAS Exam", url: "/take-my-teas-exam/" },
    { name: "Take My WGU Exam", url: "/take-my-wgu-exam/" },
    { name: "Take My Real Estate Exam", url: "/take-my-real-estate-exam/" },
    { name: "Take My Insurance Exam", url: "/take-my-insurance-exam/" },
    { name: "Take My CompTIA Exam", url: "/take-my-comptia-exam/" },
    { name: "Take My AWS Exam", url: "/take-my-aws-exam/" },
    { name: "Take My Microsoft Azure Exam", url: "/take-my-microsoft-azure-exam/" },
    { name: "Take My Lean Six Sigma Exam", url: "/take-my-lean-six-sigma-exam/" },
    { name: "Assignment Help", url: "/assignment-help/" },
    { name: "Essay Help", url: "/essay-help/" },
    { name: "Homework Help", url: "/homework-help/" }
  ];

  const resources = [
    { name: "About", url: "/about/" },
    { name: "Contact Us", url: "/contact/" }
  ];

  const openNavDropdown = (name: 'sub' | 'ser') => {
    window.dispatchEvent(new CustomEvent('open-nav-dropdown', { detail: name }));
  };

  const terms = [
    { name: "Privacy Policy", url: "/privacy-policy/" },
    { name: "Refund Policy", url: "/refund-policy/" },
    { name: "Terms and Conditions", url: "/terms-and-conditions/" }
  ];

  return (
    <footer className="bg-[#0e1c36] text-white py-12 lg:py-16">
      <div className="container mx-auto px-5 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10 lg:gap-8 mb-10 lg:mb-16">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" prefetch={false}>
              <Image src="/logo1.png" alt="Exam Support Online" width={400} height={100} className="w-auto max-w-full h-24 bg-white rounded-lg p-2 mb-5" />
            </Link>
            <p className="text-[#a0abc0] text-[14px] leading-relaxed">
              Exam Support Online provides expert help for online exams, classes, courses, and assignments. Our qualified tutors deliver reliable, confidential, and affordable support across every subject.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Subjects</h4>
            <ul className="space-y-4">
              {subjects.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => openNavDropdown('sub')} className="text-[#f9a825] hover:text-white transition-colors text-[14px] font-semibold cursor-pointer">
                  See More
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => openNavDropdown('ser')} className="text-[#f9a825] hover:text-white transition-colors text-[14px] font-semibold cursor-pointer">
                  See More
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Terms</h4>
            <ul className="space-y-4">
              {terms.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="text-2xl font-bold mb-6 tracking-wide">We Accept</h4>
            <div className="inline-block mt-2">
               <Image src="/paymenticon.png" alt="Accepted Payments" width={300} height={90} className="w-full max-w-[280px]" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#313a4e] pt-8 mt-8 lg:pt-10 lg:mt-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          <div className="lg:w-3/5">
            <h4 className="text-[#8494b3] font-bold mb-4 tracking-wide text-sm">Disclaimer</h4>
            <p className="text-[#8494b3] text-[13px] leading-relaxed mb-6 lg:mb-10">
              Exam Support Online supports the learning process that online education should offer. We are not here to share or support cheating of any kind. Services are to be used for study help and tutoring purposes only. Our users are the ones who are meant to obey the policy of their institution and use our resources in an ethical (and legal) manner.
            </p>
            <p className="text-[#8494b3] text-[13px]">
              © {currentYear} Exam Support Online. All Rights Reserved.
            </p>
          </div>
          
          <div className="lg:w-1/4">
            <h4 className="text-white font-bold mb-5 text-xl tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/ExamSupportOnline" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#f9a825] transition-colors"><Facebook fontSize="medium" /></Link>
              <Link href="https://www.instagram.com/exam_support_online" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#f9a825] transition-colors"><Instagram fontSize="medium" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;