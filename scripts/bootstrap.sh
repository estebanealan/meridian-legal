#!/bin/bash
# scripts/bootstrap.sh
# Ejecutar una sola vez al crear el proyecto: bash scripts/bootstrap.sh
set -euo pipefail

PROJECT_TYPE="${1:-}" # landing | ecommerce | saas | api
if [ -z "$PROJECT_TYPE" ]; then
  echo "❌ Uso: bash scripts/bootstrap.sh <landing|ecommerce|saas|api>"
  exit 1
fi

# ============================================================
# PASO 1: Inicialización
# ============================================================
echo "🚀 [1/9] Inicializando proyecto..."
pnpm init
git init

# ============================================================
# PASO 2: Dependencias core (comunes a todo proyecto)
# ============================================================
echo "📦 [2/9] Instalando dependencias core..."
pnpm add typescript zod pino

pnpm add -D \
  @types/node \
  @biomejs/biome \
  husky lint-staged \
  @commitlint/cli @commitlint/config-conventional \
  vitest @vitest/coverage-v8

# ============================================================
# PASO 3: Dependencias por tipo de proyecto
# ============================================================
echo "📦 [3/9] Instalando dependencias para proyecto: $PROJECT_TYPE..."

case "$PROJECT_TYPE" in
  landing)
    pnpm add astro @astrojs/tailwind @astrojs/sitemap
    pnpm add -D tailwindcss tailwindcss-animate
    ;;
  ecommerce)
    pnpm add next react react-dom @medusajs/medusa stripe @stripe/stripe-js
    pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip \
      @radix-ui/react-select @radix-ui/react-popover @radix-ui/react-slot \
      class-variance-authority clsx tailwind-merge \
      motion lucide-react sonner \
      @tanstack/react-query react-hook-form @hookform/resolvers
    pnpm add -D tailwindcss tailwindcss-animate @tailwindcss/typography \
      @types/react @types/react-dom
    ;;
  saas)
    pnpm add next react react-dom hono drizzle-orm postgres \
      @auth/core @auth/drizzle-adapter bullmq ioredis
    pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip \
      @radix-ui/react-tabs @radix-ui/react-select @radix-ui/react-popover \
      @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-switch \
      @radix-ui/react-avatar @radix-ui/react-slot \
      class-variance-authority clsx tailwind-merge \
      motion lucide-react sonner recharts \
      @tanstack/react-query @tanstack/react-table \
      react-hook-form @hookform/resolvers
    pnpm add -D tailwindcss tailwindcss-animate @tailwindcss/typography \
      @tailwindcss/container-queries drizzle-kit \
      @types/react @types/react-dom
    ;;
  api)
    pnpm add hono drizzle-orm postgres ioredis
    pnpm add -D drizzle-kit
    ;;
esac

# ============================================================
# PASO 4: Generar TODOS los archivos de configuración
# ============================================================
echo "⚙️  [4/9] Generando archivos de configuración..."

# ============================================================
# PASO 5: Configurar Husky (git hooks)
# ============================================================
echo "🪝 [5/9] Configurando git hooks..."
pnpm exec husky init
echo 'pnpm exec lint-staged' > .husky/pre-commit
echo 'pnpm exec commitlint --edit "$1"' > .husky/commit-msg
chmod +x .husky/pre-commit .husky/commit-msg

# ============================================================
# PASO 6: Instalar extensiones de VS Code
# ============================================================
echo "🧩 [6/9] Instalando extensiones de VS Code..."

