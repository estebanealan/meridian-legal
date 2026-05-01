/**
 * Datos de contenido del sitio · MERIDIAN.
 * Fuente única de verdad para todas las páginas de servicios.
 */

export interface Stat { v: string; l: string }
export interface ServiceItem { title: string; desc: string }
export interface Step { title: string; desc: string }
export interface KeyItem { title: string; desc: string }
export interface FAQ { q: string; a: string }

export interface ServiceConfig {
  slug: string;
  label: string;
  heroTitle: string;
  heroTitleAccent: string;
  subtitle: string;
  heroStats: Stat[];
  overviewTitle: string;
  overviewText: string[];
  overviewStats: Stat[];
  services: ServiceItem[];
  processTitle: string;
  processDesc: string;
  steps: Step[];
  keyLabel: string;
  keyTitle: string;
  keyItems: KeyItem[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaButton: string;
}

export const PE: ServiceConfig = {
  slug: "private-equity",
  label: "Private Equity",
  heroTitle: "Fondos que se estructuran para ",
  heroTitleAccent: "cerrar con éxito",
  subtitle:
    "98% de tasa de cierre en $250M+ de capital asesorado. Desde la constitución del vehículo hasta la estrategia de salida, su fondo tiene cobertura legal completa.",
  heroStats: [
    { v: "$250M+", l: "Capital asesorado" },
    { v: "180+", l: "Fondos estructurados" },
    { v: "45+", l: "Exits exitosos" },
    { v: "12", l: "Jurisdicciones" },
  ],
  overviewTitle: "Su fondo merece asesoría legal que piensa como inversionista",
  overviewText: [
    "Estructurar un fondo de inversión en Latinoamérica es complejo: regulaciones cambiantes, múltiples jurisdicciones fiscales, inversionistas con expectativas distintas. Una mala arquitectura legal puede costarle meses de retrasos y millones en eficiencia perdida.",
    "MERIDIAN ha estructurado 180+ fondos y asesorado $250M+ en capital. Trabajamos con family offices, fondos institucionales y corporaciones que invierten en Costa Rica y la región, desde rondas semilla de $500K hasta operaciones de $50M+.",
    "Nuestro equipo no solo entiende el marco legal. Entiende la lógica financiera detrás de cada estructura. Eso significa que diseñamos vehículos que optimizan retornos netos, no que solo cumplen la norma.",
    "El resultado: 98% de tasa de cierre, un retorno promedio de portafolio de 8.2x y relaciones con reguladores que nos permiten anticipar cambios normativos antes de que afecten a su inversión.",
  ],
  overviewStats: [
    { v: "$250M+", l: "Capital total asesorado en 5 años" },
    { v: "98%", l: "Tasa de cierre exitoso" },
    { v: "35+", l: "Limited Partners activos" },
    { v: "8.2x", l: "Retorno promedio de portafolio" },
  ],
  services: [
    { title: "Estructuración de Fondos", desc: "Diseñamos la arquitectura legal óptima para fondos de inversión: selección de jurisdicción, estructura de vehículos LP/GP, partnership agreements, waterfall de distribución, carried interest, mecanismos de gobernanza y evaluación de implicaciones fiscales multi-jurisdiccionales." },
    { title: "Due Diligence Legal", desc: "Investigaciones exhaustivas de targets: análisis corporativo, revisión de contratos materiales, cumplimiento regulatorio, litigios pendientes, propiedad intelectual, asuntos laborales, ambientales y tributarios. Reportes detallados con calificación de riesgos." },
    { title: "Negociación y Documentación", desc: "Redactamos y negociamos term sheets, acuerdos de inversión, pactos de accionistas, cláusulas drag-along/tag-along, mecanismos de ajuste de precio, representaciones y garantías, e indemnizaciones." },
    { title: "Estrategias de Salida", desc: "Planificamos exits mediante ventas estratégicas, IPOs, ventas secundarias, recapitalizaciones y fusiones. Estructuramos cada salida para maximizar retorno neto post-impuestos cumpliendo obligaciones regulatorias." },
    { title: "Compliance Regulatorio", desc: "Cumplimiento con regulaciones de mercado de valores, normativa AML/KYC, regulaciones de inversión extranjera, reportes a SUGEVAL/CONASSIF, y normativa internacional FATCA y CRS para fondos con inversionistas internacionales." },
    { title: "Gobernanza Corporativa", desc: "Estructuras de gobernanza robustas: composición de juntas directivas, comités de inversión, políticas de conflicto de interés, protocolos de reporte a inversionistas y frameworks ESG." },
  ],
  processTitle: "De la tesis de inversión al cierre: sin fricción, sin sorpresas",
  processDesc: "Cada transacción sigue nuestra metodología probada en 180+ operaciones. Rigor legal con la agilidad que el capital privado exige.",
  steps: [
    { title: "Evaluación Estratégica", desc: "Analizamos sus objetivos, perfil de riesgo, horizonte temporal y restricciones regulatorias para diseñar una estrategia legal alineada con sus metas financieras, antes de comprometer un solo dólar." },
    { title: "Estructuración y Documentación", desc: "Diseñamos la arquitectura legal óptima del vehículo y preparamos toda la documentación: memorandos de oferta, acuerdos de suscripción, partnership agreements. Sin burocracia innecesaria." },
    { title: "Due Diligence y Negociación", desc: "Investigación legal exhaustiva del target y negociación de términos definitivos. Protegemos sus intereses sin destruir la relación comercial: esa es la diferencia entre un abogado de transacciones y uno de litigios." },
    { title: "Cierre Sin Sorpresas", desc: "Coordinamos cada condición precedente, verificamos cada documento y gestionamos el desembolso. Cuando firmamos, todo está en orden." },
    { title: "Monitoreo Post-Inversión", desc: "La relación no termina en el cierre. Asesoría continua en covenants, reestructuraciones, rondas adicionales y estrategias de salida." },
  ],
  keyLabel: "Aspectos Clave",
  keyTitle: "Consideraciones en Private Equity",
  keyItems: [
    { title: "Marco Regulatorio", desc: "Costa Rica tiene un marco regulatorio en evolución para fondos de inversión. Mantenemos relaciones activas con SUGEVAL y CONASSIF para anticipar cambios normativos." },
    { title: "Tributación Internacional", desc: "Las estructuras de PE involucran múltiples jurisdicciones. Coordinamos con asesores fiscales para optimizar carga tributaria sin esquemas agresivos." },
    { title: "Protección de Minoritarios", desc: "Mecanismos robustos: derechos de veto, cláusulas anti-dilución, derechos de información y mecanismos de resolución de disputas." },
    { title: "Control Cambiario", desc: "Asesoría sobre regulaciones cambiarias que afectan repatriación de utilidades y distribución de retornos a inversionistas extranjeros." },
    { title: "ESG & Sostenibilidad", desc: "Integramos criterios ambientales, sociales y de gobernanza respondiendo a la creciente demanda de inversiones responsables." },
    { title: "Arbitraje Internacional", desc: "Mecanismos de arbitraje ICC y CICA en todos nuestros documentos transaccionales para resolución eficiente de disputas." },
  ],
  faqs: [
    { q: "¿Cuál es la estructura más utilizada para un fondo de PE en Costa Rica?", a: "La más común es un fondo regulado por SUGEVAL o sociedades anónimas con pactos sofisticados. Para inversionistas internacionales, estructuramos vehículos en Delaware, Caimán o Luxemburgo como feeders que invierten en un master fund local." },
    { q: "¿Cuánto tiempo toma estructurar y levantar un fondo?", a: "El timeline típico es 4-8 meses: estructuración legal (6-8 semanas), documentos de oferta (4-6 semanas), proceso regulatorio (8-12 semanas) y levantamiento de capital (variable)." },
    { q: "¿Qué costos legales debo considerar?", a: "Una estructuración básica oscila entre $25,000-$50,000; multi-jurisdiccional puede superar $100,000. Due diligence: $10,000-$30,000 por transacción. Ofrecemos estructuras mixtas (fijo + success fee)." },
    { q: "¿Pueden asesorar a inversionistas extranjeros?", a: "Más del 40% de nuestros clientes son internacionales. Equipo bilingüe y coordinación con firmas corresponsales en jurisdicciones de origen." },
    { q: "¿Ofrecen servicios post-inversión?", a: "Sí: representación en juntas, cumplimiento corporativo, reestructuraciones, rondas adicionales y planificación de estrategias de salida." },
  ],
  ctaHeadline: "¿Tiene un fondo que necesita estructura legal sólida?",
  ctaButton: "Agendar Consulta de Estructuración",
};

export const RE: ServiceConfig = {
  slug: "real-estate",
  label: "Real Estate",
  heroTitle: "Inversiones inmobiliarias con ",
  heroTitleAccent: "cero sorpresas legales",
  subtitle: "120+ transacciones cerradas. Cero defectos de título. Due diligence en 48 horas. Su propiedad en Costa Rica, legalmente blindada desde el primer día.",
  heroStats: [
    { v: "$180M+", l: "En propiedades" },
    { v: "120+", l: "Transacciones" },
    { v: "45+", l: "Desarrollos" },
    { v: "100%", l: "Titulación exitosa" },
  ],
  overviewTitle: "Costa Rica tiene oportunidades extraordinarias, y trampas legales que cuestan fortunas",
  overviewText: [
    "Propiedades con gravámenes no declarados. Títulos sin planos catastrados. Terrenos en zona marítimo terrestre con restricciones para extranjeros. Permisos de construcción denegados por viabilidad ambiental. Estos no son escenarios hipotéticos: son problemas que nuestros clientes evitaron porque los detectamos a tiempo.",
    "MERIDIAN ha participado en las transacciones inmobiliarias más significativas de Costa Rica en la última década: residencias de lujo, desarrollos hoteleros, proyectos comerciales, agroindustria y concesiones de ZMT.",
    "Nuestro due diligence registral cubre 30 años de historia de cada propiedad. Verificamos cadena de títulos, gravámenes, servidumbres, afectaciones ambientales, uso de suelo y deudas municipales, y entregamos un informe claro en 48 horas.",
    "El resultado: 120+ transacciones cerradas, cero defectos de título descubiertos post-cierre. Eso no es suerte. Es metodología.",
  ],
  overviewStats: [
    { v: "120+", l: "Transacciones cerradas" },
    { v: "$180M", l: "Valor total en propiedades" },
    { v: "0", l: "Defectos de título post-cierre" },
    { v: "48hrs", l: "Due diligence registral express" },
  ],
  services: [
    { title: "Due Diligence Inmobiliario", desc: "Investigación exhaustiva registral, catastral, municipal y ambiental. Verificamos cadena de títulos (30 años), gravámenes, planos catastrados, uso de suelo, servidumbres, afectaciones ambientales y deudas." },
    { title: "Adquisiciones y Compraventas", desc: "Contratos de compraventa, opciones de compra, promesas recíprocas, permutas y cesiones con cláusulas de protección: condiciones suspensivas, garantías sobre estado de la propiedad y ajuste de precio por defectos post-cierre." },
    { title: "Desarrollo y Construcción", desc: "Fideicomisos inmobiliarios, contratos de construcción (llave en mano, precio máximo garantizado), permisos de construcción, visados municipales, cumplimiento SETENA y declaratoria de condominio." },
    { title: "Zona Marítimo Terrestre", desc: "Manejo especializado de concesiones en ZMT: solicitudes, renovaciones, traspasos, cumplimiento de planes reguladores costeros, restricciones a extranjeros y defensa ante cancelación de concesiones." },
    { title: "Estructuración Fiscal", desc: "Optimización fiscal: impuesto de traspaso, plusvalía, ganancias de capital, IVA en arrendamientos comerciales, y estructuración mediante sociedades holding, fideicomisos y fondos inmobiliarios." },
    { title: "Inversión Extranjera", desc: "Guía para no residentes: restricciones en zona fronteriza y ZMT, estructuración mediante sociedades locales, obligaciones tributarias de no domiciliados y cumplimiento anti-lavado para transacciones cross-border." },
  ],
  processTitle: "Del análisis al registro: cada paso protege su inversión",
  processDesc: "Nuestro proceso estructurado ha eliminado las sorpresas en 120+ transacciones. Cada etapa tiene entregables claros y plazos definidos.",
  steps: [
    { title: "Diagnóstico en 48 Horas", desc: "Investigación registral express, verificación de uso de suelo, identificación de restricciones ambientales y estimación de costos totales de cierre. Sin compromisos, con claridad total." },
    { title: "Due Diligence Completo", desc: "Estudio registral de 30 años, verificación catastral, consultas municipales, análisis ambiental y revisión de derechos de terceros. Si hay un problema, lo encontramos antes de que usted firme." },
    { title: "Contratos que Protegen", desc: "Redactamos contratos con cláusulas de garantía robustas, condiciones de cierre claras y mecanismos de protección ante defectos post-transacción. Cada palabra tiene un propósito." },
    { title: "Cierre Limpio", desc: "Coordinamos escritura pública, impuestos de traspaso, timbres y presentación al Registro Nacional. Usted llega a firmar; nosotros ya resolvimos todo lo demás." },
    { title: "Registro Confirmado", desc: "Monitoreamos la inscripción registral hasta confirmar que su propiedad está en nombre correcto, libre de anotaciones y con todos los registros actualizados." },
  ],
  keyLabel: "Marco Legal",
  keyTitle: "Aspectos Legales Clave en Real Estate",
  keyItems: [
    { title: "Registro Nacional", desc: "Sistema registral constitutivo: la propiedad se transfiere con la inscripción. Verificamos que el asiento registral sea limpio y sin anotaciones marginales." },
    { title: "Zona Marítimo Terrestre", desc: "200 metros desde pleamar son inalienables. Los siguientes 150m solo concesionables. Extranjeros no residentes por 5+ años no pueden ser concesionarios." },
    { title: "Restricciones Fronterizas", desc: "La Constitución prohíbe a extranjeros adquirir inmuebles dentro de 2 km de fronteras. Requiere planificación cuidadosa para inversiones en zonas fronterizas." },
    { title: "Impuesto de Traspaso", desc: "1.5% sobre el valor registrado o declarado (el mayor), más timbres fiscales, registrales y municipales (~0.5-0.8% adicional)." },
    { title: "SETENA y Permisos", desc: "Todo desarrollo requiere viabilidad ambiental de SETENA. El nivel de estudio (D1 a D4) depende del impacto. Plazos: 2 semanas a 6 meses." },
    { title: "Propiedad Horizontal", desc: "Permite dividir un inmueble en unidades privadas y áreas comunes. Requiere reglamento, planos individuales y aprobación del Registro." },
  ],
  faqs: [
    { q: "¿Un extranjero puede comprar propiedades sin restricciones?", a: "En general sí, con dos excepciones: no pueden adquirir dentro de 2 km de fronteras ni ser concesionarios de ZMT sin 5 años de residencia." },
    { q: "¿Cuánto toma el due diligence inmobiliario?", a: "Estándar: 5-10 días hábiles. Propiedades complejas: 2-3 semanas. Servicio express de 48 horas para evaluaciones preliminares." },
    { q: "¿Qué costos adicionales al precio de compra?", a: "Impuesto de traspaso (1.5%), honorarios notariales (1-1.5%), timbres (~0.5%), impuesto municipal. Total: 4-5% del valor." },
    { q: "¿Es seguro invertir en derechos posesorios?", a: "No están protegidos por el sistema registral. Recomendamos adquirir solo propiedades inscritas en el Registro Nacional." },
    { q: "¿Qué es un fideicomiso inmobiliario?", a: "Estructura donde un fiduciario administra la propiedad en beneficio de fideicomisarios. Útil para desarrollos (preventa), estructuración fiscal, planificación sucesoria y garantías de financiamiento." },
  ],
  ctaHeadline: "¿Listo para blindar su inversión inmobiliaria?",
  ctaButton: "Agendar Due Diligence Express",
};

export const ESC: ServiceConfig = {
  slug: "escrow",
  label: "Servicios de Escrow",
  heroTitle: "Sus fondos, intocables hasta que ",
  heroTitleAccent: "todo se cumpla",
  subtitle: "320+ custodias ejecutadas. Cero incidentes. Cero disputas no resueltas. Cuentas segregadas en Banco Nacional, BAC y Scotiabank con pólizas de $5M por evento.",
  heroStats: [
    { v: "320+", l: "Escrows ejecutados" },
    { v: "$95M+", l: "Fondos custodiados" },
    { v: "0", l: "Incidentes" },
    { v: "24hrs", l: "Desembolso" },
  ],
  overviewTitle: "En una transacción de alto valor, la confianza no se asume: se garantiza",
  overviewText: [
    "Cuando hay millones de dólares en juego, ¿confiaría en un acuerdo verbal? ¿En una transferencia directa antes de que se cumplan todas las condiciones? Las transacciones complejas necesitan un mecanismo que proteja a ambas partes por igual. Ese mecanismo es el escrow.",
    "MERIDIAN actúa como tercero imparcial y certificado. Custodiamos fondos en cuentas completamente segregadas (nunca mezcladas con activos de la firma) hasta que TODAS las condiciones contractuales se verifiquen y documenten.",
    "Nuestras cuentas operan exclusivamente en Banco Nacional, BAC Credomatic y Scotiabank. Cada operación está respaldada por pólizas de responsabilidad profesional de $5 millones por evento.",
    "En 320+ operaciones, nuestro historial es impecable: cero incidentes, cero fondos en riesgo, cero disputas no resueltas. Cada escrow es supervisado personalmente por un abogado senior desde el primer depósito hasta el desembolso final.",
  ],
  overviewStats: [
    { v: "320+", l: "Escrows sin incidentes" },
    { v: "$95M", l: "Total custodiado" },
    { v: "100%", l: "Tasa de resolución" },
    { v: "<24hrs", l: "Desembolso post-verificación" },
  ],
  services: [
    { title: "Escrow Inmobiliario", desc: "Custodia para compraventas de bienes raíces: protegemos el depósito del comprador durante due diligence, permisos y traspaso. Desembolso solo tras verificar inscripción registral y cumplimiento de todas las condiciones contractuales." },
    { title: "Escrow para M&A", desc: "Custodia para fusiones y adquisiciones: holdback para garantías del vendedor, escrows de indemnización, retención de precio pendiente de ajuste post-cierre y fondos de earn-out condicionados a metas financieras." },
    { title: "Escrow de Garantía", desc: "Depósitos de garantía para arrendamientos, construcción, licencias y franquicias. Condiciones claras de devolución o ejecución protegiendo intereses de ambas partes." },
    { title: "Escrow Internacional", desc: "Transacciones cross-border: manejo multi-divisa (USD, EUR, GBP, colones), cumplimiento cambiario, verificación de origen de fondos AML/KYC y coordinación con bancos corresponsales." },
    { title: "Escrow de Documentos", desc: "Custodia segura de acciones, títulos de propiedad, códigos fuente, propiedad intelectual y otros activos documentales críticos durante o después de transacciones." },
    { title: "Escrow Tecnológico", desc: "Custodia de código fuente para proteger licenciatarios de software. Si el desarrollador incumple, los licenciatarios acceden al código depositado. Incluye verificación técnica periódica." },
  ],
  processTitle: "Protocolo de custodia: transparencia absoluta en cada paso",
  processDesc: "Controles verificables en cada etapa. Usted siempre sabe dónde están sus fondos, cuál es el estado de las condiciones y cuándo se ejecuta el desembolso.",
  steps: [
    { title: "Acuerdo Claro desde el Inicio", desc: "Redactamos un acuerdo de escrow detallado: partes, monto exacto, condiciones de desembolso, plazos, verificación, resolución de disputas y honorarios. Todo firmado antes de recibir un solo centavo." },
    { title: "Cuenta Segregada Certificada", desc: "Abrimos una cuenta fiduciaria exclusiva para su operación en Banco Nacional, BAC o Scotiabank. Sus fondos nunca se mezclan con activos de la firma. Le entregamos certificación bancaria el mismo día." },
    { title: "Custodia con Confirmación Inmediata", desc: "Recibimos los fondos por transferencia verificada y confirmamos recepción en menos de 2 horas hábiles. Sus fondos generan intereses durante la custodia, que le corresponden a usted." },
    { title: "Verificación Activa de Condiciones", desc: "Monitoreamos activamente el cumplimiento de cada condición. Documentamos evidencia, realizamos verificaciones independientes y notificamos el estado a todas las partes en tiempo real." },
    { title: "Desembolso en 24 Horas", desc: "Una vez verificadas TODAS las condiciones, ejecutamos el desembolso en menos de 24 horas. Si alguna condición no se cumple, gestionamos la devolución según los términos acordados y emitimos certificación de cierre." },
  ],
  keyLabel: "Seguridad y Garantías",
  keyTitle: "¿Por Qué Nuestro Servicio de Escrow?",
  keyItems: [
    { title: "Cuentas Segregadas", desc: "Cada escrow opera en cuenta independiente, completamente separada de activos de la firma. Fondos protegidos y trazables en todo momento." },
    { title: "Seguro de Responsabilidad", desc: "Pólizas de $5 millones por evento. Capa adicional de protección para fondos bajo custodia." },
    { title: "Imparcialidad Certificada", desc: "Agentes certificados obligados por ley y código ético a imparcialidad absoluta. Representamos la integridad de la transacción." },
    { title: "Cumplimiento AML/KYC", desc: "Verificación de origen de fondos conforme a Ley 7786. Debida diligencia de todas las partes y reporte de actividades sospechosas." },
    { title: "Monitoreo en Tiempo Real", desc: "Portal seguro con autenticación de dos factores para consultar estado de fondos y progreso de condiciones en cualquier momento." },
    { title: "Resolución de Disputas", desc: "Mecanismo expedito: negociación directa (15 días), mediación certificada (30 días), arbitraje vinculante. Fondos seguros durante todo el proceso." },
  ],
  faqs: [
    { q: "¿Cuánto cuesta el servicio de escrow?", a: "Entre 0.5% y 1.5% del monto custodiado, mínimo $1,500. Tarifas preferenciales para escrows superiores a $1 millón. Honorarios acordados por adelantado." },
    { q: "¿En qué bancos se depositan los fondos?", a: "Banco Nacional, BAC Credomatic y Scotiabank exclusivamente. Para escrows internacionales, bancos corresponsales en Estados Unidos." },
    { q: "¿Qué sucede si surge una disputa?", a: "Procedimiento específico: negociación directa (15 días), mediación certificada (30 días), arbitraje vinculante. Los fondos permanecen seguros durante la resolución." },
    { q: "¿Manejan escrows en moneda extranjera?", a: "Sí: colones, dólares, euros y libras esterlinas. Coordinación con bancos corresponsales. Tipo de cambio definido en el acuerdo." },
    { q: "¿Cuánto puede durar un escrow?", a: "Inmobiliarios: 30-90 días. M&A: 12-24 meses (con earn-out). Software: indefinido con renovaciones anuales." },
    { q: "¿Generan intereses los fondos?", a: "Sí, en cuentas con intereses de mercado. La distribución se establece en el acuerdo y, típicamente, corresponden al depositante original." },
  ],
  ctaHeadline: "¿Necesita un escrow seguro para su próxima transacción?",
  ctaButton: "Iniciar Escrow Seguro",
};

export const TAX: ServiceConfig = {
  slug: "tax-advisory",
  label: "Asesoría Fiscal y Patrimonial",
  heroTitle: "Proteja su patrimonio. Minimice su carga fiscal. ",
  heroTitleAccent: "Estructure para crecer",
  subtitle: "Planificación fiscal proactiva, estructuración corporativa y protección patrimonial integradas en un solo marco estratégico. Diseñado para inversionistas, fondos y personas de alto patrimonio que operan en Costa Rica y Latinoamérica.",
  heroStats: [
    { v: "$250M+", l: "Activos bajo asesoría" },
    { v: "180+", l: "Estructuras optimizadas" },
    { v: "12", l: "Jurisdicciones cubiertas" },
    { v: "98%", l: "Éxito en auditorías" },
  ],
  overviewTitle: "En Costa Rica, una mala estructura fiscal no solo cuesta dinero: cuesta oportunidades",
  overviewText: [
    "Inversionistas extranjeros, administradores de fondos y empresarios que operan en Costa Rica enfrentan un entorno tributario complejo: impuesto sobre la renta, ganancias de capital (desde 2019), impuestos de traspaso, retenciones, obligaciones con la CCSS y regulaciones anti-elusión en constante evolución. Un solo error de cálculo puede desencadenar auditorías, sanciones o, peor aún, la imposibilidad de repatriar retornos.",
    "La mayoría de firmas abordan lo fiscal de forma reactiva: presentan declaraciones, responden auditorías, corrigen problemas después de que ocurren. MERIDIAN opera de manera diferente: arquitectamos toda su posición fiscal proactivamente, alineando la estrategia tributaria con su tesis de inversión, estructura corporativa y objetivos de protección patrimonial antes de que se mueva un solo dólar.",
    "Nuestro equipo ha optimizado estructuras en más de $250M en activos, desde arquitecturas de fondos de PE hasta sociedades holding inmobiliarias, desde arreglos de escrow transfronterizos hasta vehículos de planificación sucesoria. Coordinamos con asesores fiscales en 12 jurisdicciones para asegurar que su estructura funcione globalmente, no solo localmente.",
    "El resultado: nuestros clientes retienen más, arriesgan menos y operan con total claridad sobre sus obligaciones fiscales, año tras año.",
  ],
  overviewStats: [
    { v: "$250M+", l: "Activos bajo asesoría fiscal" },
    { v: "0", l: "Resultados adversos en auditorías" },
    { v: "12", l: "Jurisdicciones coordinadas" },
    { v: "100%", l: "Tasa de cumplimiento mantenida" },
  ],
  services: [
    { title: "Planificación Fiscal Proactiva", desc: "Estrategias fiscales plurianuales calibradas a su horizonte de inversión. Optimización de renta, estructuración de ganancias de capital, gestión de retenciones y posicionamiento de IVA; todo diseñado antes de que las transacciones ocurran, no después." },
    { title: "Estructuras Corporativas y Holding", desc: "Diseño e implementación de arquitecturas corporativas fiscalmente eficientes: sociedades holding, SPVs, fideicomisos y entidades híbridas. Estructuras que optimizan la carga tributaria manteniendo flexibilidad operativa y segregación de activos." },
    { title: "Protección Patrimonial", desc: "Marcos legales que blindan activos personales y corporativos contra reclamaciones de acreedores, exposición litigiosa y excesos regulatorios. Planificación sucesoria, fideicomisos irrevocables y segregación patrimonial multi-jurisdiccional." },
    { title: "Coordinación Fiscal Transfronteriza", desc: "Coordinación con asesores fiscales en EE.UU., Canadá, UE, Reino Unido y LATAM para eliminar doble imposición, optimizar beneficios de tratados y asegurar cumplimiento FATCA/CRS para clientes internacionales que operan en Costa Rica." },
    { title: "Auditorías Fiscales Preventivas", desc: "Revisiones diagnósticas anuales que identifican exposiciones antes de que lo haga la autoridad tributaria. Simulación completa de una auditoría del Ministerio de Hacienda, con hojas de ruta de remediación y preparación documental." },
    { title: "Gestión de Cumplimiento Continuo", desc: "Cumplimiento regulatorio durante todo el año: declaraciones tributarias, obligaciones con la CCSS, reporte de beneficiarios finales, documentación de precios de transferencia y cumplimiento anti-lavado. Todo gestionado bajo un solo contrato de servicio." },
  ],
  processTitle: "Del diagnóstico a la optimización continua: una metodología probada",
  processDesc: "Cada compromiso sigue un enfoque estructurado en cuatro fases, refinado en más de 180 mandatos de asesoría. Análisis riguroso, entregables claros, cero ambigüedad.",
  steps: [
    { title: "Revisión Diagnóstica", desc: "Análisis integral de su posición fiscal actual, estructura corporativa, tenencias patrimoniales y obligaciones tributarias. Identificamos exposiciones, cuantificamos ahorros potenciales y presentamos una hoja de ruta clara, antes de que se comprometa con nada." },
    { title: "Diseño de Estrategia", desc: "Estrategia fiscal personalizada y recomendaciones estructurales, calibradas a su tesis de inversión, tolerancia al riesgo y objetivos plurianuales. Incluye opiniones legales formales y cronogramas de implementación." },
    { title: "Implementación", desc: "Ejecución de cambios estructurales: constitución de entidades, creación de fideicomisos, elecciones fiscales, trámites regulatorios y coordinación con bancos, notarios y asesores extranjeros. Cada paso documentado, cada plazo controlado." },
    { title: "Monitoreo Continuo", desc: "Gestión de cumplimiento continuo, seguimiento de cambios regulatorios y revisiones anuales de optimización fiscal. Su posición tributaria evoluciona conforme evoluciona su portafolio, y nos aseguramos de que se mantenga óptima." },
  ],
  keyLabel: "La Ventaja MERIDIAN",
  keyTitle: "No es solo asesoría fiscal: es una arquitectura patrimonial integrada",
  keyItems: [
    { title: "Integrada con sus transacciones", desc: "Su estrategia fiscal se diseña junto con sus operaciones de PE, adquisiciones inmobiliarias y arreglos de escrow. No se agrega después del hecho." },
    { title: "Proactiva, no reactiva", desc: "Arquitectamos su posición fiscal antes de que cierren las transacciones. Para cuando la autoridad tributaria revise, su estructura ya ha sido probada bajo presión." },
    { title: "Coordinación multi-jurisdiccional", desc: "Una firma, 12 jurisdicciones. No más gestionar asesores fiscales separados en países separados con facturaciones separadas." },
    { title: "Asesoría de grado institucional", desc: "El mismo calibre de planificación fiscal que reciben los fondos de $100M+, disponible para inversionistas individuales y empresas en crecimiento." },
    { title: "Costos predecibles", desc: "Contratos de servicio con tarifa fija y alcance claramente definido. Sin sorpresas de facturación por hora. Modelos basados en éxito disponibles para transacciones grandes." },
    { title: "Cumplimiento FATCA/CRS", desc: "Aseguramos que sus estructuras cumplan con los estándares de reporte automático de información financiera exigidos internacionalmente." },
  ],
  faqs: [
    { q: "¿En qué se diferencia esto de una firma fiscal tradicional?", a: "Las firmas tradicionales presentan declaraciones y responden auditorías. Nosotros arquitectamos toda su posición fiscal de forma proactiva, integrando la estrategia tributaria con sus estructuras de inversión, transacciones inmobiliarias y protección patrimonial. El resultado es un enfoque unificado que optimiza en todas las dimensiones, no solo una." },
    { q: "¿Manejan obligaciones fiscales de EE.UU. o la UE?", a: "Coordinamos con asesores fiscales certificados en EE.UU., Canadá, Reino Unido, UE y LATAM. Aunque estamos licenciados para ejercer en Costa Rica, nuestra red multi-jurisdiccional asegura que su posición fiscal global esté optimizada sin vacíos ni conflictos." },
    { q: "¿Cuánto cuesta la revisión diagnóstica inicial?", a: "La revisión diagnóstica inicial se proporciona sin costo y sin compromiso. Creemos que debe entender su posición fiscal antes de decidir contratar. La revisión incluye un resumen escrito de hallazgos y una propuesta clara para los siguientes pasos." },
    { q: "¿Pueden trabajar con mi contador actual?", a: "Absolutamente. Regularmente coordinamos con contadores externos, auditores y preparadores de impuestos. Nuestro rol es asesoría estratégica y diseño estructural, complementario (no competitivo) con su soporte fiscal operativo existente." },
    { q: "¿Qué tipos de estructuras recomiendan?", a: "Depende enteramente de su situación. Vehículos comunes incluyen sociedades holding (SA o SRL), fideicomisos, sociedades en comandita para estructuras de PE, y arreglos mixtos corporativos/fiduciarios para protección patrimonial. Nunca recomendamos una estructura sin entender sus objetivos específicos." },
    { q: "¿Cuánto dura un compromiso típico?", a: "La fase diagnóstica toma 5-7 días hábiles. Diseño de estrategia: 2-3 semanas. Implementación: 4-8 semanas según complejidad. El monitoreo continuo es permanente. La mayoría de clientes ven ahorros fiscales medibles dentro del primer trimestre fiscal." },
  ],
  ctaHeadline: "Una conversación de 30 minutos puede transformar su posición fiscal",
  ctaButton: "Agendar Mi Revisión Fiscal",
};
