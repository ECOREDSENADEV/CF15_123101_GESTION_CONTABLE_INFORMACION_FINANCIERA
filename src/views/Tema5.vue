<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Notas y revelaciones
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema5/1.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Las notas y revelaciones a los Estados financieros corresponden a las descripciones detalladas y desagregadas de los elementos de los estados financieros, los complementan para la adecuada interpretación y toma de decisiones.
        
            .bg-color-1.p-4.tarjeta(data-aos="fade-left")
              p Estas muestran la información que, en algunos casos, no ha sido presentada en los estados financieros o que requieren explicación minuciosa de las cuentas que componen las partidas y sus valores monetarios. Por tanto, la empresa revelará la información de manera comprensible y útil, bajo las Normas Internacionales de Información Financiera, teniendo en cuenta los grupos de presentación de información financiera: para el grupo 1 (NIIF plenas) y el grupo 2 (NIIF pymes).
        
        .row.mb-5
          .col-lg-6.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/temas/tema5/2.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .bg-color-8.p-5(data-aos="fade-left").h-100
              h5.mb-5 De acuerdo con la NIC 1 (CTCP, 2020):
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span A
                  | Presentarán información acerca de las bases para la preparación de los estados financieros, y sobre las políticas contables específicas utilizadas de acuerdo con los párrafos 117 a 124; 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B
                  | Revelarán la información requerida por las NIIF que no haya sido incluida en otro lugar de los estados financieros; y 
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span C
                  | Proporcionarán información que no se presente en ninguno de los estados financieros, pero que es relevante para entender cualquiera de ellos. 
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema5/3.svg", data-aos="zoom-in")
      .col-lg-6
        .bg-color-8.p-5(data-aos="fade-left").h-100
          h5.mb-5 La NIC 1 (CTCP, 2020), presenta ejemplos del orden de las notas teniendo en cuenta:
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span A
              | Dar importancia a las áreas de sus actividades que la entidad considera que son más relevantes para la comprensión de su rendimiento y situación financieros, tal como agrupar información sobre actividades operativas concretas;
            li.d-flex
              .lista-ol--cuadro__vineta
                span B
              | Agrupar información sobre partidas medidas de forma similar tal como activos medidos a valor razonable; o  
            li.d-flex
              .lista-ol--cuadro__vineta
                span C
              | Seguir el orden de las partidas del estado (estados) del resultado del periodo y otro resultado integral y del estado de situación financiera, tal como: 
          ul.ms-4.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Una declaración de cumplimiento con las NIIF (véase el párrafo 16); 
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Las políticas contables significativas aplicadas (véase el párrafo 117)); 
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Información de apoyo para las partidas presentadas en los estados de situación financiera, el estado (estados) del resultado del periodo y otro resultado integral, y en los estados de cambios en el patrimonio y de flujos de efectivo, en el orden en que se presenta cada estado y cada partida; y otra información a revelar, incluyendo:(1) pasivos contingentes (véase la NIC 37) y compromisos contractuales no reconocidos; y (2) revelaciones de información no financiera, por ejemplo los objetivos y políticas de gestión del riesgo financiero (véase la NIIF 7).
    
    p.mb-5 Teniendo en cuenta el desarrollo de las notas y revelaciones a los estados financieros, a continuación, se hace una descripción para su desarrollo: 

    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Nota 1: Entidad reportante
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema5/4.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5 Se realiza la descripción de la empresa que está presentando las notas a los estados financieros; teniendo en cuenta expresar:
        ul.ms-4.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Nombre del ente económico. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 NIT.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Domicilio. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Forma legal de constitución.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Responsabilidades tributarias y tarifas.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Descripción de la naturaleza de las operaciones comerciales, incluyendo el CIIU.  
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Productos y/o servicios.

    
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema5/5.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        div.bg-color-4.tarjeta.px-4.py-3.mb-5
          h4.mb-0 Nota 2: Declaración de las bases de elaboración de los estados financieros
        p.mb-5 Corresponde a la aplicación del marco normativo de NIIF, en la elaboración de los estados financieros. De igual forma se tiene en cuenta las bases de medición, aplicación de características fundamentales y de mejora.
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Nota 3. Principales políticas y prácticas contables

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema5/6.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Hace referencia a la implementación de las políticas contables teniendo en cuenta los criterios de reconocimiento, medición inicial y posterior, presentación y revelación de los elementos de los estados financieros de acuerdo con los estándares internacionales y políticas diseñadas previamente.
    
        .bg-color-29.p-5(data-aos="fade-left")
          p.mb-0 De igual manera, se revela la moneda de presentación de los estados financieros y la descripción de cada uno de los elementos, teniendo en cuenta la información de la empresa y su carácter de individual o grupal.
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Nota 4: Supuestos de incertidumbre en la estimación.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema5/7.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Denominadas anteriormente contingencias, como son pagos por largos períodos de servicios, demandas civiles, demandas laborales.
    
        .bg-color-29.p-5(data-aos="fade-left")
          p.mb-0 En la siguiente nota se inicia con las cuentas del activo, compuesto por el efectivo y sus equivalentes de efectivo, seguidamente se desagregan cada uno de los conceptos que hacen parte de activos, pasivos, patrimonio, ingresos y gastos, con el fin de brindar información comprensible y útil a los usuarios de la información financiera.
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Nota 5: Efectivo y equivalentes al efectivo
    
    p.mb-0 En esta nota se incluyen los conceptos de efectivo correspondientes al dinero en caja (general y menor) y los depósitos en cuentas bancarias, nacionales y/o extranjeras. 
    p.mb-5 Adicionalmente, incluye el efectivo y los equivalentes al efectivo, representados en inversiones menores a 90 días, como pueden ser los CDT, acciones, bonos.

    h5.mb-0 Ejemplo:
    p.mb-5 El siguiente es el detalle a 31 de diciembre de 20__ (presente año) Vs. 20_(año anterior) 

    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span Estado de resultado integral por naturaleza - comparativo anual
        figure.mb-5
          img(src="@/assets/curso/temas/tema5/8.svg", data-aos="zoom-in")
    
    p De acuerdo con el anterior ejemplo se realizará con cada uno de los elementos de los estados financieros.

    p.mb-5 Es necesario explorar las Normas Internacionales de Información Financiera para ampliar y fortalecer los conceptos y políticas establecidas para cada norma de acuerdo con el grupo de presentación de información financiera, a continuación, se encuentra el enlace de la NIC 1: 

    .row.justify-content-center
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Presentación de estados financieros.

        
        



</template>

<script>
export default {
  name: 'Tema5',
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
