import { Router } from '@angular/router';

export const DESIGN_PAGE_CONTENT = (router: Router) => ({
  pageName: 'DESIGN',
  items: [
    {
      id: 0,
      title: 'Branding',
      description:
      'Brand design involves crafting your brand\'s visual style across various elements, including the logo, fonts, symbols, colours, illustrations, and more. Visual elements have the power to convey messages without language or age barriers. A strong brand communicates a distinct message and creates a memorable mark on customers.\n\n' + 
      'The goal of branding design is to clarify a company\'s values and its product and service offerings. This helps consumers understand their worth and intended audience. Visual information often captures attention better than written content, making it a direct influencer on visitor decisions. To effectively design your business brand, consider key questions about how you want people to perceive it and the emotions you wish to associate with it. A robust brand delivers a clear message and leaves a lasting impression on customers.',
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Branding',
      action1: 'see more',
      action: 'ENQUIRE NOW',
      onActionClicked: () => {
        router.navigate(['contact']);
      },
    },
    {
      id: 1,
      title: 'Graphic Design',
      description:
        "Elevate Your Business with Our Graphic Design Services! We provide graphics across various mediums such as menus, banner advertising, email signatures, print media, business cards, social media and more. This visual approach tailors products to meet specific customer needs while strategically arranging elements for interactive designs that elevate user experiences.\n\n" +
        "Our designers tackle a wide spectrum of tasks, from crafting engaging social media ads to collaborating on impactful ad copy and headlines, handling product photography, and offering invaluable guidance to establish a distinctive brand identity – and that's just a glimpse of our expertise. Let us help you carve your path to success through the power of impactful graphic design!",
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Graphic Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => {
        router.navigate(['contact']);
      },
    },
    {
      id: 2,
      title: 'Website Design and Development',
      description:
        "Combining branding and graphics, we specialise in designing and developing bespoke websites to help your business stand out. This is an opportunity to create your vision for your online presence utilising the support from our design and development team to deliver a website that can establishing credibility and connecting with online customers.",
      imageUrl: 'assets/images/design/web-design.jpg',
      imageDescription: 'Website Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => {
        router.navigate(['contact']);
      },
    },
  ],
});
