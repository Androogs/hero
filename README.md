# Hero Palmira · SUMOTO S.A.

Sitio web del concesionario Hero de Palmira (Valle del Cauca), en **React 18 + Vite + React Router**.
Cada opción del menú es una pestaña (ruta) independiente; no es una página larga.

## Cómo ejecutarlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist listo para publicar
npm run preview  # revisa el build
```

Requiere Node.js 18 o superior.

## Pestañas (rutas)

| Ruta | Contenido |
|---|---|
| `/` | Inicio: slider por categoría, accesos a categorías y beneficios |
| `/motos` y `/motos/:categoria` | Catálogo con filtros (Trabajo, Urbanas, Doble Propósito, Scooter), buscador, orden y selección para comparar |
| `/moto/:slug` | Ficha de cada moto: selector de color, precio con bono, especificaciones por pestañas, prueba de manejo |
| `/comparar` | Comparador de hasta 3 motos (`/comparar?m=hunk-160r-4v,xpulse-200-4v`) |
| `/financiacion` | Pasos, calculadora de cuota inicial y solicitud de crédito |
| `/posventa` | Taller, repuestos y garantía + agenda de cita |
| `/concesionario` | Quiénes somos, dirección, horarios y mapa |
| `/contacto` | Canales de contacto, formulario y política de datos |

Los formularios arman un mensaje y lo abren en **WhatsApp** (no requieren servidor).
Para conectarlos a un CRM, edita la función `enviar()` en `src/components/LeadForm.jsx`.

## Dónde editar

| Qué | Archivo |
|---|---|
| Dirección, teléfono, WhatsApp, correo, horarios, redes | `src/data/sitio.js` |
| Motos, precios, bonos, colores y fichas técnicas | `src/data/motos.js` |
| Colores de marca, tipografías, estilos | `src/styles/global.css` (variables en `:root`) |
| Logo oficial | `public/brand/logo-hero.svg` + `USAR_LOGO_OFICIAL = true` en `src/components/Logo.jsx` |
| Imágenes de motos | `public/motos/<slug>/<color>.webp` |
| Aliados financieros | `ALIADOS` en `src/pages/Financiacion.jsx` |

## ⚠️ Pendiente por validar antes de publicar

1. **Datos del concesionario** marcados como `POR CONFIRMAR` en `sitio.js` (dirección, teléfono, WhatsApp, horarios, redes, correo).
2. **Precios y bonos**: tomados de heromotos.com.co (modelos 2027, consultado en septiembre de 2026). Confirmar con el área comercial. Casos puntuales:
   - *Xpulse 200 Pro 4V*: la marca publica un precio final de $12.690.000; el bono se ajustó a $800.000 para cuadrar con ese valor.
   - *Xpulse Rally*: la marca publica un precio final de $13.090.000; el bono se ajustó a $500.000 para cuadrar con ese valor.
   - *Hunk 160R*: el precio con bono aplica a la versión básica; validar la versión RS.
3. **Nombres de colores** asignados según el nombre de cada archivo del catálogo (ej.: Hunk 160R `DSC_2506` quedó como "Gris / Azul").
4. **Frenos de la Hunk 125R**: la ficha publicada es ambigua (IBS vs. ABS); se dejó "Combinados con tecnología IBS".
5. **Logo oficial Hero**: se usa un distintivo genérico; reemplazar por el logo oficial que entregue HMCL Colombia según su manual de marca.
6. **Política de tratamiento de datos**: el texto en Contacto es de referencia; reemplazar por la política vigente de SUMOTO S.A.

## Publicación

Es una SPA, así que el servidor debe redirigir todas las rutas a `index.html`. Ya vienen incluidos:
`public/_redirects` (Netlify), `vercel.json` (Vercel) y `public/.htaccess` (Apache/cPanel).
