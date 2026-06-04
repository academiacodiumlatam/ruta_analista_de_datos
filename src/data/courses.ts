export type Lang = 'es' | 'en';
export type BiLang = { es: string; en: string };
export type CatKey = 'powerbi' | 'python' | 'sql' | 'excel';
export type LevelKey = 'basico' | 'intermedio' | 'avanzado';

export interface Cat {
  label: string;
  color: string;
  logo: string;
}

export interface Module {
  title: BiLang;
  lessons: BiLang[];
}

export interface Course {
  id: string;
  n: number;
  cat: CatKey;
  level: LevelKey;
  hours: number;
  lessons: number;
  title: BiLang;
  tagline: BiLang;
  modules: Module[];
}

export const CATS: Record<CatKey, Cat> = {
  powerbi: { label: 'Power BI', color: '#f6a623', logo: '/assets/logos/powerbi.svg' },
  python:  { label: 'Python',   color: '#2dd4bf', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  sql:     { label: 'SQL',      color: '#3aa17e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  excel:   { label: 'Excel',    color: '#34c759', logo: '/assets/logos/excel.svg' },
};

export const LEVELS: Record<LevelKey, BiLang> = {
  basico:     { es: 'Básico',     en: 'Beginner' },
  intermedio: { es: 'Intermedio', en: 'Intermediate' },
  avanzado:   { es: 'Avanzado',   en: 'Advanced' },
};

const t = (es: string, en: string): BiLang => ({ es, en });

export const COURSES: Course[] = [
  {
    id: 'pbi-1', n: 1, cat: 'powerbi', level: 'basico', hours: 10, lessons: 18,
    title:   t('Power BI Básico', 'Power BI Basics'),
    tagline: t('Conecta datos, modela y crea tu primer dashboard interactivo.',
               'Connect data, model it, and build your first interactive dashboard.'),
    modules: [
      { title: t('Primeros pasos en Power BI', 'Getting started with Power BI'),
        lessons: [ t('El ecosistema Power BI (Desktop, Service, Mobile)', 'The Power BI ecosystem (Desktop, Service, Mobile)'),
                   t('Instalación y recorrido por la interfaz', 'Installation and interface tour'),
                   t('Conexión a Excel, CSV y bases de datos', 'Connecting to Excel, CSV and databases') ] },
      { title: t('Transformación con Power Query', 'Transforming data with Power Query'),
        lessons: [ t('Limpiar, dividir y combinar columnas', 'Clean, split and merge columns'),
                   t('Tipos de datos y manejo de errores', 'Data types and error handling'),
                   t('Combinar y anexar consultas', 'Merge and append queries') ] },
      { title: t('Tu primer reporte', 'Your first report'),
        lessons: [ t('Visuales esenciales: barras, líneas, tarjetas', 'Core visuals: bars, lines, cards'),
                   t('Filtros, segmentadores e interacciones', 'Filters, slicers and interactions'),
                   t('Diseño y publicación del reporte', 'Report layout and publishing') ] },
    ],
  },
  {
    id: 'pbi-2', n: 2, cat: 'powerbi', level: 'intermedio', hours: 12, lessons: 20,
    title:   t('Power BI Intermedio', 'Power BI Intermediate'),
    tagline: t('Modelado en estrella, relaciones y tus primeras medidas DAX.',
               'Star schema modeling, relationships and your first DAX measures.'),
    modules: [
      { title: t('Modelado de datos', 'Data modeling'),
        lessons: [ t('Esquema en estrella y tablas de hechos/dimensiones', 'Star schema, fact and dimension tables'),
                   t('Relaciones, cardinalidad y dirección del filtro', 'Relationships, cardinality and filter direction'),
                   t('Tablas de calendario y de fechas', 'Calendar and date tables') ] },
      { title: t('Introducción a DAX', 'Introduction to DAX'),
        lessons: [ t('Columnas calculadas vs. medidas', 'Calculated columns vs. measures'),
                   t('CALCULATE, FILTER y contexto', 'CALCULATE, FILTER and context'),
                   t('Funciones de inteligencia de tiempo', 'Time intelligence functions') ] },
      { title: t('Reportes que comunican', 'Reports that communicate'),
        lessons: [ t('Jerarquías y drill-down', 'Hierarchies and drill-down'),
                   t('Tooltips, marcadores y botones', 'Tooltips, bookmarks and buttons'),
                   t('Temas y plantillas corporativas', 'Themes and corporate templates') ] },
    ],
  },
  {
    id: 'py-1', n: 3, cat: 'python', level: 'basico', hours: 14, lessons: 22,
    title:   t('Python Básico', 'Python Basics'),
    tagline: t('Fundamentos de programación para análisis de datos desde cero.',
               'Programming fundamentals for data analysis from scratch.'),
    modules: [
      { title: t('Fundamentos del lenguaje', 'Language fundamentals'),
        lessons: [ t('Variables, tipos y operadores', 'Variables, types and operators'),
                   t('Strings, listas, tuplas y diccionarios', 'Strings, lists, tuples and dictionaries'),
                   t('Condicionales y bucles', 'Conditionals and loops') ] },
      { title: t('Funciones y estructura', 'Functions and structure'),
        lessons: [ t('Definir y reutilizar funciones', 'Defining and reusing functions'),
                   t('Módulos, paquetes y entornos', 'Modules, packages and environments'),
                   t('Manejo de errores y archivos', 'Error and file handling') ] },
      { title: t('Primer contacto con datos', 'First contact with data'),
        lessons: [ t('Jupyter y Google Colab', 'Jupyter and Google Colab'),
                   t('Leer datos con pandas', 'Reading data with pandas'),
                   t('Exploración inicial de un dataset', 'Initial dataset exploration') ] },
    ],
  },
  {
    id: 'sql-1', n: 4, cat: 'sql', level: 'basico', hours: 10, lessons: 16,
    title:   t('SQL Básico', 'SQL Basics'),
    tagline: t('Consulta bases de datos relacionales y extrae justo lo que necesitas.',
               'Query relational databases and extract exactly what you need.'),
    modules: [
      { title: t('Bases de datos relacionales', 'Relational databases'),
        lessons: [ t('Tablas, filas, columnas y claves', 'Tables, rows, columns and keys'),
                   t('Instalar tu motor (PostgreSQL / MySQL)', 'Set up your engine (PostgreSQL / MySQL)'),
                   t('Tu primer SELECT', 'Your first SELECT') ] },
      { title: t('Filtrar y ordenar', 'Filtering and sorting'),
        lessons: [ t('WHERE, operadores y comodines', 'WHERE, operators and wildcards'),
                   t('ORDER BY, LIMIT y DISTINCT', 'ORDER BY, LIMIT and DISTINCT'),
                   t('Valores nulos y CASE', 'NULL values and CASE') ] },
      { title: t('Agregaciones', 'Aggregations'),
        lessons: [ t('COUNT, SUM, AVG, MIN, MAX', 'COUNT, SUM, AVG, MIN, MAX'),
                   t('GROUP BY y HAVING', 'GROUP BY and HAVING'),
                   t('Mini-proyecto de reporte', 'Mini reporting project') ] },
    ],
  },
  {
    id: 'sql-2', n: 5, cat: 'sql', level: 'intermedio', hours: 12, lessons: 18,
    title:   t('SQL Intermedio', 'SQL Intermediate'),
    tagline: t('Combina múltiples tablas y resuelve preguntas de negocio reales.',
               'Join multiple tables and answer real business questions.'),
    modules: [
      { title: t('Trabajar con varias tablas', 'Working with multiple tables'),
        lessons: [ t('INNER, LEFT, RIGHT y FULL JOIN', 'INNER, LEFT, RIGHT and FULL JOIN'),
                   t('UNION y autouniones', 'UNION and self-joins'),
                   t('Diseño y normalización', 'Schema design and normalization') ] },
      { title: t('Subconsultas y CTE', 'Subqueries and CTEs'),
        lessons: [ t('Subconsultas en SELECT/WHERE', 'Subqueries in SELECT/WHERE'),
                   t('Common Table Expressions (WITH)', 'Common Table Expressions (WITH)'),
                   t('Vistas reutilizables', 'Reusable views') ] },
      { title: t('Funciones útiles', 'Useful functions'),
        lessons: [ t('Fechas y cadenas', 'Date and string functions'),
                   t('Condicionales y formato', 'Conditionals and formatting'),
                   t('Caso práctico de ventas', 'Sales case study') ] },
    ],
  },
  {
    id: 'py-2', n: 6, cat: 'python', level: 'intermedio', hours: 16, lessons: 24,
    title:   t('Python Intermedio', 'Python Intermediate'),
    tagline: t('Domina pandas y matplotlib para limpiar y visualizar datos.',
               'Master pandas and matplotlib to clean and visualize data.'),
    modules: [
      { title: t('Manipulación con pandas', 'Data wrangling with pandas'),
        lessons: [ t('Series y DataFrames a fondo', 'Series and DataFrames in depth'),
                   t('Filtrado, agrupación y pivotes', 'Filtering, grouping and pivots'),
                   t('Merge, join y concatenación', 'Merge, join and concatenation') ] },
      { title: t('Limpieza de datos', 'Data cleaning'),
        lessons: [ t('Nulos, duplicados y outliers', 'Nulls, duplicates and outliers'),
                   t('Tipos, fechas y categóricas', 'Types, dates and categoricals'),
                   t('Funciones apply y lambda', 'apply and lambda functions') ] },
      { title: t('Visualización', 'Visualization'),
        lessons: [ t('matplotlib y seaborn', 'matplotlib and seaborn'),
                   t('Gráficos para análisis exploratorio', 'Charts for exploratory analysis'),
                   t('Storytelling con datos', 'Storytelling with data') ] },
    ],
  },
  {
    id: 'sql-3', n: 7, cat: 'sql', level: 'avanzado', hours: 14, lessons: 18,
    title:   t('SQL Avanzado', 'SQL Advanced'),
    tagline: t('Funciones de ventana, optimización y consultas analíticas complejas.',
               'Window functions, optimization and complex analytical queries.'),
    modules: [
      { title: t('Funciones de ventana', 'Window functions'),
        lessons: [ t('OVER, PARTITION BY y ORDER BY', 'OVER, PARTITION BY and ORDER BY'),
                   t('ROW_NUMBER, RANK, DENSE_RANK', 'ROW_NUMBER, RANK, DENSE_RANK'),
                   t('LAG, LEAD y promedios móviles', 'LAG, LEAD and moving averages') ] },
      { title: t('Rendimiento', 'Performance'),
        lessons: [ t('Índices y planes de ejecución', 'Indexes and execution plans'),
                   t('Optimización de consultas', 'Query optimization'),
                   t('Buenas prácticas de escritura', 'Query writing best practices') ] },
      { title: t('Analítica avanzada', 'Advanced analytics'),
        lessons: [ t('Pivot, unpivot y rollups', 'Pivot, unpivot and rollups'),
                   t('Cohortes y embudos', 'Cohorts and funnels'),
                   t('Proyecto analítico end-to-end', 'End-to-end analytical project') ] },
    ],
  },
  {
    id: 'py-3', n: 8, cat: 'python', level: 'avanzado', hours: 18, lessons: 26,
    title:   t('Python Avanzado', 'Python Advanced'),
    tagline: t('Automatización, APIs y una introducción práctica al machine learning.',
               'Automation, APIs and a hands-on intro to machine learning.'),
    modules: [
      { title: t('Automatización y datos externos', 'Automation and external data'),
        lessons: [ t('Consumo de APIs con requests', 'Consuming APIs with requests'),
                   t('Web scraping responsable', 'Responsible web scraping'),
                   t('Automatizar reportes y tareas', 'Automating reports and tasks') ] },
      { title: t('Análisis estadístico', 'Statistical analysis'),
        lessons: [ t('NumPy y estadística descriptiva', 'NumPy and descriptive statistics'),
                   t('Correlación y regresión', 'Correlation and regression'),
                   t('Pruebas de hipótesis', 'Hypothesis testing') ] },
      { title: t('Machine Learning práctico', 'Practical machine learning'),
        lessons: [ t('scikit-learn: flujo de trabajo', 'scikit-learn workflow'),
                   t('Modelos de clasificación y regresión', 'Classification and regression models'),
                   t('Evaluación de modelos', 'Model evaluation') ] },
    ],
  },
  {
    id: 'pbi-3', n: 9, cat: 'powerbi', level: 'avanzado', hours: 16, lessons: 22,
    title:   t('Power BI Avanzado', 'Power BI Advanced'),
    tagline: t('DAX avanzado, RLS y despliegue profesional en Power BI Service.',
               'Advanced DAX, RLS and professional deployment on Power BI Service.'),
    modules: [
      { title: t('DAX avanzado', 'Advanced DAX'),
        lessons: [ t('Contexto de fila y de filtro a fondo', 'Row and filter context in depth'),
                   t('Variables, ITERATORS y patrones', 'Variables, iterators and patterns'),
                   t('Medidas dinámicas y KPIs', 'Dynamic measures and KPIs') ] },
      { title: t('Gobernanza y seguridad', 'Governance and security'),
        lessons: [ t('Row-Level Security (RLS)', 'Row-Level Security (RLS)'),
                   t('Flujos de datos y modelos compartidos', 'Dataflows and shared models'),
                   t('Actualización programada y gateways', 'Scheduled refresh and gateways') ] },
      { title: t('Despliegue profesional', 'Professional deployment'),
        lessons: [ t('Workspaces, apps y pipelines', 'Workspaces, apps and pipelines'),
                   t('Optimización del modelo', 'Model optimization'),
                   t('Proyecto final: dashboard ejecutivo', 'Capstone: executive dashboard') ] },
    ],
  },
  {
    id: 'xls-1', n: 10, cat: 'excel', level: 'basico', hours: 8, lessons: 14,
    title:   t('Excel Básico', 'Excel Basics'),
    tagline: t('La base de todo analista: hojas, fórmulas y formato profesional.',
               "Every analyst's foundation: sheets, formulas and clean formatting."),
    modules: [
      { title: t('Fundamentos de la hoja', 'Spreadsheet fundamentals'),
        lessons: [ t('Interfaz, celdas y rangos', 'Interface, cells and ranges'),
                   t('Formato y formato condicional', 'Formatting and conditional formatting'),
                   t('Referencias relativas y absolutas', 'Relative and absolute references') ] },
      { title: t('Fórmulas esenciales', 'Essential formulas'),
        lessons: [ t('SUMA, PROMEDIO, CONTAR, SI', 'SUM, AVERAGE, COUNT, IF'),
                   t('Texto, fechas y lógicas', 'Text, date and logical functions'),
                   t('Errores comunes y depuración', 'Common errors and debugging') ] },
    ],
  },
  {
    id: 'xls-2', n: 11, cat: 'excel', level: 'intermedio', hours: 10, lessons: 16,
    title:   t('Excel Intermedio', 'Excel Intermediate'),
    tagline: t('Búsquedas, tablas dinámicas y reportes que se actualizan solos.',
               'Lookups, pivot tables and reports that update themselves.'),
    modules: [
      { title: t('Búsqueda y referencia', 'Lookup and reference'),
        lessons: [ t('BUSCARV, BUSCARX e ÍNDICE/COINCIDIR', 'VLOOKUP, XLOOKUP and INDEX/MATCH'),
                   t('Funciones anidadas', 'Nested functions'),
                   t('Validación de datos', 'Data validation') ] },
      { title: t('Tablas y dinámicas', 'Tables and pivots'),
        lessons: [ t('Tablas estructuradas', 'Structured tables'),
                   t('Tablas dinámicas y segmentadores', 'Pivot tables and slicers'),
                   t('Gráficos dinámicos', 'Pivot charts') ] },
    ],
  },
  {
    id: 'xls-3', n: 12, cat: 'excel', level: 'avanzado', hours: 12, lessons: 18,
    title:   t('Excel Avanzado', 'Excel Advanced'),
    tagline: t('Power Query, fórmulas matriciales y dashboards dentro de Excel.',
               'Power Query, dynamic arrays and dashboards inside Excel.'),
    modules: [
      { title: t('Excel moderno', 'Modern Excel'),
        lessons: [ t('Power Query dentro de Excel', 'Power Query inside Excel'),
                   t('Fórmulas matriciales dinámicas', 'Dynamic array formulas'),
                   t('LAMBDA y funciones personalizadas', 'LAMBDA and custom functions') ] },
      { title: t('Dashboards en Excel', 'Dashboards in Excel'),
        lessons: [ t('Diseño de tableros', 'Dashboard design'),
                   t('KPIs y controles interactivos', 'KPIs and interactive controls'),
                   t('Proyecto final integrador', 'Final integrative project') ] },
    ],
  },
];
