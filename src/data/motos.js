/**
 * CATÁLOGO HERO – Concesionario Palmira
 * ------------------------------------------------------------------
 * Fuente de fichas técnicas y precios: heromotos.com.co (consultado sep-2026,
 * modelos 2027). Precios de referencia publicados por HMCL Colombia; NO incluyen
 * matrícula, SOAT ni seguros y pueden variar según zona y financiación.
 * ⚠️  Validar precios, bonos y colores con el área comercial de SUMOTO antes
 *     de publicar. Para actualizar un precio, cambia solo `precio` y `bono`.
 *
 * Imágenes: /public/motos/<slug>/<color>.webp
 */

export const CATEGORIAS = [
  {
    id: 'trabajo',
    nombre: 'Trabajo',
    lema: 'Indestructible, tan fuerte como tu trabajo',
    descripcion: 'Motos económicas, resistentes y de bajo mantenimiento para el día a día.',
    destacada: 'splendor-xpro',
  },
  {
    id: 'urbanas',
    nombre: 'Urbanas',
    lema: 'El futuro a tu alcance',
    descripcion: 'Diseño deportivo, tecnología y desempeño para moverte por la ciudad.',
    destacada: 'hunk-160r-4v',
  },
  {
    id: 'doble-proposito',
    nombre: 'Doble Propósito',
    lema: 'Una aventura cada día',
    descripcion: 'La familia Xpulse: lista para el asfalto, la trocha y la montaña.',
    destacada: 'xpulse-200-4v',
  },
  {
    id: 'scooter',
    nombre: 'Scooter',
    lema: 'Siempre conectado y sin complicaciones',
    descripcion: 'Transmisión automática, conectividad y practicidad total.',
    destacada: 'xoom-125',
  },
]

/** Colores para los selectores (hex aproximados, ajustables). */
const C = {
  negro: '#15161a',
  rojo: '#d3122a',
  azul: '#1f5fbf',
  gris: '#8a8f98',
  lima: '#c7e020',
  purpura: '#6b3fa0',
  morado: '#7a4aa8',
  blanco: '#f3f4f6',
  verde: '#6f8a3a',
  neon: '#b8f000',
  amarillo: '#f2c200',
}
const dual = (a, b) => `linear-gradient(135deg, ${a} 50%, ${b} 50%)`

