import { Router } from "@angular/router";

export const DESIGN_PAGE_CONTENT = (router: Router) => ({
  pageName: 'DESIGN',
  items: [
    {
      id: 0,
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/branding.jpg',
      imageDescription: 'Branding',
      action: 'ENQUIRE NOW',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 1,
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/graphic-design.jpg',
      imageDescription: 'Graphic Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => { router.navigate(['contact']) }
    },
    {
      id: 2,
      title: 'Website Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      imageUrl: 'assets/images/design/web-design.jpg',
      imageDescription: 'Website Design',
      action: 'ENQUIRE NOW',
      onActionClicked: () => { router.navigate(['contact']) }
    }
  ]
});