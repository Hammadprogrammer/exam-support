"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';
import OurService from '@/container/All-props-comp/our_service/our_service';
import CounterSection from '@/container/All-props-comp/counter_section/counter_section';
import ContentSectionTwo from '@/container/All-props-comp/content_section_two/content_section_two';
import AboutTeam from '@/container/All-props-comp/about_team/about_team';
import ContentOne from '@/container/All-props-comp/Content_section_one/Content_section_one';
import WhyStudentHire from '@/container/All-props-comp/why_student_hire/why_student_hire';
import GetQuote from '@/container/All-props-comp/get_quote/get_quote';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';
import FAQSection from '@/container/All-props-comp/fqa-read/fqa';
import ExamSection from '@/container/home/exam_section/exam_section';
import TrustedByHome from '@/container/home/trusted_by/trusted_by';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';

import type { SubjectPageData } from './types';

const ABOUT_ICONS = [<AutoStoriesIcon key="a" />, <VerifiedUserIcon key="b" />, <TrendingUpIcon key="c" />];
const WHY_ICONS = [
  <HandshakeIcon key="1" />,
  <BeachAccessIcon key="2" />,
  <LockIcon key="3" />,
  <CheckCircleOutlineIcon key="4" />,
  <AccountBalanceWalletIcon key="5" />,
  <StarsIcon key="6" />,
];

const SERVICE_IMAGES = [
  '/service/1.jpg', '/service/2.png', '/service/4.png', '/service/5.png', '/service/6.jpg',
  '/service/7.jpg', '/service/8.jpg', '/service/9.jpg', '/service/10.jpg', '/service/11.jpg',
  '/home/2.png', '/home/3.jpg', '/home/4.png', '/home/5.jpg', '/home/6.jpg',
];

const EXTRA_IMAGES = ['/service/7.jpg', '/service/6.jpg', '/service/8.jpg', '/service/9.jpg', '/service/10.jpg', '/about/2.jpg'];

const REVIEW_IMAGES = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg', '/reviewer-ryan.png'];

const SERVICE_LINKS: [RegExp, string][] = [
  [/gre/i, '/take-my-gre-exam'],
  [/hesi/i, '/take-my-hesi-exam'],
  [/ged/i, '/take-my-ged-exam'],
  [/teas/i, '/take-my-teas-exam'],
  [/comptia/i, '/take-my-comptia-exam'],
  [/real estate/i, '/take-my-real-estate-exam'],
  [/pmp/i, '/take-my-pmp-exam'],
  [/insurance/i, '/take-my-insurance-exam'],
  [/gmat/i, '/take-my-gmat-exam'],
  [/accounting/i, '/take-my-accounting-exam-for-me'],
  [/algebra/i, '/take-my-algebra-exam-for-me'],
  [/calculus/i, '/take-my-calculus-exam-for-me'],
  [/english/i, '/take-my-english-exam-for-me'],
  [/business/i, '/take-my-business-law-exam-for-me'],
  [/statistics/i, '/take-my-statistics-exam-for-me'],
  [/economics/i, '/take-my-economics-exam-for-me'],
  [/chemistry/i, '/take-my-chemistry-exam-for-me'],
  [/biology/i, '/take-my-biology-exam-for-me'],
  [/physics/i, '/take-my-physics-exam-for-me'],
  [/psychology/i, '/take-my-psychology-exam-for-me'],
  [/computer/i, '/take-my-computer-science-exam-for-me'],
  [/nursing/i, '/take-my-nursing-exam-for-me'],
  [/history/i, '/take-my-history-exam-for-me'],
  [/finance/i, '/take-my-finance-exam-for-me'],
  [/sociology/i, '/take-my-sociology-exam-for-me'],
  [/math/i, '/take-my-math-exam-for-me'],
  [/philosophy/i, '/take-my-philosophy-exam-for-me'],
  [/law/i, '/take-my-law-exam-for-me'],
  [/hiset/i, '/take-my-hiset-exam'],
  [/lsat/i, '/take-my-lsat-exam'],
  [/six sigma/i, '/take-my-lean-six-sigma-exam'],
  [/\baws\b/i, '/take-my-aws-exam'],
  [/azure/i, '/take-my-microsoft-azure-exam'],
  [/essay/i, '/essay-help'],
  [/homework/i, '/homework-help'],
];

const resolveLink = (title: string) => {
  const match = SERVICE_LINKS.find(([re]) => re.test(title));
  return match ? match[1] : '/contact/';
};

