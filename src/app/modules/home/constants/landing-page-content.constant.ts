const SERVICES = [
  {
    id: 1,
    name: 'Design',
    description: 'Design services encompass all graphics and branding such as banner advertising, logos, menus and websites to ensure a consistent and cohesive brand identity. We specialise in creating a unified brand image across a diverse range of mediums. This could involve rebranding, extending your current identity for new pieces of content, or designing and developing bespoke websites. Visit the case studies section to see some examples of our work!',
    imageUrl: 'assets/images/services/design.jpg',
    imageDescription: 'Design Service',
    routing: '/design',
  },
  {
    id: 2,
    name: 'Digital',
    description: 'Digital marketing is using various online platforms to showcase what you offer, connect with your ideal customers, and see your brand shine. Our services include Search Engine Optimisation (SEO), social media marketing, content marketing, pay-per-click advertising (Google Ads), and more. With digital marketing, you can spread your message far and wide, connect with the people who matter most, and track how well your campaigns are doing.',
    imageUrl: 'assets/images/services/digital.jpg',
    imageDescription: 'Digital Service',
    routing: '/digital',
  },
  {
    id: 3,
    name: 'Marketing',
    description: 'Marketing services provided are more medium-term engagements to rebrand your business and deliver ongoing content. This involves showcasing your products or services to potential customers across a variety of mediums. One key element is a content calendar – a plan to deliver a wide variety of content across social media and advertising platforms to bring brand awareness. Over time, this service can present your business through a modern and elegant lens creating a favourable and marketable brand image.',
    imageUrl: 'assets/images/services/marketing.jpg',
    imageDescription: 'Marketing Service',
    routing: '/marketing',
  },
];

const ABOUT = {
  imageUrl: 'assets/images/about.jpg',
  imageDescription: 'About Us',
  description: 'Welcome to Connect AI! We are a local Canberra business specialising in building brand images that resonate. After helping numerous friends start and improve their businesses by providing graphic design, marketing material, websites, photography, videography and social media help, Connect AI was formed as most products were created by AI with human polishing. ',
}

export const LANDING_PAGE_CONTENT = {
  websiteName: 'CONNECT AI',
  slogan: 'Innovate, Inspire, Influence',
  services: SERVICES,
  about: ABOUT,
}