import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  SITE_URL: z.string().url().default("https://meridianlegis.com"),
  // Formspree — formulario de contacto (agregar cuando se configure)
  PUBLIC_FORMSPREE_ENDPOINT: z.string().url().optional(),
});

export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
