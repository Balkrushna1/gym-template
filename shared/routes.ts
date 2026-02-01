import { z } from 'zod';
import { insertContactInquirySchema, contactInquiries } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactInquirySchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
};

export type ContactSubmitInput = z.infer<typeof api.contact.submit.input>;
export type ContactSubmitResponse = z.infer<typeof api.contact.submit.responses[200]>;
