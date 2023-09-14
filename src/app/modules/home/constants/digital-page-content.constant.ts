import { Router } from "@angular/router";

export const DIGITAL_PAGE_CONTENT = (router: Router) => ({
  pageName: 'DIGITAL',
  items: [
    {
      id: 3,
      title: 'Websites',
      description: 'Digital websites are a key piece of marketing content to showcase products or services and facilitate communication with customers. Our website design service will deliver wireframes of your future website with all content (depending on your requirements) with a focus on featuring location-specific keywords so your business can be discovered from anywhere in the world. Reach out to us now, and together, we can review your website to ensure it meets your needs effectively. We also offer software engineering services and website creation from templates.',
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Websites',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { 
        sessionStorage.setItem('anchorId', 'contact');
        router.navigate(['']);
      }
    },
    {
      id: 0,
      title: 'Google Ads',
      description: "Pay-per-click advertising can be an effective way to build brand recognition with the power of Google AdWords. Google Ads allows you to reach potential customers at the precise moment when they are actively looking for products or services that align with what you offer. At Connect AI, we can develop advertising material, monitor the analytics, then make modifications based on levels of engagement. This means your business information, articles or products can appear on the search engine results page (SERP) when potential customers are searching for products or services in a similar industry.",
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Google Ads',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { 
        sessionStorage.setItem('anchorId', 'contact');
        router.navigate(['']);
      }
    },
    {
      id: 1,
      title: 'Social Media',
      description: "Social media is a popular digital tool to create and maintain brand awareness and interact with existing customers. By updating creative content and actively interacting with business followers, your business can build long-term relationships with old or potential customers and over time, become a household name. Services include creating engaging content, and interacting with followers, analysing results, and running ads on the platform of choice.",
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Social Media',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { 
        sessionStorage.setItem('anchorId', 'contact');
        router.navigate(['']);
      }
    },
    {
      id: 2,
      title: 'Digital Video and Photographs',
      description: "Photography and videography can capture and showcase the essence of business. Visuals create a deeper connection with audiences, showcasing the quality and value of your products and services. Visual content is one of the most important and effective pieces of advertising, encapsulate the very essence of your brand, narrating your journey and values through compelling visuals. Our team is attuned to the latest trends and can elevate your brand presence, delivering moments that create lasting memories.",
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Video',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { 
        sessionStorage.setItem('anchorId', 'contact');
        router.navigate(['']);
       }
    },
  ]
});