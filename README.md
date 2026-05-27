# Cuestión de Ser o No Pertenecer

Plataforma web académica y audiovisual del proyecto universitario **"Cuestión de Ser o No Pertenecer: Imaginarios urbanos, capitales simbólicos y formas de exclusión en la ciudad contemporánea"**.

Seminario de Cibercultura — Politécnico Colombiano Jaime Isaza Cadavid, 2026.

---

## Stack tecnológico (100% gratuito)

| Tecnología | Uso |
|---|---|
| Next.js 14 (App Router) | Framework web |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos |
| shadcn/ui | Componentes UI |
| Framer Motion | Animaciones |
| Google Fonts | Tipografía (Playfair Display + Inter) |
| YouTube (modo No listado) | Hosting y streaming de videos |
| Vercel Free Tier | Deploy y hosting del sitio |
| Politécnico Colombiano Jaime Isaza Cadavid | Institución académica |

Los videos **no se hospedan en Vercel** — solo van en YouTube en modo No listado. El sitio solo sirve HTML, CSS, JS e imágenes thumbnail.

---

## Instalación y desarrollo

### Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

### Instalar dependencias

```bash
npm install
```

### Correr en desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

### Ejecutar tests

```bash
npm test
```

### Verificar TypeScript

```bash
npx tsc --noEmit
```

---

## Cómo agregar un nuevo video ensayo

Sigue estos pasos — **no necesitas tocar código**:

### Paso 1: Subir el video a YouTube

1. Ve a [YouTube Studio](https://studio.youtube.com)
2. Haz clic en **Crear → Subir video**
3. Sube el archivo de video (MP4, cualquier tamaño)
4. En **Visibilidad**, selecciona **"No listado"** — el video no aparecerá en búsquedas de YouTube, solo quien tenga el enlace puede verlo
5. Completa el título y descripción
6. Publica el video

### Paso 2: Copiar el YouTube ID

En la URL del video verás algo como:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

Los **11 caracteres después de `?v=`** son el YouTube ID. En este ejemplo: `dQw4w9WgXcQ`

### Paso 3: Agregar el ensayo al JSON

Abre el archivo `data/ensayos.json` y agrega un nuevo objeto al array:

```json
{
  "slug": "titulo-del-ensayo-en-minusculas-con-guiones",
  "title": "Título del Ensayo",
  "author": ["Nombre del Autor"],
  "duration": "19 minutos",
  "theme": "Capital económico y gentrificación",
  "available": true,
  "description": "Descripción breve que aparece en las tarjetas del catálogo (2-3 líneas).",
  "year": 2026,
  "youtubeId": "PEGA_AQUI_EL_ID_DE_11_CARACTERES",
  "synopsis": "Sinopsis completa del ensayo para la página individual.",
  "theoreticalFramework": "Descripción del marco teórico utilizado en el ensayo.",
  "references": [
    "Apellido, N. (año). Título del libro. Editorial.",
    "Apellido, N. (año). Título del artículo. Revista, volumen(número), páginas."
  ],
  "keywords": [
    "palabra clave 1",
    "palabra clave 2",
    "palabra clave 3"
  ]
}
```

**Valores válidos para `theme`:**
- `"Capital económico y gentrificación"`
- `"Capital erótico y turismo sexual"`
- `"Capital social y mercantilización de la memoria"`
- `"Economía de la visibilidad"`

**Nota:** Si el video aún no está listo, usa `"available": false` y `"youtubeId": "PENDIENTE"`. El ensayo aparecerá en el catálogo con el badge "Próximamente" pero sin reproductor.

### Paso 4: Hacer deploy

```bash
git add data/ensayos.json
git commit -m "feat: agregar ensayo [título]"
git push
```

Vercel detectará el push automáticamente y desplegará la nueva versión en minutos.

---

## Estructura del proyecto

```
cibercultura-web/
├── app/
│   ├── page.tsx                    # Landing page (/)
│   ├── ensayos/
│   │   ├── page.tsx                # Catálogo (/ensayos)
│   │   └── [slug]/
│   │       └── page.tsx            # Video individual (/ensayos/[slug])
│   ├── sobre-el-proyecto/
│   │   └── page.tsx                # Sobre el proyecto
│   ├── layout.tsx                  # Layout global (Navbar + Footer)
│   └── not-found.tsx               # Página 404
├── components/
│   ├── HeroSection.tsx             # Hero de la landing
│   ├── VideoCard.tsx               # Tarjeta de ensayo
│   ├── YouTubeEmbed.tsx            # Reproductor YouTube (facade pattern)
│   ├── ThemeFilter.tsx             # Filtros por eje temático
│   ├── TheoryCard.tsx              # Tarjeta de autor teórico
│   ├── ReferenceList.tsx           # Lista colapsable de referencias APA
│   ├── ShareButton.tsx             # Botón de compartir
│   ├── SkeletonCard.tsx            # Placeholder de carga
│   ├── Navbar.tsx                  # Barra de navegación
│   └── Footer.tsx                  # Pie de página
├── data/
│   └── ensayos.json                # ← AQUÍ se agregan los ensayos
├── lib/
│   ├── types.ts                    # Tipos TypeScript
│   └── utils.ts                    # Funciones de utilidad
├── public/
│   └── images/                     # Imágenes estáticas del sitio (NO videos)
└── styles/
    └── globals.css                 # Estilos globales y variables CSS
```

---

## Deploy en Vercel

### Primera vez

1. Crea una cuenta en [vercel.com](https://vercel.com) (gratuito)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Configura la variable de entorno:
   - `NEXT_PUBLIC_SITE_URL` = `https://tu-dominio.vercel.app`
5. Haz clic en **Deploy**

### Deploys automáticos

Cada vez que hagas `git push` a la rama principal, Vercel desplegará automáticamente la nueva versión.

### Variables de entorno

Copia `.env.example` a `.env.local` para desarrollo local:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--color-background` | `#0A0A0A` | Fondo principal |
| `--color-surface` | `#141414` | Cards y paneles |
| `--color-accent` | `#C8A96E` | Dorado — acento principal |
| `--color-text-primary` | `#F5F0E8` | Texto principal |
| `--color-text-secondary` | `#A09880` | Texto secundario |
| `--color-border` | `#2A2A2A` | Bordes |

---

## Licencia

Contenido académico producido por estudiantes del Seminario de Cibercultura del Politécnico Colombiano Jaime Isaza Cadavid. Todos los derechos reservados a sus respectivos autores, 2026.
