import { Router } from "@angular/router";

export const MARKETING_PAGE_CONTENT = (router: Router) => ({
  pageName: 'MARKETING',
  items: [
    {
      id: 0,
      title: 'Planning and Strategy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/marketing/planning-and-strategy.jpg',
      imageDescription: 'Planning and Strategy',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 1,
      title: 'Content and Copywriting',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/marketing/content-and-copywriting.jpg',
      imageDescription: 'Content and Copywriting',
      action: 'Enquire Now',
      navigateUrl: '/contact',
      onActionClicked: () => { router.navigate(['contact']) }
    }
  ]
});