const SubjectPage = ({ data }: { data: SubjectPageData }) => {
  const { hero, services, counter, contentTwo, aboutTeam, contentOne, whyHire, getQuote, reviews, extraSections = [], faq } = data;

  const extraBlocks: (typeof extraSections)[] = [];
  for (let i = 0; i < extraSections.length; ) {
    const size = extraSections[i].features || extraSections[i + 1]?.features ? 1 : 2;
    extraBlocks.push(extraSections.slice(i, i + size));
    i += size;
  }

  const serviceItems = services.items.map((item, i) => ({
    title: item.title,
    description: item.description,
    image: item.image || SERVICE_IMAGES[i % SERVICE_IMAGES.length],
    link: resolveLink(item.title),
  }));

  const aboutFeatures = aboutTeam.features.map((f, i) => ({
    icon: ABOUT_ICONS[i % ABOUT_ICONS.length],
    title: f.title,
    desc: f.desc,
  }));

  const whyFeatures = whyHire.features.map((f, i) => ({
    icon: WHY_ICONS[i % WHY_ICONS.length],
    title: f.title,
    desc: f.desc,
  }));
  const half = Math.ceil(whyFeatures.length / 2);

  const reviewItems = reviews.items.map((r, i) => ({
    image: REVIEW_IMAGES[i % REVIEW_IMAGES.length],
    name: r.name,
    location: 'Verified Student',
    stars: 5,
    reviewText: r.reviewText,
  }));

  return (
    <>
      <Hero
        slides={[
          {
            topText: hero.topText,
            heading: <>{hero.heading}</>,
            subText: <p>{hero.subText}</p>,
            bullets: hero.bullets,
            ctaText: hero.cta,
            bgImage: hero.bgImage || '/home/hero.jpg',
          },
        ]}
      />
      <OurService
        services={serviceItems}
        h6={services.badge}
        h4={services.heading}
        description={services.description}
      />
      <CounterSection badge={counter.badge} heading={counter.heading} stats={counter.stats} />
      <ContentSectionTwo
        title1={contentTwo.title1}
        desc1={contentTwo.desc1}
        title2={contentTwo.title2}
        desc2={contentTwo.desc2}
        img1={contentTwo.img1 || "/subject/4.png"}
        img2={contentTwo.img2 || "/subject/5.png"}
      />
      <AboutTeam
        badge={aboutTeam.badge}
        heading={aboutTeam.heading}
        features={aboutFeatures}
        statValue={aboutTeam.statValue ?? 85}
        statLabel={aboutTeam.statLabel ?? 'Satisfied Students and parents'}
        imageSrc={aboutTeam.imageSrc || "/subject/1.jpg"}
      />
      <ContentOne
        heading1={contentOne.heading1}
        description1={contentOne.description1}
        heading2={contentOne.heading2}
        description2={contentOne.description2}
        image1={contentOne.image1 || "/subject/2.png"}
        image2={contentOne.image2 || "/subject/hero.jpg"}
      />
      <ExamSection />
      <WhyStudentHire
        centerImage="/our-experts/vector.jpg"
        heading={whyHire.heading}
        subHeading={whyHire.subHeading}
        featuresLeft={whyFeatures.slice(0, half)}
        featuresRight={whyFeatures.slice(half)}
      />
      <TrustedByHome />
      {extraBlocks.map(([first, second], i) => (
        <ContentThree
          key={first.heading}
          heading1={first.heading}
          description1={first.description}
          features={first.features?.map((f) => ({ title: f.title, text: f.desc }))}
          heading2={second?.heading}
          description2={second?.description}
          image1={EXTRA_IMAGES[(i * 2) % EXTRA_IMAGES.length]}
          image2={EXTRA_IMAGES[(i * 2 + 1) % EXTRA_IMAGES.length]}
        />
      ))}
      <GetQuote
        topLabel={getQuote.topLabel}
        heading={getQuote.heading}
        description={getQuote.description}
        contactHeading={getQuote.contactHeading}
        contactDescription={getQuote.contactDescription}
        phone="+12123476533"
        email="info@examsupportonline.com"
        liveChatText='Live Chat: Type Yes to Start'
        formHeading={getQuote.formHeading}
        formDescription={getQuote.formDescription}
        btnText="Get Instant Quote"
      />
      <ClientReviews
        badgeTitle={reviews.badgeTitle}
        mainTitle={reviews.mainTitle}
        description={reviews.description}
        buttonText="Contact Us"
        buttonLink="/contact/"
        reviews={reviewItems}
      />
      {faq && (
        <FAQSection
          mainTitle={faq.mainTitle}
          description={faq.description}
          buttonText="Talk to our experts"
          faqList={faq.items.map((item, i) => ({ id: `Q${i + 1}`, question: item.question, answer: item.answer }))}
        />
      )}
    </>
  );
};

export default SubjectPage;
