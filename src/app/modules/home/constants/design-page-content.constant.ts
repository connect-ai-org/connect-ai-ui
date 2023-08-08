import { Router } from '@angular/router';

export const DESIGN_PAGE_CONTENT = (router: Router) => ({
  pageName: 'DESIGN',
  items: [
    {
      id: 0,
      title: 'Branding',
      description:
        'Every individual must have encountered the overwhelming sensation of being confronted with numerous product options while making a purchase decision. ' +
        'Several factors contribute to this confusion, such as seeking affordability, being drawn to superior features, or simply being attracted by a particular design. ' +
        'This is where the importance of branding design comes into play. To emerge as the ultimate choice among numerous competitors, a product needs to establish itself ' +
        "as the notable and preferred option. What exactly is branding design, and why is it significant?\n\nBrand design is a process of creating a brand's visual identity " +
        'across various aspects, involving elements like the logo, typography, icons, colours, illustrations, and more. Visual information enables the communication of numerous ' +
        "messages without being restricted by age or language barriers.\n\nThe aim of branding design is to clarify the company's principles and the offerings of its products and " +
        'services, aiding consumers in comprehending their value and intended audience. In fact, people are frequently drawn to content presented through images rather than ' +
        "articles. Therefore, visual information will be the point of direct impact on visitor's decisions. To design your business brand effectively, answer important questions " +
        'about how you want people to perceive it and the emotions you want them to associate with it. A strong brand conveys a clear message and leaves a lasting impression on customers.',
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
        'In the marketing process, graphic design plays a crucial role because it serves as a means for businesses to effectively communicate with their audiences. ' +
        'Graphic designers narrate your brand stories through images, colours, typography. By applying visual approach, the products can meet customers’ specific needs and focus ' +
        'on the logic of organising elements in interactive designs, ultimately enhancing the user experience.\n\nThe end result of graphic design is a combination of creativity ' +
        'and business savvy. This means that the product presented to customers not only boasts artistic and aesthetic visual elements but also conveys the business message, ' +
        'attracting potential customers. Graphic designers undertake a wide range of tasks, including crafting social media ads, collaborating with ad copy and headlines, handling ' +
        'product photography, and providing invaluable guidance to businesses in establishing their brand identity, just to name a few. When crafting a winning business strategy, ' +
        'graphic design takes the spotlight, paving the way for business success in the competitive world of marketing.\n\nTo have attention and attraction from customers, a ' +
        'product of graphic design must meet various principles. The classic principles derived from the Gestalt theory of visual perception encompass similarity, continuation, ' +
        'closure, proximity, figure/ground, and symmetry & order. By skilfully integrating these elements, a design can be elevated into a professional and visually captivating ' +
        'graphic.\n\n Developing a graphic design product may be costly in conception and development. However, effective design can lead to greater success and competitiveness ' +
        'in the market, making it a valuable investment for any business or project. ',
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Graphic Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => {
        router.navigate(['contact']);
      },
    },
    {
      id: 2,
      title: 'Website Design',
      description:
        'Web design is the process of planning and organising website content for the purpose of creating a user-friendly, and functional online platform that introduces ' +
        'information about businesses, promotes products or services and engages visitors. It is the online shopfront for your business and we aim to design an experience ' +
        'that aligns with your vision and values.\n\nA strategic website holds immense value for businesses. It serves as the initial touchpoint between potential customers ' +
        'and a brand. A visually appealing and user-friendly website leaves a powerful first impression, leading to increased conversion rates. Therefore, web design is ' +
        'constantly evolving to meet the growing needs of website owners and visitors. It encompasses creating visual layouts, user interfaces, and appearances, using ' +
        'elements like graphics, images, text, colours, and interactive features to make the website aesthetically attractive. Web design may also involve advanced features ' +
        'like search engine optimisation (SEO) and conversion rate optimisation (CRO) to spread the product and reach customers with relevant keywords and content.\n\nIn ' +
        'the digital age, most business owners understand the importance of having a website to appear professional and reach online customers. However, they may not always ' +
        'grasp how their website integrates into their overall digital marketing strategy. In such situations, professional designers come into play, refining and ' +
        'transforming your ideas using the appropriate tools. A skilfully designed website can leave a positive impression on potential customers regarding your brand, ' +
        'and motivates visitors to take actions like making purchases or subscribing to notifications. If you\'re unsure where to start in creating a stunning, stay ' +
        'updated by following us on this website or leaving your information for prompt notifications. ',
      imageUrl: 'assets/images/design/web-design.jpg',
      imageDescription: 'Website Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => {
        router.navigate(['contact']);
      },
    },
  ],
});
