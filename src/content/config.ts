import { defineCollection, z } from "astro:content";

const about = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const artist = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    index: z.number(),
    artistType: z.enum([
      "Artist",
      "Composer",
      "DJ",
      "Producer",
      "Remixer",
      "Resident Sleeper",
      "SoundFX",
      "Visual",
    ]),
    socials: z
      .record(
        z.object({
          url: z.string(),
          name: z.string(),
        })
      )
      .refine(
        (value) => {
          const allowedKeys = [
            "spotify",
            "youtube",
            "soundcloud",
            "twitter",
            "discord",
          ];
          return Object.keys(value).every((key) => allowedKeys.includes(key));
        },
        {
          message: "Invalid social media platform",
        }
      ),
    image: z.string(),
    spotify: z.string().optional(),
  }),
});

const news = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

export const collections = { about, artist, news };
