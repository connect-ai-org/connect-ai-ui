export interface INewClientEnquiry {
  businessName: string,
  firstName: string,
  lastName: string,
  jobTitle?: string,
  isBusinessOwner?: boolean,
  phone: string,
  email: string,
  website?: string,
  industry: string,
  hasMarketingPlan?: boolean,
  description: string,
  knownBy: string,
  hasAlreadyWorkedWithMarketingAgency?: boolean,
}

export interface IContact {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  website?: string,
  message: string,
}