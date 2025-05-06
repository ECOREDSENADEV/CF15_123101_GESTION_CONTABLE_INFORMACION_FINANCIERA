export default {
  global: {
    Name: 'Estados financieros de propósito general',
    Description:
      'Se desarrollarán las bases para la presentación de los estados financieros de propósito general, bajo las NIIF. Los estados financieros son el resultado de las transacciones realizadas por la empresa en un periodo determinado, los cuales se encuentran integrados por: estado de situación financiera, estado de resultados, estado de cambio en el patrimonio, estado de flujos de efectivo y notas a los estados financieros. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estado de resultados integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aspectos generales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cuentas Otro Resultado Integral (ORI)',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Estructura',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Forma de presentación',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Información a revelar ',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estado de situación financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Distinción entre corriente y no corriente',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cuentas del Estado de situación financiera',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estructura',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Forma de presentación',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Información a revelar',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estado de cambios en el patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Principio del ente en marcha',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructura',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Información a revelar',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estado de flujos de efectivo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Período contable sobre el que se informa',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos para elaborar el flujo de efectivo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Métodos de presentación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estructura',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Notas y revelaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estados financieros de propósito general.',
      referencia:
        'Servicio Nacional de Aprendizaje, SENA. (2018). Revista Finnova: Investigación e Innovación Financiera y Organizacional. ',
      tipo: 'Capítulo 1 de libro',
      link: 'http://revistas.sena.edu.co/index.php/finn',
    },
  ],
  glosario: [
    {
      termino: 'Activo corriente',
      significado:
        'una entidad clasificará un activo como corriente cuando espera realizar el activo o tiene la intención de venderlo o consumirlo en su ciclo normal de operación; mantiene el activo principalmente con fines de negociación. ',
    },
    {
      termino: 'Estados financieros',
      significado:
        'un juego completo de estados financieros comprende un estado de situación financiera al final del periodo; un estado del resultado integral del periodo; un estado de cambios en el patrimonio del periodo; un estado de flujos de efectivo del periodo.',
    },
    {
      termino: 'Estados financieros con propósito general',
      significado:
        'son aquellos que pretenden cubrir las necesidades de usuarios que no están en condiciones de exigir informes a la medida de sus necesidades específicas de información.',
    },
    {
      termino: 'Financial Accounting Standards Board - FASB',
      significado:
        'en español traduce Misión del Concejo para los Estándares de Contaduría Financiera y es la entidad encargada de fijar los principios de contabilidad generalmente aceptados en los Estados Unidos. ',
    },
    {
      termino: 'Generally Accepted Accounting Principles – GAAP',
      significado:
        'su traducción corresponde a Principios de Contabilidad Generalmente Aceptados y son de uso general en el mundo, los USGAAP son los principios de contabilidad generalmente aceptados en Estados Unidos, mientras que los COLGAAP son los principios de contabilidad generalmente aceptados en Colombia.',
    },
    {
      termino: 'International Accounting Standard - IAS',
      significado:
        'Norma Internacional de Contabilidad, fueron todas las normas de Contabilidad emitidas por el Comité de Normas Internacionales de Contabilidad.',
    },
    {
      termino: 'International Accounting Standards Board - IASB',
      significado:
        'en español traduce Junta de Normas Internacionales de Contabilidad, fue creada en el año 2001 para ejercer las funciones que desde 1973 y hasta el año 2001 ejerció el IASC. ',
    },
    {
      termino: 'International Accounting Standards Committee - ',
      significado:
        'en español es el Comité de Normas Internacionales de Contabilidad, creado en Londres en 1973 con el fin de estudiar y proponer Normas internacionales de Información financiera internacionales y con el apoyo de 9 países (Australia, Canadá, Francia, Alemania, Japón, México, Países Bajos, Reino Unido y Estados Unidos) aunque Estados Unidos fue el único miembro de los países fundadores que decidió no utilizar las normas Emitidas por el IASC en un principio.',
    },
    {
      termino: 'International Accounting Education Standard Board - IAESB',
      significado:
        'su sigla en español es IES. Calidad de la educación contable, para poder hacer paralelos en la implementación de las normas contables. ',
    },
    {
      termino: 'International Financial Reporting Standards- IFRS',
      significado:
        'en español ha sido traducido como Normas Internacionales de Información Financiera (NIIF) y son las normas que ha emitido desde el 2001 la junta de normas internacionales de Contabilidad.',
    },
    {
      termino: 'NIC',
      significado:
        'Norma Internacional de Contabilidad, es la equivalencia de la sigla en inglés IAS (Institute Accounting Standard).',
    },
    {
      termino: 'NIIF',
      significado:
        'Norma Internacional de Información Financiera, es la equivalencia de la sigla en inglés IFRS (International Financial Reporting Estandar).',
    },
    {
      termino: 'Pasivo corriente',
      significado:
        'una entidad clasificará un pasivo como corriente cuando: espera liquidar el pasivo en su ciclo normal de operación; mantiene el pasivo principalmente con fines de negociación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (13 de julio de 2009). Ley 1314 de 2009. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1314_2009.html',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP. (2006). Norma Internacional de Contabilidad 7: Estados de flujos de efectivo. ',
      link:
        ' https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP. (2018). Norma Internacional de Contabilidad 1: Presentación de Estados Financieros. ',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534364977-6992',
    },
    {
      referencia:
        'Estupiñán, R. (2013). NIC / NIIF transición y adopción en la empresa. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Estupiñán, R., y Sierra, A. (2017). Estados financieros básicos: bajo NIC /NIIF. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Godoy, E. (2013). Contabilidad y presentación de estados financieros. Grupo Editorial Nueva Legislación.',
      link: '',
    },
    {
      referencia:
        'Godoy, E. (2014) Normas Internacionales de información financiera NIIF. Grupo Editorial Nueva Legislación.',
      link: '',
    },
    {
      referencia:
        'IFRS Foundation. (2009). Módulo 5: estado del resultado integral y estado de resultados. IFRS Publications. ',
      link: '',
    },
    {
      referencia: 'NIC NIIF (2009). NIIF para las pymes. ',
      link: 'https://www.nicniif.org/home/normas/niif-para-las-pymes.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (23 de diciembre de 2015). Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (23 de diciembre de 2015). Decreto 2496 de 2015, por medio del cual se modifica el Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (27 de marzo de 1971). Decreto-Ley 410 de 1971, por el cual se expide el Código del Comercio. http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (29 de diciembre de 1993). Decreto 2649 de 1993: Reglamento General de Contabilidad. ',
      link: 'https://niif.com.co/decreto-2649-1993/',
    },
    {
      referencia:
        'Pymes y autónomos (26 de septiembre de 2013). ¿Cuál es la diferencia entre liquidez y solvencia? ',
      link:
        'https://www.pymesyautonomos.com/administracion-finanzas/cual-es-la-diferencia-entre-liquidez-y-solvencia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
