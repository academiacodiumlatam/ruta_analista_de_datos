# Changelog

Todos los cambios notables de este proyecto están documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [1.3] - 2026-06-04

### Modificado
- Íconos de medios de pago en la card de precio reemplazados: los SVG generados por código en `PayIcon` fueron sustituidos por archivos SVG reales ubicados en `public/assets/logos/`

### Añadido
- Logos de medios de pago: `visa.svg`, `mastercard.svg`, `paypal.svg`, `yape.svg`, `plin.svg`

---

## [1.2] - 2026-06-03

### Corregido
- Nombre de marca actualizado en el footer: `@academiacodium` → `@academiacodiumlatam`
- Copyright actualizado de "Academia Codium" a "Academia Codium Latam"

### Añadido
- Logo de PostgreSQL (`/public/assets/logos/postgresql.svg`)
- Logo de Python (`/public/assets/logos/python.svg`)

---

## [1.1] - 2026-06-03

### Corregido
- Corrección ortográfica completa de todos los textos en español de los 12 temarios:
  tildes faltantes (`Instalación`, `Conexión`, `menús`, `foráneas`, `jerárquicos`,
  `Índices`, `caché`, `auditoría`, `Diseño`, `búsqueda`, `dinámicas`, `Cálculo`, etc.)
- Signos de apertura de pregunta añadidos donde faltaban (`¿Qué es Python?`, `¿Qué es pandas?`)
- Corregido error de caracteres en jerarquía Power BI: `(ño > Mes > ía)` → `(Año > Mes > Día)`

### Añadido
- Traducción al inglés completa de todos los módulos y lecciones de los cursos:
  Python Básico, Python Intermedio, Python Avanzado,
  SQL Básico, SQL Intermedio, SQL Avanzado,
  Excel Básico, Excel Intermedio, Excel Avanzado
- Tagline descriptivo en español e inglés para cada uno de los 12 cursos:
  - **Power BI Básico** — *Da tus primeros pasos en el análisis visual de datos con Power BI*
  - **Power BI Intermedio** — *Domina el modelado de datos y DAX para construir dashboards profesionales*
  - **Power BI Avanzado** — *Construye soluciones BI empresariales con DAX avanzado, Python e integración con SQL*
  - **Python Básico** — *Aprende a programar con Python y da tus primeros pasos en el análisis de datos*
  - **Python Intermedio** — *Analiza y transforma datos reales con Pandas y Python*
  - **Python Avanzado** — *Visualiza, explora y analiza datos con Pandas, Matplotlib y NumPy*
  - **SQL Básico** — *Aprende a consultar y gestionar bases de datos relacionales con SQL*
  - **SQL Intermedio** — *Domina funciones de ventana, CTEs y técnicas avanzadas de consulta SQL*
  - **SQL Avanzado** — *Domina PostgreSQL avanzado: índices, triggers, PL/pgSQL y seguridad de datos*
  - **Excel Básico** — *Domina los fundamentos de Excel para organizar y analizar información*
  - **Excel Intermedio** — *Automatiza cálculos, gestiona bases de datos y crea tablas dinámicas en Excel*
  - **Excel Avanzado** — *Domina Excel como herramienta profesional de análisis, automatización y toma de decisiones*

---

## [1.0] - 2026-06-03

### Añadido
- Proyecto inicial: landing page de la Ruta del Analista de Academia Codium Latam
- Estructura del proyecto con Astro + React + TypeScript
- Componente principal `App.tsx` con interfaz bilingüe (español / inglés)
- Datos de los 12 cursos en `src/data/courses.ts`:
  - Power BI Básico, Intermedio y Avanzado
  - Python Básico, Intermedio y Avanzado
  - SQL Básico, Intermedio y Avanzado
  - Excel Básico, Intermedio y Avanzado
- Sistema de internacionalización en `src/i18n/index.ts`
- Estilos globales en `src/styles/global.css`
- Layout base en `src/layouts/Layout.astro`
- Assets iniciales: logo de Codium, logo de Power BI, logo de Excel
- Configuración de Astro (`astro.config.mjs`), TypeScript (`tsconfig.json`) y pnpm
