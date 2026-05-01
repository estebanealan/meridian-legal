import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tipos permitidos: feat, fix, chore, docs, refactor, perf, test, ci, style, build, revert
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "refactor",
        "perf",
        "test",
        "ci",
        "style",
        "build",
        "revert",
      ],
    ],
    // Máximo 100 caracteres en el header del commit
    "header-max-length": [2, "always", 100],
    // El scope es opcional pero si está presente, debe estar en minúsculas
    "scope-case": [2, "always", "lower-case"],
    // El subject no puede estar vacío
    "subject-empty": [2, "never"],
    // El subject no puede terminar con punto
    "subject-full-stop": [2, "never", "."],
  },
};

export default config;
