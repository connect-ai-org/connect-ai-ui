import { HeaderComponent } from "../components/header/header.component";

export const HEADER_CONTENT = (cpm: HeaderComponent) => ({
  logo: {
    imageUrl: 'assets/images/connect-ai-logo-1.png',
    description: 'Connect AI logo',
    link: '/#',
  },
  navLinks: [
    {
      label: 'Home',
      link: '/#hero',
      onClick: () => {
        cpm.onToggleMenu();
      }
    },
    {
      label: 'Services',
      link: '/#services',
      onClick: () => {
        cpm.onToggleMenu();
      }
    },
    {
      label: 'About Us',
      link: '/#about',
      onClick: () => {
        cpm.onToggleMenu();
      }
    },
    {
      label: 'Contact',
      link: '/#contact',
      onClick: () => {
        cpm.onToggleMenu();
      }
    },
  ]
});

export const FOOTER_CONTENT = {
  logo: {
    imageUrl: 'assets/images/connect-ai-logo-2.png',
    description: 'Connect AI logo',
    link: '/#',
  },
  socials: [
    {
      icon: 'logo-instagram',
      url: 'https://instagram.com/connect.a.i?igshid=OGQ5ZDc2ODk2ZA==',
    },    
    {
      icon: 'logo-facebook',
      url: 'https://www.facebook.com/profile.php?id=61550051130743&mibextid=LQQJ4d',
    },
    // {
    //   icon: 'logo-twitter',
    //   url: 'https://twitter.com/',
    // },
  ],
  contact: {
    heading: 'Contact Us',
    address: 'Harrison, ACT, 2914',
    phone: '0414 001 427',
    email: 'contact@connectai.au',
  },
  quickLinks: {
    heading: 'Quick Links',
    items: [
      {
        label: 'Home',
        link: '/#',
      },
      {
        label: 'Services',
        link: '/#services',
      },
      {
        label: 'About Us',
        link: '/#about',
      },
      {
        label: 'Contact',
        link: '/#contact',
      },
    ],
  },
  services: {
    heading: 'Services',
    items: [
      {
        label: 'Design',
        link: '/design',
      },
      {
        label: 'Digital',
        link: '/digital',
      },
      {
        label: 'Marketing',
        link: '/marketing',
      },
    ],
  },
  copyright: 'Copyright © 2023 by Connect AI. All rights reserved.',
};