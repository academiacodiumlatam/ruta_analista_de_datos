# Changelog

Todos los cambios notables de este proyecto están documentados en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [1.6] - 2026-06-16

### Actualizado — Sílabos 2026 (los 12 cursos)

Revisión completa del contenido de `src/data/courses.ts`: módulos, lecciones, taglines y conteo de lecciones actualizados en los cuatro bloques de cursos para reflejar el sílabo oficial 2026.

#### Power BI
| Curso | Lecciones antes | Lecciones después | Nuevo tagline |
|---|---|---|---|
| Power BI Básico | 24 | 40 | *Fundamentos de Power BI para el Análisis de Datos* |
| Power BI Intermedio | 32 | 32 | *Análisis Empresarial con DAX y KPIs en Power BI* |
| Power BI Avanzado | 41 | 32 | *Analítica Avanzada, Optimización y Automatización con Power BI* |

#### Python
| Curso | Lecciones antes | Lecciones después | Nuevo tagline |
|---|---|---|---|
| Python Básico | 29 | 33 | *Fundamentos de Python para el Análisis de Datos y la Automatización* |
| Python Intermedio | 22 | 33 | *Análisis y Transformación de Datos con Python* |
| Python Avanzado | 24 | 33 | *Analítica Avanzada y Automatización Empresarial con Python* |

#### SQL Server
| Curso | Lecciones antes | Lecciones después | Nuevo tagline |
|---|---|---|---|
| SQL Básico | 40 | 33 | *Fundamentos de SQL Server para la Gestión de Bases de Datos* |
| SQL Intermedio | 23 | 33 | *Consultas Avanzadas y Automatización en SQL Server* |
| SQL Avanzado | 18 | 33 | *Administración, Optimización e Integración Avanzada de SQL Server* |

#### Excel
| Curso | Lecciones antes | Lecciones después | Nuevo tagline |
|---|---|---|---|
| Excel Básico | 28 | 37 | *Fundamentos de Excel para la Gestión y Análisis de Datos* |
| Excel Intermedio | 28 | 33 | *Automatización y Análisis Intermedio de Datos con Excel* |
| Excel Avanzado | 28 | 33 | *Desarrollo de Dashboards Ejecutivos y Analítica Avanzada con Excel* |

---

## [1.5] - 2026-06-07

### Optimizado
- Power BI iframe convertido a carga diferida (click-to-load): el embed de Microsoft Fabric no se descarga hasta que el usuario lo solicita, eliminando ~6 MB de JS de terceros en la carga inicial y reduciendo el Total Blocking Time de ~5 000 ms a <200 ms
- Google Fonts movido de `@import` CSS (render-blocking) a `<link rel="preconnect">` + `<link rel="stylesheet">` en el `<head>`, con ahorro estimado de 340-810 ms en First Paint

### Cambiado
- Imagen de la ruta reemplazada: de URL externa a archivo local `/assets/ruta_completa.webp` (1600×900); elimina dependencia de red a dominio externo
- Logo del header y footer migrado de PNG (467 KB) a WebP (`codium-logo-light.webp`), mismo canvas 7935×2000 pero menor peso
- Atributos `width`/`height` añadidos a imágenes del logo (nav y footer) y a la imagen de ruta para prevenir CLS (Cumulative Layout Shift)

### Corregido
- Footer logo se renderizaba como franja horizontal delgada: faltaba `width: auto; display: block` en `.footer-brand img`; el navegador usaba el ancho intrínseco del archivo (7935 px) sin escalar

---

## [1.4] - 2026-06-07

### Modificado
- Header móvil (≤940px): selector de idioma (ES/EN) y botón "Inscríbeme" eliminados del área visible del header y movidos al menú desplegable para limpiar la barra de navegación en pantallas pequeñas

### Corregido
- Selector de idioma en menú móvil: ahora ocupa el 100% del ancho con cada botón al 50%, evitando que el fondo activo se vea como un cuadradito
- Botón "Inscríbeme" en menú móvil: color de texto forzado a oscuro (`#1a1500`) para correcta legibilidad sobre fondo amarillo
- Menú móvil se cerraba solo al abrirse (parpadeo): causado por `open` como dependencia del `useEffect` de scroll; reemplazado por un `ref` para leer el estado sin recrear el listener

### Añadido
- Menú móvil se cierra automáticamente al hacer scroll fuera de él
- Menú móvil se cierra automáticamente al hacer click fuera del header

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