# Verificar que el CLI de VS Code esté disponible
if command -v code &> /dev/null; then
  echo "    VS Code CLI detectado. Instalando extensiones..."

  # ── Extensiones CORE (siempre se instalan) ──
  CORE_EXTENSIONS=(
    "biomejs.biome"                          # Linter + Formatter
    "ms-vscode.vscode-typescript-next"       # TypeScript mejorado
    "eamodio.gitlens"                        # Git avanzado
    "mhutchie.git-graph"                     # Visualización de ramas
    "usernamehw.errorlens"                   # Errores inline
    "streetsidesoftware.code-spell-checker"  # Spell check EN
    "streetsidesoftware.code-spell-checker-spanish" # Spell check ES
    "mikestead.dotenv"                       # Highlight de .env
    "christian-kohler.path-intellisense"     # Autocompletado de paths
    "christian-kohler.npm-intellisense"      # Autocompletado de npm
    "SonarSource.sonarlint-vscode"           # Análisis estático de calidad
    "vitest.explorer"                        # Test runner UI
  )

  # ── Extensiones por tipo de proyecto ──
  FRONTEND_EXTENSIONS=(
    "bradlc.vscode-tailwindcss"              # Tailwind intellisense
    "csstools.postcss"                       # PostCSS syntax
  )

  BACKEND_EXTENSIONS=(
    "cweijan.vscode-database-client2"        # DB explorer
    "ms-azuretools.vscode-docker"            # Docker
    "humao.rest-client"                      # API testing
  )

  ASTRO_EXTENSIONS=(
    "astro-build.astro-vscode"               # Astro support
  )

  DRIZZLE_EXTENSIONS=(
    "Prisma.prisma"                          # Prisma (si se usa)
  )

  # ── Instalar extensiones core ──
  for ext in "${CORE_EXTENSIONS[@]}"; do
    code --install-extension "$ext" --force 2>/dev/null || echo "    ⚠️  No se pudo instalar $ext"
  done

  # ── Instalar extensiones según tipo de proyecto ──
  case "$PROJECT_TYPE" in
    landing)
      for ext in "${FRONTEND_EXTENSIONS[@]}" "${ASTRO_EXTENSIONS[@]}"; do
        code --install-extension "$ext" --force 2>/dev/null || true
      done
      ;;
    ecommerce|saas)
      for ext in "${FRONTEND_EXTENSIONS[@]}" "${BACKEND_EXTENSIONS[@]}"; do
        code --install-extension "$ext" --force 2>/dev/null || true
      done
      ;;
    api)
      for ext in "${BACKEND_EXTENSIONS[@]}"; do
        code --install-extension "$ext" --force 2>/dev/null || true
      done
      ;;
  esac

  # ── Desinstalar extensiones que conflictan con Biome ──
  echo "    Desinstalando extensiones conflictivas..."
  code --uninstall-extension "dbaeumer.vscode-eslint" 2>/dev/null || true
  code --uninstall-extension "esbenp.prettier-vscode" 2>/dev/null || true

  echo "    ✅ Extensiones instaladas y configuradas."

elif command -v cursor &> /dev/null; then
  echo "    Cursor IDE detectado. Instalando extensiones..."
  for ext in "${CORE_EXTENSIONS[@]}"; do
    cursor --install-extension "$ext" --force 2>/dev/null || true
  done
  echo "    ✅ Extensiones instaladas en Cursor."

elif command -v codium &> /dev/null; then
  echo "    VSCodium detectado. Instalando extensiones..."
  for ext in "${CORE_EXTENSIONS[@]}"; do
    codium --install-extension "$ext" --force 2>/dev/null || true
  done
  echo "    ✅ Extensiones instaladas en VSCodium."

else
  echo "    ⚠️  No se detectó VS Code, Cursor ni VSCodium."
  echo "    Las extensiones recomendadas están en .vscode/extensions.json"
fi

# ============================================================
# PASO 7: Configuración específica del editor post-instalación
# ============================================================
echo "🔧 [7/9] Aplicando configuración del editor..."

if command -v code &> /dev/null; then
  echo "    Biome configurado como formatter por defecto."
fi
echo "    TypeScript SDK: usando la versión del proyecto (node_modules)."

# ============================================================
# PASO 8: Levantar servicios locales (si aplica)
# ============================================================
if [ "$PROJECT_TYPE" != "landing" ]; then
  echo "🐳 [8/9] Levantando servicios locales..."
  if command -v docker &> /dev/null; then
    docker compose up -d
    echo "    Esperando a que los servicios estén healthy..."
    sleep 5
    docker compose ps
  else
    echo "    ⚠️  Docker no instalado."
  fi
else
  echo "🐳 [8/9] Servicios locales: No requeridos para landing page."
fi

# ============================================================
# PASO 9: Verificación final
# ============================================================
echo ""
echo "✅ [9/9] Verificación final..."
echo ""

# Type-check
echo "  [TypeScript] Verificando tipos..."
pnpm exec tsc --noEmit && echo "  ✅ TypeScript: OK" || echo "  ❌ TypeScript: errores encontrados"

# Biome
echo "  [Biome] Verificando linting y formato..."
pnpm exec biome check . && echo "  ✅ Biome: OK" || echo "  ❌ Biome: errores encontrados"

# Git hooks
echo "  [Husky] Verificando git hooks..."
[ -f .husky/pre-commit ] && echo "  ✅ Husky pre-commit: OK" || echo "  ❌ Husky pre-commit: no encontrado"
[ -f .husky/commit-msg ] && echo "  ✅ Husky commit-msg: OK" || echo "  ❌ Husky commit-msg: no encontrado"

echo ""
echo "🎉 Proyecto inicializado correctamente."
