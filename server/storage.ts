import { db } from "./db";
import { contactInquiries, type InsertContactInquiry, type ContactInquiry } from "@shared/schema";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [created] = await db.insert(contactInquiries).values(inquiry).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
