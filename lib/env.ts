import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Formspree — formulario de contacto (opcional, agregar cuando se configure)
  NEXT_PUBLIC_FORMSPREE_ENDPOINT: z.string().url().optional(),
});

// Falla inmediatamente al arrancar si alguna variable requerida falta o es inválida.
export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
