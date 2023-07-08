import { ContactPageComponent } from "../components/contact-page/contact-page.component";

export const CONTACT_PAGE_CONTENT = (cmp: ContactPageComponent) => ({
  pageName: 'CONTACT US',
  items: [
    {
      id: 1,
      icon: 'bulb-outline',
      title: 'New Client Enquiry',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      actionName: 'Enquire Now',
      onActionClicked: () => {
        cmp.onEnquireNowClicked();
      }
    },
    {
      id: 2,
      icon: 'chatbubble-outline',
      title: 'Contact Us',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      actionName: 'Contact Us',
      onActionClicked: () => {
        cmp.onContactUsClicked();
      }
    },
    {
      id: 3,
      icon: 'pricetag-outline',
      title: 'Submit a Support Ticket',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia, dolor magni minus eligendi voluptas nisi ipsa necessitatibus quam fugiat consectetur vitae obcaecati assumenda.',
      actionName: 'Submit Ticket',
      onActionClicked: () => {
        cmp.onContactUsClicked();
      }
    },
  ]
});

export enum CONTACT_FORM {
  NEW_CLIENT_ENQUIRY,
  CONTACT,
}