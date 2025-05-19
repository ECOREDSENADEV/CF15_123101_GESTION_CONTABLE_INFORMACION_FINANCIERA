<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos fundamentales relacionados con la estructura, presentación y normatividad aplicable a los estados financieros de propósito general conforme a las Normas Internacionales de Información Financiera (NIIF).',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes es un componente de los estados financieros de propósito general?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado tributario consolidado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado de situación financiera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Análisis de rentabilidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informe de auditoría interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Según la NIC 1, ¿cuál es uno de los propósitos principales de presentar estados financieros comparables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurar la comparabilidad entre periodos y entre entidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminuir el impacto fiscal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitar el archivo documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar los ingresos operacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un principio que garantiza la continuidad operativa de una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de contabilidad dual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compensación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Base de acumulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Negocio en marcha.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué cuentas se agrupan en el estado de resultados integral por función de los gastos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingresos, costos de venta y gastos operacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Activos y pasivos circulantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patrimonio y reservas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flujos de efectivo y depreciaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica de los activos corrientes según la NIC 1?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son difíciles de convertir en efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No pueden venderse dentro del ciclo operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se espera realizar su venta dentro de los doce meses.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No pueden incluir inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué norma establece los lineamientos para la presentación del estado de flujos de efectivo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NIC 1.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'NIIF 9.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'NIC 7.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'NIIF 10.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'En el estado de situación financiera, ¿qué representa el patrimonio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El total de activos circulantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las deudas consolidadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La diferencia entre activos y pasivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los ingresos y egresos netos del periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes NO es una cuenta típica del estado de situación financiera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Efectivo y equivalentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Propiedades, planta y equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gastos financieros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es uno de los métodos para presentar el estado de flujos de efectivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Método contable mixto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentación por comparabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Método directo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Presentación simplificada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué se incluye en las notas a los estados financieros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el resumen ejecutivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Declaración de impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Políticas contables y desagregación de partidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Certificados bancarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los estados financieros de propósito general deben presentarse únicamente cada cinco años.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El estado de resultados integral incluye tanto ingresos como gastos del periodo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El estado de cambios en el patrimonio muestra únicamente las ganancias del periodo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El método indirecto del estado de flujos de efectivo inicia con la ganancia acumulada.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las NIIF permiten presentar los gastos por naturaleza o por función en el estado de resultados.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
