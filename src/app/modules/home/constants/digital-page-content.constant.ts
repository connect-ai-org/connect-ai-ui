import { Router } from "@angular/router";

export const DIGITAL_PAGE_CONTENT = (router: Router) => ({
  pageName: 'DIGITAL',
  items: [
    {
      id: 0,
      title: 'Google Ads',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Google Ads',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 1,
      title: 'Social Media',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Social Media',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 2,
      title: 'Video',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Video',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 3,
      title: 'Websites',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Websites',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
  ]
});