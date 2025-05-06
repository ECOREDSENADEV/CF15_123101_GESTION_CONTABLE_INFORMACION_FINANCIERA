<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in")
            .col-lg-8.order-1
              .bloque-texto-a__texto.p-4
                p Los estados financieros de propósito general reflejan la situación financiera y el desempeño de la empresa en un periodo determinado, además de los flujos de efectivo; dichos estados son una herramienta administrativa que contribuye a la adecuada toma de decisiones.

        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
          .col-lg-7
            .bg-color-10.p-5(data-aos="fade-left")
              p.mb-5 Cabe resaltar que los elementos de los estados financieros son: activo, pasivo, patrimonio, ingresos y gastos. El conjunto de estos se encuentra integrado por:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-7
                  p.mb-0 Estado de situación financiera.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-7
                  p.mb-0 Estados de resultados integral.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-7
                  p.mb-0 Estado de cambio en el patrimonio.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-7
                  p.mb-0 Estado de flujos de efectivo.
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-7
                  p.mb-0 Notas a los estados financieros.
        
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p.mb-5(data-aos="fade-left") Los estados financieros se deben presentar por lo menos una vez al año, y en caso de requerirse en períodos intermedios, es importante informar el periodo en el cual se está desarrollando. Al respecto, y de acuerdo con el Consejo Técnico de la Contaduría Pública - CTCP- (2020) en la NIC 1:
            .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Una entidad presentará, como mínimo, dos estados de situación financiera, dos estados del resultado y otro resultado integral del periodo, dos estados del resultado del periodo separados (si los presenta), dos estados de flujos de efectivo y dos estados de cambios en el patrimonio, y notas relacionadas (p. 7). 
        div.bg-color-4.tarjeta.px-4.py-3.mb-5
          h4.mb-0 Características      
        p.mb-5 Para la elaboración y presentación de los estados financieros es importante tener en cuenta las siguientes características.

        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/4.svg", data-aos="zoom-in")
          .col-lg-7
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
              div(titulo="Presentación razonable")
                p.mb-0 Es la presentación fidedigna de los estados financieros, teniendo en cuenta los criterios establecidos en las NIIF.
              div(titulo="Negocio en marcha")
                p.mb-0 Indica que la empresa debe tener continuidad en el tiempo y, por ende, la contabilidad debe reflejar el flujo de sus operaciones.
              div(titulo="Base de acumulación")
                p.mb-0 Hace referencia al reconocimiento de los hechos económicos, los cuales se realizan en el momento que suceden.
              div(titulo="Importancia relativa")
                p.mb-0 También denominada materialidad, hace énfasis en el reconocimiento, o no, de un hecho económico. Puede tener un efecto significativo en el proceso contable y en la toma de decisiones.
              div(titulo="Compensación")
                p Una entidad no compensará activos con pasivos o ingresos con gastos a menos que así lo requiera o permita una NIIF.
              div(titulo="Información comparativa")
                p.mb-0 Se realiza el análisis con respecto al periodo anterior. Debe incluir tanto datos cuantitativos como información cualitativa. 
              div(titulo="Uniformidad")
                p Hace referencia a la aplicación de normas, políticas y principios en el reconocimiento de hechos económicos.

    p.mb-5 La Norma Internacional de Contabilidad (NIC) 1 Presentación de Estados Financieros (CTCP, 2020), indica lo siguiente:
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Objetivo
    
    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/intro/5.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-10.px-5.py-4
          p.mb-0(data-aos="fade-left") Esta norma establece las bases de la presentación de los estados financieros de propósito general, para asegurar que los mismos sean comparables, tanto con los estados financieros de la misma entidad correspondientes a periodos anteriores, como con los de otras entidades. Se establecen requerimientos generales con miras a la presentación de los estados financieros, guías para determinar su estructura y requisitos mínimos sobre su contenido. 

    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Alcance

    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/intro/6.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Una entidad aplicará esta norma al preparar y presentar estados financieros de propósito de información general conforme a las Normas Internacionales de Información Financiera (NIIF). 
        .bg-color-10.px-5.py-4
          p.mb-0(data-aos="fade-left") Es de anotar que en otras NIIF se establecen los requerimientos de reconocimiento, medición e información a revelar para transacciones y otros sucesos.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/7.svg", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Esta norma no es pertinente para la estructura y contenido de los estados financieros intermedios condensados que se elaboren de acuerdo con la NIC 34 Información Financiera Intermedia; sin embargo, los párrafos 15 a 35 se aplicarán a estos estados financieros. Esta NIC 1 se usará de la misma forma en todas las entidades, incluyendo las que presentan estados financieros consolidados de acuerdo con la NIIF 10 Estados Financieros Consolidados y las que presentan estados financieros separados, de acuerdo con la NIC 27 Estados Financieros Separados. 
            p(data-aos="fade-left") Además, dicha norma utiliza terminología propia de las entidades con ánimo de lucro, incluyendo las pertenecientes al sector público. Si las entidades con actividades sin fines de lucro del sector privado o del sector público aplican esta, podrían verse obligadas a modificar las descripciones utilizadas para partidas específicas de los estados financieros, e incluso para éstos. 
        .row.mb-5.align-items-center
          .col-lg-2.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/intro/8.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p.mb-0(data-aos="fade-left") Similarmente, las entidades que carecen de patrimonio, tal como se define en la NIC 32 Instrumentos Financieros: Presentación (por ejemplo, algunos fondos de inversión colectiva), y las entidades cuyo capital en acciones no es patrimonio (por ejemplo, algunas entidades cooperativas) podrían tener la necesidad de adaptar la presentación en los estados financieros de las participaciones de sus miembros o participantes.
      
        .bg-color-10.p-4
          p.mb-0 <b>Nota aclaratoria</b>: las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia, salvo donde se indique lo contrario.

        
          
      
        

</template>

<script>
export default {
  name: 'Introduccion',
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
