import { defineCollection, z } from "astro:content";

const about = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const artists = defineCollection({
  schema: z.object({
    name: z.string(),
    customSlug: z.string(),
    index: z.number(),
    artistType: z.array(
      z.enum([
        "Artist",
        "Composer",
        "DJ",
        "Producer",
        "Remixer",
        "Resident Sleeper",
        "SoundFX",
        "Visual",
      ])
    ),
    socials: z.record(z.string()).refine(
      (value) => {
        const allowedKeys = [
          "spotify",
          "youtube",
          "instagram",
          "soundcloud",
          "twitter",
          "discord",
          "homepage",
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

export const collections = { about, artists, news };
