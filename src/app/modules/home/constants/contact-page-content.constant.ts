import { ContactsComponent } from "../components/contacts/contacts.component";

export const CONTACT_PAGE_CONTENT = (cmp: ContactsComponent) => ({
  pageName: 'CONTACT US',
  items: [
    {
      id: 1,
      icon: 'bulb-outline',
      title: 'New Client Enquiry',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia.',
      actionName: 'Enquire Now',
      onActionClicked: () => {
        cmp.onEnquireNowClicked();
      }
    },
    {
      id: 2,
      icon: 'chatbubble-outline',
      title: 'Contact Us',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia.',
      actionName: 'Contact Us',
      onActionClicked: () => {
        cmp.onContactUsClicked();
      }
    },
    {
      id: 3,
      icon: 'pricetag-outline',
      title: 'Support Ticket',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam temporibus impedit at dignissimos eos mollitia.',
      actionName: 'Submit Ticket',
      onActionClicked: () => {
        cmp.onSubmitTicketClicked();
      }
    },
  ]
});

export enum CONTACT_FORM_IDS {
  NEW_CLIENT_ENQUIRY = 'new-client-enquiry-form',
  CONTACT = 'contact-form',
  SUPPORT_TICKET = 'support-ticket-form',
};

export enum CONTACT_FORM_TYPES {
  NEW_CLIENT_ENQUIRY = 'new-enquiry',
  CONTACT = 'contact',
  SUPPORT_TICKET = 'support-ticket',
}