import { z } from "zod";

const createGalleryZodSchema = z.object({
  image: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  isPublish: z.boolean().optional(),
  sortOrder: z.number().optional(),
});

const updateGalleryZodSchema = createGalleryZodSchema.partial();

export const GalleryValidation = {
  createGalleryZodSchema,
  updateGalleryZodSchema,
};
