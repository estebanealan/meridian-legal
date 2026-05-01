import pino from "pino";

/**
 * Campos que NUNCA deben aparecer en los logs.
 * Fase 2.6 del manifiesto VRC-ELITE v2026.
 */
const REDACTED_FIELDS = [
  "password",
  "token",
  "secret",
  "authorization",
  "cookie",
  "creditCard",
  "cardNumber",
  "cvv",
  "ssn",
  "email",
  "phone",
];

const IS_PRODUCTION = process.env.NODE_ENV === "production";

/**
 * Logger estructurado con pino.
 * Producción: JSON puro (para ingesta en Datadog/Logtail/etc.)
 * Desarrollo: pino-pretty con colores (si está disponible)
 *
 * Nota: exactOptionalPropertyTypes requiere instancias separadas
 * para evitar `transport: T | undefined` que TypeScript rechaza.
 */
export const logger = IS_PRODUCTION
  ? pino({
      level: "info",
      redact: {
        paths: REDACTED_FIELDS,
        censor: "[REDACTED]",
      },
      base: { env: "production" },
    })
  : pino({
      level: "debug",
      redact: {
        paths: REDACTED_FIELDS,
        censor: "[REDACTED]",
      },
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          ignore: "pid,hostname",
          translateTime: "HH:MM:ss",
        },
      },
      base: { env: process.env.NODE_ENV ?? "development" },
    });

export type Logger = typeof logger;
