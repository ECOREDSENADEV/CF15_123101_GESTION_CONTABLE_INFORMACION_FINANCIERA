<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estado de cambios en el patrimonio 

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema3/1.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 El estado de cambios en el patrimonio presenta el resultado del periodo sobre el que se informa de una entidad, las partidas de ingresos y gastos reconocidas en el otro resultado integral para el periodo, los efectos de los cambios en políticas contables y las correcciones de errores reconocidos en el periodo, y los importes de las inversiones hechas, y los dividendos y otras distribuciones recibidas, durante el periodo por los inversores en patrimonio (CTCP, 2020, p. 9).
    
        .row.mb-5
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/2.svg", data-aos="zoom-in")
          .col-lg-6
            .bg-color-28.p-5(data-aos="fade-left").h-100
              h5.mb-5 Respecto al estado de cambio en el patrimonio la Norma Internacional de Contabilidad (NIC) 1 determina que: 
              p Una entidad presentará un estado de cambios en el patrimonio tal como se requiere en el párrafo 10. El estado de cambios en el patrimonio incluye la siguiente información: 
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span A
                  | El resultado integral total del periodo, mostrando de forma separada los importes totales atribuibles a los propietarios de la controladora y los atribuibles a las participaciones no controladoras; 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B
                  | Para cada componente de patrimonio, los efectos de la aplicación retroactiva o la reexpresión retroactiva reconocidos según la NIC 8; y 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span C
                  | [Eliminado]
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span d
                  | para cada componente del patrimonio, una conciliación entre los importes en libros, al inicio y al final del periodo, revelando por separado (como mínimo) los cambios resultantes de: 

                ul.ms-4.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-14
                    p.mb-0 El resultado del periodo; 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-14
                    p.mb-0 Otro resultado integral; y 
                  li.mb-0.d-flex
                    i.fas.fa-check-circle.bg-color-14
                    p.mb-0 Transacciones con los propietarios en su calidad de tales, mostrando por separado las contribuciones realizadas por los propietarios y las distribuciones a éstos y los cambios en las participaciones de propiedad en subsidiarias que no den lugar a una pérdida de control (CTCP, 2020).
    .row.mb-5.justify-content-center
      .col-lg-10  
        div.bg-color-9.p-5.tarjeta
          p.mb-0 Es de resaltar que este estado financiero básico cambió radicalmente con relación al que se presentaba en el pasado. Se presenta un comparativo año anterior vs. presente año. Esto es una característica bien marcada en las NIIF. Adicionalmente, se presenta cada uno de los componentes del patrimonio de manera vertical.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1.	Identificación  

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/3.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Informa los valores registrados en el patrimonio, como son:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo total del documento anterior.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Variaciones en el patrimonio neto por operaciones con socios o propietarios de la empresa.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Otras variaciones (reservas, utilidades).
    
    p.mb-4 El estado de cambios en el patrimonio debe ser identificable y comprensible para la adecuada toma de decisiones, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información:
    
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-sm-6.col-lg-4.mb-4 
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema3/4.svg', alt='Texto que describa la imagen')

              p Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.

          .col-sm-6.col-lg-4.mb-4 
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema3/5.svg', alt='Texto que describa la imagen')

              p Expresar si el estado financiero pertenece a una entidad individual o a un grupo.
          .col-sm-6.col-lg-4.mb-4 
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema3/6.svg', alt='Texto que describa la imagen')
              p Fecha del cierre del periodo sobre el que se informa.
          .col-sm-6.col-lg-4.mb-4 
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')
              p Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.
          .col-sm-6.col-lg-4.mb-4 
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema3/8.svg', alt='Texto que describa la imagen')
              p El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos (CTCP, 2020).
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2.	Periodo contable sobre el que se informa
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Acorde a las disposiciones contables y/o fiscales, el Estado de cambio en el patrimonio neto se presenta cada mes acorde a las disposiciones de la empresa y por lo menos una vez al año con corte a 31 de diciembre de cada año.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3.	Principio del ente en marcha 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Denominado también hipótesis de empresa en funcionamiento, este es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa y su intención en ningún momento es liquidar o recortar la escala de sus operaciones. Es importante recalcar que en Colombia desde el mismo momento que se registra una empresa en la Cámara de Comercio o en notaria se estipula cuándo inicia y cuándo termina sus actividades. 
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4.	Estructura

    p.mb-5 El estado de cambios en el patrimonio neto muestra las variaciones que sufren los diferentes elementos que componen el patrimonio de la empresa en determinado periodo, que puede ser mensual, bimestral, trimestral, cuatrimestral, semestral y por lo menos una vez al año con corte al año a 31 de diciembre.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/11.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left")
          p Las empresas presentarán del estado de cambio en el patrimonio neto comparado a los usuarios internos y/o externos según el caso:
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xls.svg")
            .anexo__texto
              p <b>Anexo.</b> Estructura del estado de cambio en el patrimonio.
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/12.svg", data-aos="zoom-in")
      .col-lg-6
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Este estado financiero básico está compuesto por: 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo al comienzo del ejercicio anterior del año anterior.  
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Corrección de errores de ejercicios anteriores.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Impacto del cambio de las políticas contables.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo reexpresado al comienzo del ejercicio del año anterior.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Ganancias del periodo.  
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Transacciones con los propietarios, registradas directamente con el patrimonio.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Contribuciones y distribuciones a los propietarios.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Acciones propias adquiridas.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Dividendos. 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Transacciones de pago basadas en acciones.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo reexpresado a 31 de diciembre del año anterior.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo al comienzo del presente ejercicio.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Ajustes por valorizaciones al valor razonable y otros que afectan directamente al patrimonio. 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Activos materiales e inmateriales
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Instrumentos financieros.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Diferencias en cambios.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Resultado global del ejercicio.
    
    h5.mb-5 Ejemplo: 

    .row.mb-5.justify-content-center
      .col-lg-12
        .tabla-b.color-acento-contenido
          .tabla-b__header
            h4.mb-0 Empresa Distribuidora, S.A Estado de Cambios en el Ptrimonio  Por los Períodos terminados en Diciembre 31
            p Expreso en miles de pesos
          table
            caption Leyenda de la tabla
            thead.bg-color-27
              tr
                th 
                th 
                th 
                th Revalorizacion
                th Utilidad
                th Superávit
                th Total
            thead.bg-color-23
              tr
                th Cambios en el patrimonio
                th Capital
                th Reservas
                th Patrimonio
                th Retenidas
                th Valorizacion
                th Patrimonio
            tbody
              tr
                td Saldo a diciembre 31 del Año 0
                td 1,500,000
                td 136,424
                td 1,903,317
                td -289,371
                td 6,579,253
                td 9,829,623
              tr
                td Revalorización patrimonio del año
                td
                td
                td 252,700
                td
                td
                td 252,700
              tr
                td Creación de Reserva Legal
                td
                td
                td
                td
                td
                td 0
              tr
                td Pago de dividendos
                td
                td
                td
                td
                td
                td 0
              tr
                td Ajuste a las valorizaciones
                td
                td
                td
                td
                td 562,166
                td 562,166
              tr
                td Utilidad del ejercicio
                td
                td
                td
                td 173,369
                td
                td 173,369
              tr
                td Saldo a diciembre 31 del Año 1
                td 1,500,000
                td 136,424
                td 2,156,017
                td -116,002
                td 7,141,419
                td 10,817,858
              tr
                td Revalorización patrimonio del año
                td
                td
                td 258,063
                td
                td
                td 258,063
              tr
                td Creación de Reserva Legal
                td
                td 17,337
                td
                td -17,337
                td
                td 0
              tr
                td Pago de dividendos
                td
                td
                td
                td
                td
                td 0
              tr
                td Ajuste a las valorizaciones
                td
                td
                td
                td
                td 1,269,904
                td 1,269,904
              tr
                td Utilidad del ejercicio
                td
                td
                td
                td 331,684
                td
                td 331,684
              tr.text-bold
                td Saldo a diciembre 31 del año 2
                td 1,500,000
                td 153,761
                td 2,414,080
                td 198,345
                td 8,411,323
                td 12,677,509
           
    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5.	Información a revelar

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/13.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Según la NIC 1 se debe presentar la siguiente información (CTCP, 2020): 
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span A
              | El resultado integral total del periodo, mostrando de forma separada los importes totales atribuibles a los propietarios de la controladora y los atribuibles a las participaciones no controladoras
            li.d-flex
              .lista-ol--cuadro__vineta
                span B
              | Para cada componente de patrimonio, los efectos de la aplicación retroactiva o la reexpresión retroactiva reconocidos según la NIC 8 
            li.d-flex
              .lista-ol--cuadro__vineta
                span C
              | Para cada componente del patrimonio, una conciliación entre los importes en libros, al inicio y al final del periodo, revelando por separado (como mínimo) los cambios resultantes de: 

            ul.ms-4.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 El resultado del periodo 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Otro resultado integral
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Transacciones con los propietarios en su calidad de tales, mostrando por separado las contribuciones realizadas por los propietarios y las distribuciones a éstos y los cambios en las participaciones de propiedad en subsidiarias que no den lugar a una pérdida de control. Información para presentar en el estado de cambios en el patrimonio o en las notas. (NIC 1. 106).

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
