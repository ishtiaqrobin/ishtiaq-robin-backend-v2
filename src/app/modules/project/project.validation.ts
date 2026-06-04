import { z } from "zod";

const createProjectZodSchema = z.object({
  title: z.string("title is required"),
  description: z.string("description is required"),
  tags: z
    .array(z.string("tags is required"))
    .nonempty("At least one tag is required"),
  categoryId: z.string("categoryId is required"),
  thumbnail: z.string().optional(),
  liveUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  isFeatured: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  sortOrder: z.number().optional(),
});

const updateProjectZodSchema = createProjectZodSchema.partial();

export const ProjectValidation = {
  createProjectZodSchema,
  updateProjectZodSchema,
};
