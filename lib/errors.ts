/**
 * Jerarquía de errores tipados de la aplicación.
 * Fase 2.5 del manifiesto VRC-ELITE v2026.
 */

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 500,
    public readonly isOperational: boolean = true,
  ) {
    super(message);
    this.name = "AppError";
    // Asegurar prototype chain correcta en entornos ES5 transpilados
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, "NOT_FOUND", 404);
    this.name = "NotFoundError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400);
    this.name = "ValidationError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, "UNAUTHORIZED", 401);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, "FORBIDDEN", 403);
    this.name = "ForbiddenError";
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Too many requests") {
    super(message, "RATE_LIMIT", 429);
    this.name = "RateLimitError";
  }
}

/**
 * Type guard — determina si un error desconocido es un AppError operacional.
 */
export function isOperationalError(error: unknown): error is AppError {
  return error instanceof AppError && error.isOperational;
}

/**
 * Extrae un mensaje seguro de cualquier tipo de error.
 * Nunca expone información interna en producción.
 */
export function toSafeErrorMessage(
  error: unknown,
  fallback = "Ha ocurrido un error inesperado.",
): string {
  if (error instanceof AppError && error.isOperational) {
    return error.message;
  }
  return fallback;
}
