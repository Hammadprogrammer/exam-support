  "use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, YouTube, Pinterest, Instagram } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const subjects = [
    { name: "Biology Exam", url: "/biology-exam/" },
    { name: "Business Exam", url: "/business-exam/" },
    { name: "Chemistry Exam", url: "/chemistry-exam/" },
    { name: "Computer Exam", url: "/computer-exam/" },
    { name: "Economics Exam", url: "/economics-exam/" },
    { name: "Finance Exam", url: "/finance-exam/" },
    { name: "History Exam", url: "/history-exam/" },
    { name: "Law Exam", url: "/law-exam/" },
    { name: "Math Exam", url: "/math-exam/" },
    { name: "Nursing Exam", url: "/nursing-exam/" },
    { name: "Philosophy Exam", url: "/philosophy-exam/" },
    { name: "Physics Exam", url: "/physics-exam/" },
    { name: "Psychology Exam", url: "/psychology-exam/" },
    { name: "Sociology Exam", url: "/sociology-exam/" },
    { name: "Statistics Exam", url: "/statistics-exam/" }
  ];

  const services = [
    { name: "Online Exam Help", url: "/online-exam-help/" },
    { name: "Online GED Test", url: "/online-ged-test/" },
    { name: "Online GMAT Exam", url: "/online-gmat-exam/" },
    { name: "Online GRE Test", url: "/online-gre-test/" },
    { name: "Online HESI Exam", url: "/online-hesi-exam/" },
    { name: "Online PMP Exam", url: "/online-pmp-exam/" },
    { name: "Online PSI Exam", url: "/online-psi-exam/" },
    { name: "Online TEAS Test", url: "/online-teas-test/" },
    { name: "Online Tests & Quizzes", url: "/online-tests-quizzes/" },
    { name: "Proctored Exam Help", url: "/proctored-exam-help/" },
    { name: "Assignment Help", url: "/assignment-help/" },
    { name: "Real Estate Exam", url: "/real-estate-exam/" },
    { name: "Online Class Help", url: "/online-class-help/" },
    { name: "Insurance Exam", url: "/insurance-exam/" },
    { name: "Online Course Help", url: "/online-course-help/" },
    { name: "CompTIA Exams", url: "/comptia-exams/" }
  ];

  const resources = [
    { name: "About", url: "/about/" },
    { name: "Our Experts", url: "/our-experts/" },
    { name: "Contact Us", url: "/contact/" }
  ];

  const terms = [
    { name: "Privacy Policy", url: "/privacy-policy/" },
    { name: "Refund Policy", url: "/refund-policy/" },
    { name: "Terms and Conditions", url: "/terms-and-conditions/" }
  ];

  return (
    <footer className="text-white py-16" style={{ background: 'linear-gradient(160deg, #16305c 0%, #1e3a6e 55%, #122546 100%)' }}>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6 text-[#f9a825]">Subjects</h4>
            <ul className="space-y-4">
              {subjects.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#c3cddf] hover:text-[#f9a825] transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6 text-[#f9a825]">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#c3cddf] hover:text-[#f9a825] transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6 text-[#f9a825]">Resources</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#c3cddf] hover:text-[#f9a825] transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6 text-[#f9a825]">Terms</h4>
            <ul className="space-y-4">
              {terms.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#c3cddf] hover:text-[#f9a825] transition-colors text-[14px]">
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

        <div className="border-t border-[#2a4d8f] pt-10 mt-10 flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-3/5">
            <h4 className="text-[#8fa5c6] font-bold mb-4 tracking-wide text-sm">Disclaimer</h4>
            <p className="text-[#8fa5c6] text-[13px] leading-relaxed mb-10">
              Exam Support Online supports the learning process that online education should offer. We are not here to share or support cheating of any kind. Services are to be used for study help and tutoring purposes only. Our users are the ones who are meant to obey the policy of their institution and use our resources in an ethical (and legal) manner.
            </p>
            <p className="text-[#8fa5c6] text-[13px]">
              © {currentYear} Exam Support Online. All Rights Reserved.
            </p>
          </div>
          
          <div className="lg:w-1/4">
            <h4 className="text-white font-bold mb-5 text-xl tracking-wide">Follow Us</h4>
            <div className="flex gap-3">
              <Link href="https://www.facebook.com/p/All-Exam-Help-61565603774858/?_rdc=2&_rdr#" className="w-10 h-10 rounded-full bg-[#f9a825]/10 border border-[#f9a825]/40 text-[#f9a825] hover:bg-[#f9a825] hover:text-[#16305c] transition-all flex items-center justify-center"><Facebook fontSize="small" /></Link>
              <Link href="https://www.youtube.com/channel/UCl374uHuik09T7e5Uw_N64Q" className="w-10 h-10 rounded-full bg-[#f9a825]/10 border border-[#f9a825]/40 text-[#f9a825] hover:bg-[#f9a825] hover:text-[#16305c] transition-all flex items-center justify-center"><YouTube fontSize="small" /></Link>
              <Link href="https://www.pinterest.com/allexamhelp0/" className="w-10 h-10 rounded-full bg-[#f9a825]/10 border border-[#f9a825]/40 text-[#f9a825] hover:bg-[#f9a825] hover:text-[#16305c] transition-all flex items-center justify-center"><Pinterest fontSize="small" /></Link>
              <Link href="https://www.instagram.com/all_exam_help/" className="w-10 h-10 rounded-full bg-[#f9a825]/10 border border-[#f9a825]/40 text-[#f9a825] hover:bg-[#f9a825] hover:text-[#16305c] transition-all flex items-center justify-center"><Instagram fontSize="small" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;