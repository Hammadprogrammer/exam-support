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
import ExamSection from '@/container/home/exam_section/exam_section';
import FeatureSectionHome from '@/container/home/feature_section/feature_section';
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
  '/subject/1.jpg', '/subject/2.png', '/subject/3.jpg', '/subject/1.jpg', '/subject/5.png', '/subject/4.png',
  '/subject/4.png', '/subject/5.png', '/subject/3.jpg', '/subject/2.png', '/subject/5.png', '/subject/2.png',
  '/subject/1.jpg', '/subject/3.jpg', '/subject/2.png',
];

const REVIEW_IMAGES = ['/t1.jpg', '/t2.jpg', '/t3.jpg', '/t4.jpg'];

const SERVICE_LINKS: [RegExp, string][] = [
  [/proctored/i, '/proctored-exam-help'],
  [/quiz/i, '/online-tests-quizzes'],
  [/gre/i, '/online-gre-test'],
  [/hesi/i, '/online-hesi-exam'],
  [/psi/i, '/online-psi-exam'],
  [/online class/i, '/online-class-help'],
  [/online course/i, '/online-course-help'],
  [/ged/i, '/online-ged-test'],
  [/teas/i, '/online-teas-test'],
  [/comptia/i, '/comptia-exams'],
  [/real estate/i, '/real-estate-exam'],
  [/pmp/i, '/online-pmp-exam'],
  [/insurance/i, '/insurance-exam'],
  [/gmat/i, '/online-gmat-exam'],
  [/online exam/i, '/online-exam-help'],
  [/accounting/i, '/accounting-exam'],
  [/algebra/i, '/algebra-exam'],
  [/calculus/i, '/calculus-exam'],
  [/english/i, '/english-exam'],
  [/business/i, '/business-exam'],
  [/statistics/i, '/statistics-exam'],
  [/economics/i, '/economics-exam'],
  [/chemistry/i, '/chemistry-exam'],
  [/biology/i, '/biology-exam'],
  [/physics/i, '/physics-exam'],
  [/psychology/i, '/psychology-exam'],
  [/computer/i, '/computer-exam'],
  [/nursing/i, '/nursing-exam'],
  [/history/i, '/history-exam'],
  [/finance/i, '/finance-exam'],
  [/sociology/i, '/sociology-exam'],
  [/math/i, '/math-exam'],
  [/philosophy/i, '/philosophy-exam'],
  [/law/i, '/law-exam'],
];

const resolveLink = (title: string) => {
  const match = SERVICE_LINKS.find(([re]) => re.test(title));
  return match ? match[1] : '/contact/';
};

const SubjectPage = ({ data }: { data: SubjectPageData }) => {
  const { hero, services, counter, contentTwo, aboutTeam, contentOne, whyHire, getQuote, reviews } = data;

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
            bgImage: hero.bgImage || '/subject/hero.jpg',
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
        image2={contentOne.image2 || "/subject/3.jpg"}
      />
      <ExamSection />
      <WhyStudentHire
        centerImage="/subject/1.jpg"
        heading={whyHire.heading}
        subHeading={whyHire.subHeading}
        featuresLeft={whyFeatures.slice(0, half)}
        featuresRight={whyFeatures.slice(half)}
      />
      <FeatureSectionHome />
      <TrustedByHome />
      <GetQuote
        topLabel={getQuote.topLabel}
        heading={getQuote.heading}
        description={getQuote.description}
        contactHeading={getQuote.contactHeading}
        contactDescription={getQuote.contactDescription}
        phone="+12123476533"
        email="info@examsupportonline.com"
        liveChatText='Live Chat: Type "Yes" to Start'
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
    </>
  );
};

export default SubjectPage;
