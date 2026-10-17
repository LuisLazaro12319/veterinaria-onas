/**
 * Clínica Veterinaria Ona's - datos de la veterinaria.
 * Fuente: ficha de Google Maps; el WhatsApp y los horarios los pasó el cliente (Luis).
 * Todo lo que se muestra en la web sale de acá: para otra veterinaria alcanza con cambiar este archivo.
 */

export const CLINIC = {
  name: "Clínica Veterinaria Ona's",
  initials: 'O',
  professional: 'nuestro equipo',
  street: 'Av. Luciano Valette 362',
  streets: 'Av. Luciano Valette 362, Monte Grande',
  locality: 'Monte Grande',
  province: 'Provincia de Buenos Aires',
  fullAddress: 'Av. Luciano Valette 362, B1842EAQ Monte Grande, Provincia de Buenos Aires',
  since: 0,
  // El mismo número figura en su ficha de Google (011 6532-9803); se asume que atiende por WhatsApp.
  phone: '011 6532-9803',
  whatsappNumber: '5491165329803',
  whatsappDisplay: '11 6532-9803',
  // A CONFIRMAR: todavía no tenemos su Instagram; vacío oculta los enlaces.
  instagramHandle: '',
  instagramUrl: '',
  email: '',
  mapsUrl: 'https://maps.app.goo.gl/ZiB588o1gSanLwdB8',
  coordinates: { lat: -34.8010946, lng: -58.4737946 },
  // Ficha de Google: 4,5 con 384 opiniones (se muestra "+300").
  googleRating: '4.5',
  googleReviews: '+300',
  googleNote: 'Opiniones de clientes en Google',
  googleScope: '',
  // A CONFIRMAR con la veterinaria. Texto en primera persona armado con lo que dicen sus clientes en Google.
  about:
    "En Clínica Veterinaria Ona's somos una veterinaria de Monte Grande, sobre la Avenida Luciano Valette 362. Te atendemos nosotros, sus dueños, y nuestros clientes nos eligen por la vocación, la cordialidad y la información clara que damos sobre la salud de cada mascota.",
  // Foto principal del inicio (ruta dentro de /public); null muestra una ilustración con huellitas.
  photo: 'images/hero-onas.jpg' as string | null,
  servicesSummary: 'consultas, estudios, vacunación y más para tu mascota',
  paymentMethods: [] as string[],
  hoursSummary: 'Lunes a viernes de mañana y tarde, sábados de 9 a 13 hs',
  headline: 'Vocación y cariño',
  headlineHighlight: 'para tu mascota',
  locationLabel: 'Monte Grande',
};

export interface SocialLink {
  id: 'instagram' | 'facebook' | 'tiktok' | 'threads';
  label: string;
  handle: string;
  url: string;
}

// Sin redes confirmadas por ahora.
export const SOCIALS: SocialLink[] = [];

export interface Branch {
  id: string;
  label: string;
  zone: string;
  fullAddress: string;
  mapsUrl: string;
  mapQuery: string;
  whatsapp: string;
  whatsappDisplay: string;
  /** Foto de la fachada (ruta dentro de /public); null muestra un recuadro reservado. */
  photo: string | null;
  /** Video del lugar (ruta dentro de /public); si existe se muestra en lugar de la foto. */
  video: string | null;
  showSchedule: boolean;
}

// Una sola sede. La foto de la sucursal se agrega cuando la tengamos.
export const BRANCHES: Branch[] = [
  {
    id: 'monte-grande',
    label: 'Av. Luciano Valette 362',
    zone: 'Monte Grande',
    fullAddress: 'Av. Luciano Valette 362, B1842EAQ Monte Grande, Provincia de Buenos Aires',
    mapsUrl: 'https://maps.app.goo.gl/ZiB588o1gSanLwdB8',
    mapQuery: '-34.8010946,-58.4737946',
    whatsapp: '5491165329803',
    whatsappDisplay: '11 6532-9803',
    // Captura de la fachada tomada de Google Street View (baja resolución): A CONFIRMAR, reemplazar por su foto.
    photo: 'images/sucursal-onas.jpg',
    video: null,
    showSchedule: true,
  },
];

/** Texto para aclarar la sucursal en los mensajes de WhatsApp; vacío si hay una sola sede. */
export const sedeTxt = (b: Branch): string => (BRANCHES.length > 1 ? `, sucursal ${b.label} (${b.zone})` : '');

