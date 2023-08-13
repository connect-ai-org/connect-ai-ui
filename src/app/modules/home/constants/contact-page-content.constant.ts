import { ContactsComponent } from "../components/contacts/contacts.component";

export const CONTACT_PAGE_CONTENT = (cmp: ContactsComponent) => ({
  pageName: 'CONTACT US',
  items: [
    {
      id: 1,
      icon: 'bulb-outline',
      title: 'New Client Enquiry',
      description: 'We would love to hear from you! Leave your enquiries below, and we will get touch with you shortly.',
      actionName: 'Enquire Now',
      onActionClicked: () => {
        cmp.onEnquireNowClicked();
      }
    },
    {
      id: 2,
      icon: 'chatbubble-outline',
      title: 'Contact Our Team',
      description: 'Need answers or more details? Drop us a message, and we\'ll reply within 1-2 business days.',
      actionName: 'Contact Us',
      onActionClicked: () => {
        cmp.onContactUsClicked();
      }
    },
    {
      id: 3,
      icon: 'pricetag-outline',
      title: 'Support Ticket',
      description: 'If you require any assistance, please feel free to reach out using the form below. Rest assured; we\'ll get in touch with you shortly.',
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