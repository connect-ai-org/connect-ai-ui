import { IFile } from "../../shared/models/file.model";

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
  company?: string,
  message: string,
}

export interface ISupportTicket {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  ticket: string,
  attachments?: File[]
}