export interface Highlight {
  icon: 'star' | 'heart' | 'calendar' | 'users' | 'pin';
  title: string;
  text: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'star', title: '4,5 en Google', text: 'Más de 300 opiniones de clientes' },
  { icon: 'pin', title: 'En Monte Grande', text: 'Av. Luciano Valette 362' },
  { icon: 'calendar', title: 'Turnos por WhatsApp', text: 'Escribinos y coordinamos tu turno' },
];

export interface Review {
  author: string | null;
  text: string;
}

// Extractos textuales de opiniones públicas de la ficha de Google Maps (384 opiniones, 4,5).
export const REVIEWS: Review[] = [
  {
    author: 'Lucía',
    text: 'Mis perros fueron atendidos y curados por ellos cada vez que tuvieron una enfermedad. Destaco la información que nos brindan para conocer qué tiene nuestro perro y…',
  },
  { author: null, text: 'De vocación ni hablemos.... 3 veces llevamos a nuestro perro, si 3!' },
  { author: null, text: 'Atendido por los dueños Geniales y muy cordiales' },
  { author: null, text: 'Muy buena atención y son cariñosos y pacientes con nuestras mascotas.' },
  { author: 'Gustavo C.', text: 'Muy buena atencion y precios razonables..' },
];

export interface TeamMember {
  role: string;
  name: string | null;
  photo: string | null;
  bio?: string;
  /** Verdadero para la tarjeta de pacientes: muestra varios cuadros de fotos en lugar de la tarjeta con nombre. */
  galeria?: boolean;
}

// Fotos de los pacientes (ruta dentro de /public). Mientras esté vacía se muestran 6 cuadros reservados;
// con fotos, se muestran solo las que hay.
export const PACIENTES_FOTOS: string[] = [
  'images/paciente-1.jpg',
  'images/paciente-2.jpg',
  'images/paciente-3.jpg',
  'images/paciente-4.jpg',
  'images/paciente-5.jpg',
];

// Nosotros: el equipo y una tarjeta de pacientes con cuadros para fotos. Nombres y fotos: A CONFIRMAR con la veterinaria.
export const TEAM: TeamMember[] = [
  { role: 'Médicos veterinarios', name: null, photo: null },
  {
    role: 'Nuestros pacientes',
    name: null,
    photo: null,
    galeria: true,
    bio: 'Estas son algunas de las mascotas que nos eligen para cuidar su salud.',
  },
];

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon:
    | 'stethoscope'
    | 'sparkles'
    | 'layers'
    | 'shield'
    | 'activity'
    | 'smile'
    | 'crown'
    | 'anchor'
    | 'gem'
    | 'paw'
    | 'syringe'
    | 'scissors'
    | 'heartpulse';
}

// A CONFIRMAR con la veterinaria: lista de ejemplo para la demo; se quita lo que no ofrezcan.
export const SERVICES: ServiceItem[] = [
  {
    id: 'consulta',
    name: 'Consulta clínica',
    description: 'Revisión general de tu perro o gato, con un plan de cuidado pensado para él.',
    icon: 'stethoscope',
  },
  {
    id: 'vacunacion',
    name: 'Vacunación',
    description: 'Plan de vacunas para cachorros y adultos, con recordatorios de refuerzo.',
    icon: 'syringe',
  },
  {
    id: 'desparasitacion',
    name: 'Desparasitación',
    description: 'Control de parásitos internos y externos para que tu mascota esté protegida.',
    icon: 'shield',
  },
  {
    id: 'cirugias',
    name: 'Cirugías y castraciones',
    description: 'Procedimientos quirúrgicos programados, con indicaciones claras para el después.',
    icon: 'heartpulse',
  },
  {
    id: 'laboratorio',
    name: 'Estudios de laboratorio',
    description: 'Análisis para llegar a un diagnóstico y controlar la salud de tu mascota.',
    icon: 'activity',
  },
  {
    id: 'imagenes',
    name: 'Ecografías y radiografías',
    description: 'Estudios por imágenes para diagnosticar y planificar cada tratamiento.',
    icon: 'layers',
  },
  {
    id: 'peluqueria',
    name: 'Peluquería y baños',
    description: 'Baño, corte y cuidado del pelaje para que tu mascota esté cómoda y prolija.',
    icon: 'scissors',
  },
  {
    id: 'alimentos',
    name: 'Alimentos y accesorios',
    description: 'Alimento balanceado, correas, camas y todo lo que tu mascota necesita.',
    icon: 'paw',
  },
  {
    id: 'urgencias',
    name: 'Urgencias',
    description: 'Si tu mascota tiene una urgencia, escribinos por WhatsApp y vemos cómo atenderla.',
    icon: 'smile',
  },
];

