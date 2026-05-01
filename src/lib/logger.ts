import pino from "pino";

const REDACTED_FIELDS = [
  "password",
  "token",
  "secret",
  "authorization",
  "cookie",
  "creditCard",
];

export const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  redact: {
    paths: REDACTED_FIELDS,
    censor: "[REDACTED]",
  },
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
});