export const MOTOS = [
  // ───────────────────────────── TRABAJO ─────────────────────────────
  {
    slug: 'eco-100',
    nombre: 'Eco 100',
    categoria: 'trabajo',
    lema: 'Fuerte pal trabajo, experta en ahorro',
    precio: 4990000,
    bono: 600000,
    colores: [{ id: 'negro-rojo', nombre: 'Negro / Rojo', swatch: dual(C.negro, C.rojo) }],
    destacados: ['Bajo consumo de combustible', 'Durabilidad comprobada', 'Sillín para carga y pasajero', 'Puerto USB'],
    resumen: { cc: '97,2', hp: '7,7', nm: '8,2', tanque: '10,5' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '97,2 cc',
        'Potencia máxima': '7,7 hp @ 7.500 rpm',
        'Torque máximo': '8,2 Nm @ 4.500 rpm',
        Transmisión: 'Mecánica de 4 velocidades, embrague húmedo',
        Arranque: 'Pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 pasos',
        'Freno delantero': 'Tambor',
        'Freno trasero': 'Tambor',
        'Llanta delantera': '2.75 – 18 PR – 42P',
        'Llanta trasera': '2.75 – 18 PR – 42P',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.970 × 726 × 1.040 mm',
        'Peso': '109 kg',
        'Tanque de gasolina': '10,5 litros',
      },
    },
  },
  {
    slug: 'eco-t',
    nombre: 'Eco T',
    categoria: 'trabajo',
    lema: 'Economía total',
    precio: 5490000,
    bono: 900000,
    colores: [
      { id: 'negro-rojo', nombre: 'Negro / Rojo', swatch: dual(C.negro, C.rojo) },
      { id: 'negro-azul', nombre: 'Negro / Azul', swatch: dual(C.negro, C.azul) },
      { id: 'negro-purpura', nombre: 'Negro / Púrpura', swatch: dual(C.negro, C.purpura) },
      { id: 'gris-azul', nombre: 'Gris / Azul', swatch: dual(C.gris, C.azul) },
      { id: 'negro-gris', nombre: 'Negro / Gris', swatch: dual(C.negro, C.gris) },
    ],
    destacados: ['Más de 360 km por galón', 'Sillín plano que se calienta menos', 'Medidor de combustible y testigo de pata', 'Parrilla y puerto USB'],
    resumen: { cc: '97,2', hp: '8,2', nm: '8,05', tanque: '10,5' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '97,2 cc',
        'Potencia máxima': '8,2 hp @ 8.000 rpm',
        'Torque máximo': '8,05 Nm @ 5.000 rpm',
        Transmisión: 'Mecánica de 4 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 pasos',
        Frenos: 'IBS integrado',
        'Llanta delantera': '2.75 – 18 PR – 42P',
        'Llanta trasera': '2.75 – 18 PR – 42P',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.970 × 726 × 1.040 mm',
        'Peso': '109 kg',
        'Tanque de gasolina': '10,5 litros',
      },
    },
  },
  {
    slug: 'eco-deluxe-clasica',
    nombre: 'Eco Deluxe Clásica',
    categoria: 'trabajo',
    lema: 'Fuerte pal trabajo, experta en ahorro',
    precio: 5790000,
    bono: 900000,
    colores: [
      { id: 'negro-purpura', nombre: 'Negro / Púrpura', swatch: dual(C.negro, C.purpura) },
      { id: 'negro-gris', nombre: 'Negro / Gris', swatch: dual(C.negro, C.gris) },
    ],
    destacados: ['Tecnología Smart Drive: hasta 15% de ahorro', 'Sillín de doble nivel', 'Medidor de combustible y testigo de pata', 'Puerto USB'],
    resumen: { cc: '97,2', hp: '8,2', nm: '8,05', tanque: '10,5' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '97,2 cc',
        'Potencia máxima': '8,2 hp @ 8.000 rpm',
        'Torque máximo': '8,05 Nm @ 5.000 rpm',
        Transmisión: 'Mecánica de 4 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 pasos',
        Frenos: 'IBS integrado',
        'Llanta delantera': '2.75 18 – 4 PR / 42P',
        'Llanta trasera': '2.75 18 – 6 PR / 48P',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.970 × 726 × 1.040 mm',
        'Peso': '110 kg',
        'Tanque de gasolina': '10,5 litros',
      },
    },
  },
  {
    slug: 'eco-deluxe',
    nombre: 'Eco Deluxe',
    categoria: 'trabajo',
    lema: 'Fuerte pal trabajo, experta en ahorro',
    precio: 5990000,
    bono: 890000,
    colores: [
      { id: 'negro-rojo', nombre: 'Negro / Rojo', swatch: dual(C.negro, C.rojo) },
      { id: 'negro-morado', nombre: 'Negro / Lila', swatch: dual(C.negro, C.morado) },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Tecnología Smart Drive', 'Sillín de doble nivel', 'Medidor de combustible y testigo de pata', 'Puerto USB'],
    resumen: { cc: '97,2', hp: '8,2', nm: '8,05', tanque: '10,5' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '97,2 cc',
        'Potencia máxima': '8,2 hp @ 8.000 rpm',
        'Torque máximo': '8,05 Nm @ 5.000 rpm',
        Transmisión: 'Mecánica de 4 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 pasos',
        Frenos: 'IBS integrado',
        'Llanta delantera': '2.75 18 – 4 PR / 42P',
        'Llanta trasera': '2.75 18 – 6 PR / 48P',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.970 × 726 × 1.040 mm',
        'Peso': '110 kg',
        'Tanque de gasolina': '10,5 litros',
      },
    },
  },
  {
    slug: 'splendor-xpro',
    nombre: 'Splendor Xpro',
    categoria: 'trabajo',
    lema: 'Sube de nivel con la 110 cc con más tecnología',
    precio: 6390000,
    bono: 300000,
    colores: [
      { id: 'negro-rojo', nombre: 'Negro / Rojo', swatch: dual(C.negro, C.rojo) },
      { id: 'negro-azul', nombre: 'Negro / Azul', swatch: dual(C.negro, C.azul) },
      { id: 'gris-lima', nombre: 'Gris / Lima', swatch: dual(C.gris, C.lima) },
    ],
    destacados: ['Tablero 100% digital con Bluetooth', 'Freno de disco delantero 220 mm con IBS', 'Suspensión óleo-neumática', 'Diseño deportivo con gráficas renovadas'],
    resumen: { cc: '109,15', hp: '9,1', nm: '9', tanque: '9,2' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '109,15 cc',
        'Potencia máxima': '9,1 hp @ 7.500 rpm',
        'Torque máximo': '9 Nm @ 5.500 rpm',
        Transmisión: 'Mecánica de 4 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 posiciones',
        'Freno delantero': 'Disco 220 mm (IBS)',
        'Freno trasero': 'Tambor',
        'Llanta delantera': '80/100 18M 47P sellomática',
        'Llanta trasera': '90/90 18M 51P sellomática',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.967 × 768 × 1.080 mm',
        'Altura del asiento': '790 mm',
        'Peso': '120 kg',
        'Tanque de gasolina': '9,2 litros',
      },
    },
  },
  {
    slug: 'ignitor-5s',
    nombre: 'Ignitor 5S',
    categoria: 'trabajo',
    lema: 'Te da más ahorro, velocidad y seguridad',
    precio: 6900000,
    bono: 0,
    colores: [
      { id: 'azul', nombre: 'Azul', swatch: C.azul },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Tecnología i3s de ahorro de combustible', '5 velocidades', 'Freno de disco delantero', 'Cargador USB integrado'],
    resumen: { cc: '124,7', hp: '10,4', nm: '10,4', tanque: '10' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '124,7 cc',
        'Potencia máxima': '10,4 hp @ 7.750 rpm',
        'Torque máximo': '10,4 Nm @ 5.500 rpm',
        Transmisión: 'Mecánica de 5 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica de 33 mm',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 posiciones',
        'Freno delantero': 'Disco',
        'Freno trasero': 'Tambor',
        'Llanta delantera': '80/100 – 18" sellomática',
        'Llanta trasera': '100/80 – 18" sellomática',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.959 × 743 × 1.074 mm',
        'Altura del asiento': '790 mm',
        'Peso': '123 kg',
        'Tanque de gasolina': '10 litros',
      },
    },
  },
  {
    slug: 'ignitor-xtech',
    nombre: 'Ignitor Xtech',
    categoria: 'trabajo',
    lema: 'Te da más ahorro, velocidad y seguridad',
    precio: 6900000,
    bono: 0,
    colores: [
      { id: 'negro-lima', nombre: 'Negro / Lima', swatch: dual(C.negro, C.lima) },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Tablero 100% digital', 'Tecnología i3s', 'Freno de disco delantero', 'Cargador USB integrado'],
    resumen: { cc: '124,7', hp: '10,4', nm: '10,4', tanque: '10' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigeración por aire',
        Cilindraje: '124,7 cc',
        'Potencia máxima': '10,4 hp @ 7.750 rpm',
        'Torque máximo': '10,4 Nm @ 5.500 rpm',
        Transmisión: 'Mecánica de 5 velocidades, embrague húmedo',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica de 33 mm',
        'Suspensión trasera': 'Doble amortiguador ajustable en 5 posiciones',
        'Freno delantero': 'Disco',
        'Freno trasero': 'Tambor',
        'Llanta delantera': '80/100 – 18" sellomática',
        'Llanta trasera': '100/80 – 18" sellomática',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.959 × 743 × 1.074 mm',
        'Altura del asiento': '790 mm',
        'Peso': '123 kg',
        'Tanque de gasolina': '10 litros',
      },
    },
  },

  // ───────────────────────────── URBANAS ─────────────────────────────
  {
    slug: 'hunk-125r',
    nombre: 'Hunk 125R',
    categoria: 'urbanas',
    lema: 'El mejor diseño y estilo del segmento',
    precio: 7790000,
    bono: 600000,
    colores: [
      { id: 'rojo', nombre: 'Rojo', swatch: C.rojo },
      { id: 'azul', nombre: 'Azul', swatch: C.azul },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Tablero 100% digital con Bluetooth', 'Iluminación 100% LED', 'Monoshock ajustable en 7 posiciones', 'Frenos combinados IBS'],
    resumen: { cc: '124,7', hp: '10,72', nm: '10,4', tanque: '10' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, SOHC',
        Cilindraje: '124,7 cc',
        'Potencia máxima': '10,72 hp @ 8.250 rpm',
        'Torque máximo': '10,4 Nm @ 6.500 rpm',
        Transmisión: '5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Monoamortiguador ajustable en 7 posiciones',
        Frenos: 'Combinados con tecnología IBS',
        'Llanta delantera': '90/90 – 17"',
        'Llanta trasera': '120/80 – 17"',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.009 × 793 × 1.051 mm',
        'Altura del asiento': '794 mm',
        'Peso': '133 kg',
        'Tanque de gasolina': '10 litros',
      },
    },
  },
  {
    slug: 'hunk-150-xt',
    nombre: 'Hunk 150 XT',
    categoria: 'urbanas',
    lema: 'Poder y estilo para trabajar',
    precio: 8790000,
    bono: 550000,
    colores: [
      { id: 'azul', nombre: 'Azul', swatch: C.azul },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Motor 150 cc con balanceador', 'ABS monocanal y doble disco', 'Tablero digital con Bluetooth', 'Iluminación 100% LED'],
    resumen: { cc: '149,2', hp: '14,2', nm: '12,6', tanque: '12,4' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, refrigerado por aire',
        Cilindraje: '149,2 cc',
        'Potencia máxima': '14,2 hp @ 8.500 rpm',
        'Torque máximo': '12,6 Nm @ 6.500 rpm',
        Transmisión: '5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Horquilla convencional',
        'Suspensión trasera': 'Monoamortiguador ajustable en 7 posiciones',
        'Freno delantero': 'Disco 276 mm con ABS monocanal',
        'Freno trasero': 'Disco 220 mm hidráulico',
        'Llanta delantera': '100/80 – 17"',
        'Llanta trasera': '130/70 – 17"',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.001 × 784 × 1.043 mm',
        'Altura del asiento': '790 mm',
        'Peso': '146 kg',
        'Tanque de gasolina': '12,4 litros',
      },
    },
  },
  {
    slug: 'hunk-160r',
    nombre: 'Hunk 160R',
    categoria: 'urbanas',
    lema: 'Se ve bien, rueda mejor',
    precio: 9590000,
    bono: 1000000,
    nota: 'Precio con bono aplica a versión básica según Hero Colombia. Validar precio de la versión RS.',
    colores: [
      { id: 'rs-negro-rojo', nombre: 'RS Negro / Rojo', swatch: dual(C.negro, C.rojo) },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
      { id: 'blanco', nombre: 'Blanco', swatch: C.blanco },
      { id: 'gris-azul', nombre: 'Gris / Azul', swatch: dual(C.gris, C.azul) },
    ],
    destacados: ['Tablero digital con iluminación invertida', 'ABS monocanal con discos hidráulicos', 'Asiento deportivo de doble nivel', 'Tecnología Autosail'],
    resumen: { cc: '163', hp: '15', nm: '14', tanque: '12' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 2 válvulas, 4 tiempos, refrigerado por aire',
        Cilindraje: '163 cc',
        'Potencia máxima': '15 hp @ 8.500 rpm',
        'Torque máximo': '14 Nm @ 6.500 rpm',
        Transmisión: '5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica 37 mm',
        'Suspensión trasera': 'Monoamortiguador ajustable en 7 posiciones',
        'Freno delantero': 'Disco hidráulico 276 mm con ABS monocanal',
        'Freno trasero': 'Disco hidráulico 220 mm',
        'Llanta delantera': '100/70 – 17"',
        'Llanta trasera': '130/80 – 17"',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.029 × 793 × 1.052 mm',
        'Peso': '139,5 kg',
        'Tanque de gasolina': '12 litros',
      },
    },
  },
  {
    slug: 'hunk-160r-4v',
    nombre: 'Hunk 160R 4V',
    categoria: 'urbanas',
    lema: 'La deportiva más rápida del segmento 160 cc',
    precio: 10990000,
    bono: 1400000,
    colores: [
      { id: 'negro-lima', nombre: 'Negro / Lima', swatch: dual(C.negro, C.lima) },
      { id: 'negro-rojo', nombre: 'Negro / Rojo', swatch: dual(C.negro, C.rojo) },
      { id: 'verde-neon', nombre: 'Gris / Verde neón', swatch: dual(C.gris, C.neon) },
    ],
    destacados: ['Motor 4 válvulas refrigerado por aceite', '0 a 60 km/h en 4,4 s', 'ABS monocanal', 'Panel LCD con Bluetooth e iluminación LED'],
    resumen: { cc: '163,24', hp: '16,6', nm: '14,6', tanque: '12' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico vertical, 4 válvulas, 4 tiempos, OHC, refrigerado por aceite',
        Cilindraje: '163,24 cc',
        'Potencia máxima': '16,6 hp @ 8.500 rpm',
        'Torque máximo': '14,6 Nm @ 6.500 rpm',
        'Relación de compresión': '9,8 : 1',
        Transmisión: '5 velocidades',
        Arranque: 'Eléctrico',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Monoamortiguador ajustable en 7 posiciones',
        'Freno delantero': 'Disco 276 mm con ABS monocanal',
        'Freno trasero': 'Disco 220 mm',
        'Llanta delantera': '100/80 – 17"',
        'Llanta trasera': '130/70 – 17"',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.029 × 793 × 1.052 mm',
        'Distancia entre ejes': '1.329 mm',
        'Altura del asiento': '795 mm',
        'Peso': '146 kg',
        'Tanque de gasolina': '12 litros',
      },
    },
  },

  // ───────────────────────── DOBLE PROPÓSITO ─────────────────────────
  {
    slug: 'xpulse-200-4v',
    nombre: 'Xpulse 200 4V',
    categoria: 'doble-proposito',
    lema: 'Máxima potencia para un país todoterreno',
    precio: 12390000,
    bono: 1400000,
    colores: [
      { id: 'blanco', nombre: 'Blanco', swatch: C.blanco },
      { id: 'gris-verde', nombre: 'Gris / Lima', swatch: dual(C.gris, C.lima) },
      { id: 'negro', nombre: 'Negro mate', swatch: C.negro },
    ],
    destacados: ['Motor 4V 200 cc de 18,9 hp', 'ABS delantero', 'Tablero LCD con Bluetooth y alerta de llamadas', 'Monoshock ajustable en 10 posiciones'],
    resumen: { cc: '199,6', hp: '18,9', nm: '17,35', tanque: '13' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, 4 válvulas, OHC, refrigerado por aceite',
        Cilindraje: '199,6 cc',
        'Potencia máxima': '18,9 hp @ 8.000 rpm',
        'Torque máximo': '17,35 Nm @ 6.500 rpm',
        Transmisión: 'Engranaje constante de 5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica 37 mm – 190 mm de recorrido',
        'Suspensión trasera': 'Monoshock 10 posiciones – 170 mm de recorrido',
        'Freno delantero': 'Disco con ABS',
        'Freno trasero': 'Disco',
        'Llanta delantera': '90/90 – 21" TT doble propósito',
        'Llanta trasera': '120/80 – 18" TT doble propósito',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.222 × 862 × 1.320 mm',
        'Peso': '159 kg',
        'Tanque de gasolina': '13 litros',
      },
    },
  },
  {
    slug: 'xpulse-200-pro-2-0',
    nombre: 'Xpulse 200 Pro 2.0',
    categoria: 'doble-proposito',
    lema: 'Hay aventuras que empiezan cuando termina el camino',
    precio: 13590000,
    bono: 900000,
    colores: [{ id: 'negro', nombre: 'Negro', swatch: C.negro }],
    destacados: ['Porta celular incluido', 'Casco doble propósito incluido', 'Luces exploradoras', 'Monoamortiguador ajustable en 10 posiciones'],
    resumen: { cc: '199,6', hp: '18,9', nm: '17,35', tanque: '13' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4 tiempos, OHC, refrigerado por aceite',
        Cilindraje: '199,6 cc',
        'Potencia máxima': '18,9 hp @ 8.000 rpm',
        'Torque máximo': '17,35 Nm @ 6.500 rpm',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica 37 mm',
        'Suspensión trasera': 'Monoamortiguador ajustable en 10 posiciones',
        'Freno delantero': 'Disco con ABS',
        'Freno trasero': 'Disco',
        'Llanta delantera': '90/90 – 21" TT doble propósito',
        'Llanta trasera': '120/80 – 18" TT doble propósito',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.223 × 862 × 1.320 mm',
        'Altura del asiento': '825 mm',
        'Peso': '159 kg',
        'Tanque de gasolina': '13 litros',
      },
    },
  },
  {
    slug: 'xpulse-200-pro-4v',
    nombre: 'Xpulse 200 Pro 4V',
    categoria: 'doble-proposito',
    lema: 'La más equipada para la aventura',
    precio: 13490000,
    bono: 800000, // Hero Colombia publica precio final $12.690.000 – validar,
    colores: [{ id: 'negro', nombre: 'Negro', swatch: C.negro }],
    destacados: ['Exploradoras, parrilla y dry bag incluidos', 'Intercomunicador y soporte para celular', 'Tablero LCD con Bluetooth', 'Suspensión trasera de 10 posiciones'],
    resumen: { cc: '199,6', hp: '18,9', nm: '17,35', tanque: '13' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4T, 4V, OHC, refrigerado por aceite',
        Cilindraje: '199,6 cc',
        'Potencia máxima': '18,9 hp @ 8.000 rpm',
        'Torque máximo': '17,35 Nm @ 6.500 rpm',
        Transmisión: 'Engranaje constante de 5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica 37 mm – 190 mm de recorrido',
        'Suspensión trasera': 'Monoshock 10 posiciones – 170 mm de recorrido',
        'Freno delantero': 'Disco con ABS',
        'Freno trasero': 'Disco',
        'Llanta delantera': '90/90 – 21" TT doble propósito',
        'Llanta trasera': '120/80 – 18" TT doble propósito',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.222 × 862 × 1.320 mm',
        'Altura del asiento': '825 mm',
        'Peso': '159 kg',
        'Tanque de gasolina': '13 litros',
      },
    },
  },
  {
    slug: 'xpulse-rally',
    nombre: 'Xpulse Rally',
    categoria: 'doble-proposito',
    lema: 'Lista para trochar',
    precio: 13590000,
    bono: 500000,
    colores: [{ id: 'rally', nombre: 'Blanco Rally', swatch: dual(C.blanco, C.rojo) }],
    destacados: ['Suspensión Rally de mayor recorrido', 'ABS', 'Motor 4V refrigerado por aceite', 'Diseño inspirado en competencia'],
    resumen: { cc: '199,6', hp: '18,9', nm: '17,35', tanque: '13' },
    specs: {
      Motor: {
        Tipo: 'Monocilíndrico, 4T, 4V, OHC, refrigerado por aceite',
        Cilindraje: '199,6 cc',
        'Potencia máxima': '18,9 hp @ 8.000 rpm',
        'Torque máximo': '17,35 Nm @ 6.500 rpm',
        Transmisión: 'Engranaje constante de 5 velocidades',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': '37 mm – 250 mm de recorrido, ajustable en compresión y rebote',
        'Suspensión trasera': 'Monoamortiguador ajustable en precarga (10 pos.) – 220 mm',
        'Freno delantero': 'Disco con ABS',
        'Freno trasero': 'Disco',
        'Llanta delantera': '90/90 – 21" TT doble propósito',
        'Llanta trasera': '120/80 – 18" TT doble propósito',
      },
      Dimensiones: {
        'Largo × ancho × alto': '2.255 × 862 × 1.380 mm',
        'Altura del asiento': '891 mm',
        'Peso': '161 kg',
        'Tanque de gasolina': '13 litros',
      },
    },
  },

  // ───────────────────────────── SCOOTER ─────────────────────────────
  {
    slug: 'xoom-110',
    nombre: 'Xoom 110',
    categoria: 'scooter',
    lema: 'Muévete en automático',
    precio: 6990000,
    bono: 400000,
    colores: [
      { id: 'azul', nombre: 'Azul', swatch: C.azul },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Transmisión automática', 'Tablero digital con Bluetooth y USB', 'Sistema de ahorro i3s', 'Frenos IBS'],
    resumen: { cc: '110,9', hp: '8,05', nm: '8,79', tanque: '5,2' },
    specs: {
      Motor: {
        Tipo: '4 tiempos, OHC, 2 válvulas',
        Cilindraje: '110,9 cc',
        'Potencia máxima': '8,05 hp @ 7.250 rpm',
        'Torque máximo': '8,79 Nm @ 5.750 rpm',
        Transmisión: 'Automática',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Monobrazo con monoamortiguador',
        Frenos: 'IBS',
        'Llanta delantera': '90/90 – 12 54J (tubeless)',
        'Llanta trasera': '100/80 – 12 56L (tubeless)',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.881 × 717 × 1.118 mm',
        'Altura del asiento': '770 mm',
        'Peso': '97 kg',
        'Tanque de gasolina': '5,2 litros',
      },
    },
  },
  {
    slug: 'xoom-125',
    nombre: 'Xoom 125',
    categoria: 'scooter',
    lema: 'Más es Máx',
    precio: 7990000,
    bono: 0,
    colores: [
      { id: 'rojo', nombre: 'Rojo', swatch: C.rojo },
      { id: 'amarillo', nombre: 'Amarillo', swatch: C.amarillo },
      { id: 'negro', nombre: 'Negro', swatch: C.negro },
    ],
    destacados: ['Transmisión automática', 'Iluminación 100% LED', 'Rines de 14" con disco e IBS', 'Navegación giro a giro y carga USB'],
    resumen: { cc: '124,6', hp: '9,8', nm: '10,4', tanque: '5' },
    specs: {
      Motor: {
        Tipo: '4 tiempos, OHC, 2 válvulas',
        Cilindraje: '124,6 cc',
        'Potencia máxima': '9,8 hp @ 7.250 rpm',
        'Torque máximo': '10,4 Nm @ 6.000 rpm',
        Transmisión: 'Automática',
        Arranque: 'Eléctrico y pedal',
      },
      Chasis: {
        'Suspensión delantera': 'Hidráulica telescópica',
        'Suspensión trasera': 'Amortiguador hidráulico sobre basculante',
        'Freno delantero': 'Disco (IBS)',
        'Llanta delantera': '110/80 – 14 53P (tubeless)',
        'Llanta trasera': '120/70 – 14 55P (tubeless)',
      },
      Dimensiones: {
        'Largo × ancho × alto': '1.978 × 749 × 1.131 mm',
        'Altura del asiento': '777 mm',
        'Peso': '121 kg',
        'Tanque de gasolina': '5 litros',
      },
    },
  },
]

// ───────────────────────────── helpers ─────────────────────────────
export const img = (moto, colorId) =>
  `/motos/${moto.slug}/${colorId || moto.colores[0].id}.webp`

export const precioFinal = (m) => m.precio - (m.bono || 0)

export const cop = (n) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)

export const getMoto = (slug) => MOTOS.find((m) => m.slug === slug)
export const getCategoria = (id) => CATEGORIAS.find((c) => c.id === id)
export const motosDe = (cat) => MOTOS.filter((m) => m.categoria === cat)