export interface ScheduleDay {
  dayName: string;
  dayIndex: number; // 0 = domingo ... 6 = sábado
  open: string | null;
  close: string | null;
  /** Segundo turno del día (horario cortado), si lo hay. */
  open2?: string;
  close2?: string;
}

/** Falso si no se conocen los horarios: sin horarios no se muestra "Abierto ahora". */
export const HAS_SCHEDULE = true;

// Horarios de la ficha de Google (captura que pasó Luis): mañana y tarde; miércoles solo mañana; sábado hasta las 13.
export const SCHEDULE: ScheduleDay[] = [
  { dayName: 'Lunes', dayIndex: 1, open: '09:00', close: '12:30', open2: '16:00', close2: '18:00' },
  { dayName: 'Martes', dayIndex: 2, open: '09:00', close: '12:30', open2: '16:00', close2: '18:00' },
  { dayName: 'Miércoles', dayIndex: 3, open: '09:00', close: '12:30' },
  { dayName: 'Jueves', dayIndex: 4, open: '09:00', close: '12:30', open2: '16:00', close2: '18:00' },
  { dayName: 'Viernes', dayIndex: 5, open: '09:00', close: '12:30', open2: '16:00', close2: '18:00' },
  { dayName: 'Sábado', dayIndex: 6, open: '09:00', close: '13:00' },
  { dayName: 'Domingo', dayIndex: 0, open: null, close: null },
];

/** Turnos del día como pares [desde, hasta]; vacío si está cerrado. */
const turnosDelDia = (d?: ScheduleDay): [string, string][] => {
  if (!d) return [];
  const pares: [string | null | undefined, string | null | undefined][] = [
    [d.open, d.close],
    [d.open2, d.close2],
  ];
  return pares.filter((p): p is [string, string] => Boolean(p[0] && p[1]));
};

/** Una línea por turno ("09:00 - 12:30", "16:00 - 18:00") o "Cerrado". */
export function horarioLineas(d: ScheduleDay): string[] {
  const turnos = turnosDelDia(d);
  return turnos.length ? turnos.map(([a, b]) => `${a} - ${b}`) : ['Cerrado'];
}

const TIME_ZONE = 'America/Argentina/Buenos_Aires';

export interface ClinicStatus {
  isOpen: boolean;
  badge: string;
  detail: string;
}

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

export function getClinicStatus(now: Date = new Date()): ClinicStatus {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const weekday = (parts.find((p) => p.type === 'weekday')?.value || '').toLowerCase().slice(0, 3);
  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10) % 24;
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const dayMap: Record<string, number> = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
  const today = dayMap[weekday] ?? now.getDay();
  const minutes = hour * 60 + minute;

  const turnos = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === today));
  const abierto = turnos.find(([a, b]) => minutes >= toMinutes(a) && minutes < toMinutes(b));
  if (abierto) {
    return { isOpen: true, badge: 'Abierto ahora', detail: `Cierra a las ${abierto[1]} hs` };
  }
  const proximo = turnos.find(([a]) => minutes < toMinutes(a));
  if (proximo) {
    return { isOpen: false, badge: 'Cerrado ahora', detail: `Abre hoy a las ${proximo[0]} hs` };
  }

  for (let i = 1; i <= 7; i++) {
    const siguiente = turnosDelDia(SCHEDULE.find((d) => d.dayIndex === (today + i) % 7));
    if (siguiente.length) {
      const dia = SCHEDULE.find((d) => d.dayIndex === (today + i) % 7);
      const cuando = i === 1 ? 'mañana' : `el ${dia?.dayName.toLowerCase()}`;
      return { isOpen: false, badge: 'Cerrado por hoy', detail: `Abre ${cuando} a las ${siguiente[0][0]} hs` };
    }
  }
  return { isOpen: false, badge: 'Cerrado ahora', detail: '' };
}

/** Enlace de WhatsApp con el mensaje armado; sin número usa el de turnos general. */
export function whatsappUrl(message: string, number: string = CLINIC.whatsappNumber): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
