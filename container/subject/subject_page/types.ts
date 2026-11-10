export interface SubjectFeature {
  title: string;
  desc: string;
}

export interface SubjectStat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubjectServiceItem {
  title: string;
  description: string;
  image?: string;
}

export interface SubjectReview {
  name: string;
  reviewText: string;
}

export interface SubjectPageData {
  hero: {
    topText: string;
    heading: string;
    subText: string;
    bullets: string[];
    bgImage?: string;
  };
  services: {
    badge: string;
    heading: string;
    description: string;
    items: SubjectServiceItem[];
  };
  counter: {
    badge: string;
    heading: string;
    stats: SubjectStat[];
  };
  contentTwo: {
    title1: string;
    desc1: string;
    title2: string;
    desc2: string;
    img1?: string;
    img2?: string;
  };
  aboutTeam: {
    badge: string;
    heading: string;
    features: SubjectFeature[];
    statValue?: number;
    statLabel?: string;
    imageSrc?: string;
  };
  contentOne: {
    heading1: string;
    description1: string;
    heading2: string;
    description2: string;
    image1?: string;
    image2?: string;
  };
  whyHire: {
    heading: string;
    subHeading: string;
    features: SubjectFeature[];
  };
  getQuote: {
    topLabel: string;
    heading: string;
    description: string;
    contactHeading: string;
    contactDescription: string;
    formHeading: string;
    formDescription: string;
  };
  reviews: {
    badgeTitle: string;
    mainTitle: string;
    description: string;
    items: SubjectReview[];
  };
}
