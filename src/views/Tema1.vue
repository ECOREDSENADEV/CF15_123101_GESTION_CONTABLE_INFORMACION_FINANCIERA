<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estado de resultados integral
    
    p.mb-5 El estado de resultados es el primer estado a desarrollar por cuanto el producto resultante, hace parte del estado de situación financiera (antes balance general). Se encuentra integrado por las partidas de ingresos, costos y gastos, las cuales determinan la utilidad o pérdida neta del periodo y se registran de acuerdo con la estructura y políticas de la empresa.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        div.bg-color-9.p-4.tarjeta.mb-5
          p.mb-0 Cabe resaltar que también se representa gráficamente por medio de barras; si la barra está posicionada hacia arriba es utilidad, y si la barra está posicionada hacia abajo es pérdida, como se muestra a continuación:

        .row.mb-5.justify-content-center
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              span Estado de resultado con utilidad
            figure
              img(src="@/assets/curso/temas/tema1/1.svg", data-aos="zoom-in")
          .col-lg-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              span Estado de resultado con pérdida
            figure
              img(src="@/assets/curso/temas/tema1/2.svg", data-aos="zoom-in")
        
        p.mb-5 Los elementos del estado de resultados son: 

        .row.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-22.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema1/3.svg', alt='Texto que describa la imagen')

              h3.text-center Ingresos
              p  Son los incrementos en los beneficios económicos durante el periodo contable, susceptibles de aumentar el patrimonio.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-22.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')

              h3.text-center Costos y gastos
              p Decrementos de los beneficios económicos relativos con las salidas de dinero por las actividades de operación, los cuales se encuentran asociados con los ingresos.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Identificación 

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema1/5.svg", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") El estado de resultados pertenece al grupo de los estados financieros básicos. Representa información relevante, como el resultado de los ingresos y egresos de la empresa, acorde con las operaciones desarrolladas por la entidad del 1 de enero a 31 de diciembre de cada año. Las cuentas que se relacionan en este se denominan nominales o de resultado. 
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Después del cierre contable a 31 de diciembre del periodo analizado, se registra el resultado de las operaciones de ingresos y gastos como una utilidad y/o pérdida del ejercicio en el estado de situación financiera.
          
    p.mb-5 El estado de resultados se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información (CTCP, 2020):

    .row.justify-content-center
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')

          p Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.

      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')

          p Expresar si el estado financiero pertenece a una entidad individual o a un grupo.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')
          p Fecha del cierre del periodo sobre el que se informa.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')
          p Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
          p El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos.
    
    separador

    #t_1_2.titulo-segundo.color-sacento-contenido(data-aos="flip-up")
      h2 1.2 Periodo contable sobre el que se informa 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Acorde con las disposiciones contables y/o fiscales, el Estado de resultados integral se presenta cada mes de acuerdo con las políticas de la empresa y por lo menos una vez al año con corte a 31 de diciembre teniendo en cuenta el periodo contable de la empresa.
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3.	Principio del ente en marcha
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Denominado también como <b>hipótesis de empresa en funcionamiento</b>. Este es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa. Su intención en ningún momento es liquidar o recortar la escala de sus operaciones. Es importante recalcar que en Colombia desde el mismo momento que se registra una empresa en la cámara de comercio o en notaría se estipula cuándo inicia y cuándo termina sus actividades, en dado caso que se haya registrado una fecha de vigencia puede ser prorrogable en el tiempo (NIC/NIIF, 2020).

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4.	Aspectos generales
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/13.svg", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El Estado de resultados es muy importante en la organización teniendo en cuenta que refleja el resultado final en un periodo determinado. En la elaboración de este, se puede presentar utilidad o pérdida del ejercicio, una vez se hayan restado los costos y gastos de los ingresos generados por la empresa.
            p Por otro, para su elaboración se tiene en cuenta el cálculo del impuesto de renta y reservas obligatorias, de acuerdo con el tipo de empresa y el grupo de presentación de información financiera. 
        
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 Es importante tener en cuenta que los ingresos son producto de la venta o prestación del servicio. Los costos reflejan la inversión que realiza la empresa para comercializar y producir el bien o prestar el servicio y, finalmente, los gastos que contribuyen al buen funcionamiento de la empresa, los cuales pueden ser administrativos, de ventas y financieros (NIC/NIIF, 2020).
        separador

        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.5. Cuentas Otro Resultado Integral (ORI) 
        
        p.mb-5 En la sección 5 de la Norma NIIF para pymes (pequeñas y medianas empresas) del grupo 2 de presentación de información financiera, se hace énfasis en el reconocimiento de los tipos de otros resultados integrales (NIC/NIIF, 2020):

        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/temas/tema1/13.svg", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema1/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Algunas ganancias y pérdidas que surjan de la conversión de los estados financieros de un negocio en el extranjero (véase la Sección 30 Conversión de Moneda Extranjera).
            .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Algunas ganancias y pérdidas actuariales (véase la Sección 28 Beneficios a los Empleados).
            .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema1/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Algunos cambios en los valores razonables de los instrumentos de cobertura (véase la Sección 12 Otros Temas relacionados con los Instrumentos Financieros).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/17.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") De igual forma:
          //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0 Si una entidad no tiene partidas de otro resultado integral en ninguno de los periodos para los que se presentan estados financieros, puede presentar solo un estado de resultados o un estado del resultado integral en el que la última línea se denomine resultado (NIC/NIIF, 2020, p. 29).
              i.fas.fa-quote-right
          p Para profundizar sobre la temática, se recomienda explorar el siguiente enlace: 

          a.anexo.mb-4.mb-lg-0(href="https://www.nicniif.org/home/normas/niif-para-las-pymes.html" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web</b>. NIIF para las PYMES.
    
    p En la Norma Internacional de Contabilidad (NIC) 1, aplicable al grupo 1 (NIIF plenas) de presentación de información financiera, se determina que (CTCP, 2020):

    p.mb-5 Los componentes de otro resultado integral incluyen: 

    .tarjeta.bg-fondo-1.p-4.mb-5
      //- PasosB debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-acento-contenido.tarjeta--gris.p-4
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Cambios en el superávit de revaluación (véase la NIC 16 Propiedades, Planta y Equipo y la NIC 38 Activos Intangibles).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/18.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Nuevas mediciones de los planes de beneficios definidos (véase la NIC 19 Beneficios a los Empleados).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/19.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Ganancias y pérdidas producidas por la conversión de los estados financieros de un negocio en el extranjero (véase la NIC 21 Efectos de la Variación en las Tasas de Cambio de la Moneda Extranjera).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/20.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Las ganancias y pérdidas procedentes de inversiones en instrumentos de patrimonio designados a valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 5.7.5 de la NIIF 9 Instrumentos Financieros; (da) las ganancias y pérdidas sobre activos financieros medidos al valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 4.1.2A de la NIIF 9. 

          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/21.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p La parte efectiva de las ganancias y pérdidas de los instrumentos de cobertura en una cobertura de flujos de efectivo y las ganancias y pérdidas de los instrumentos de cobertura que cubren inversiones en instrumentos de patrimonio medidos a valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 5.7.5 de NIIF 9 (véase el Capítulo 6 de la NIIF 9).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/22.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Para pasivos particulares designados como a valor razonable con cambios en resultados, el importe del cambio en el valor razonable que sea atribuible a cambios en el riesgo de crédito del pasivo (véase el párrafo 5.7.7 de la NIIF 9).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/23.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Los cambios en el valor temporal de las opciones al separar el valor intrínseco y el valor temporal de un contrato de opción y la designación como el instrumento de cobertura solo de los cambios en el valor intrínseco (véase el Capítulo 6 de la NIIF 9)
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/24.svg', style="max-width: 90px", alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            p Los cambios en el valor de los elementos a término de contratos a término al separar el elemento a término y el elemento al contado de un contrato a término y la designación como el instrumento de cobertura solo de los cambios en el elemento al contado, y los cambios en el valor del diferencial de la tasa de cambio de la moneda extranjera de un instrumento financiero al excluirlo de la designación de ese instrumento financiero como el instrumento de cobertura (véase el Capítulo 6 de la NIIF 9).
          .col-md-auto
            figure
              img(src='@/assets/curso/temas/tema1/25.svg', style="max-width: 90px", alt='Texto que describa la imagen')
    

    separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6.	Estructura
        
    p.mb-5 Hace referencia al contenido y forma de presentación del estado de resultados integral. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Estructura del Estado de resultados Integral
      
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/26.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          p.mb-0 <b>+ Grupo 41</b> Ingresos operacionales (actividades ordinarias)
          p (-) Costos o gastos operativos.
          p.mb-0 <b>+ Grupo 42</b> Ingresos NO operacionales 
          p Gastos operacionales
          p <b>(-) Grupo 51</b> (administración) 
          p <b>(-) Grupo 52</b> (de ventas) 
          p <b>(-) Grupo 53</b> Gastos NO operacionales 
          p.mb-0 <b>(-) Otros gastos ___________________________________</b>
          p = Ganancia: 
          p <b>o</b>
          p <b>= Ganancias (pérdida)</b>
    
    p.mb-5 Según las Normas Internacionales de Información Financiera (NIIF), no se maneja el concepto de costo de venta o de producción, teniendo en cuenta que estos se relacionan entre los gastos. También, se registra el resultado en el grupo 59, reflejando utilidad o ganancias cuando los ingresos son mayores que los gastos (crédito) o pérdida cuando los ingresos son menores que los gastos (débito).

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/27.svg", data-aos="zoom-in")
      .col-lg-6
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5 De acuerdo con la NIC 1, el estado de resultados presenta las siguientes partidas (CTCP, 2020):
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Ingresos de actividades ordinarias.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Ganancias y pérdidas, resultados de la baja de cuentas de activos financieros medidos al costo amortizado.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Costos financieros.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Pérdidas por deterioro.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 participación en el resultado del periodo de las asociadas y negocios conjuntos que se contabilicen por el método de la participación.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Impuestos.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Resultado de ejercicio.
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/28.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        p Se invita a revisar los siguientes enlaces para ampliar los conceptos:
        a.anexo.mb-3(href="https://actualicese.com/diferencias-entre-el-estado-de-resultados-y-el-estado-de-resultado-integral-estandar-para-pymes/ " target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web</b>. Diferencias entre el estado de resultados y el estado del resultado integral: Estándar para Pymes.

        a.anexo.mb-4.mb-lg-0(href="https://www.gerencie.com/formas-de-presentacion-del-estado-de-resultados.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web</b>. Formas de presentación del estado de resultados. 
    
    separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7.	Forma de presentación
    
    p.mb-5 Está compuesto por el encabezado, cuerpo del informe y la parte jurídica, a saber:

    .row.mb-5.justify-content-center
      .col-md-10.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Encabezado").p-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 3
              span Encabezado
            figure.mb-5
              img(src="@/assets/curso/temas/tema1/29.png", data-aos="zoom-in")

            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Razón social (nombre de la empresa). 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Nombre del Informe (Estado de resultado integral) Individual (cuando hace referencia a una empresa sola).
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Consolidado: hace referencia a si son matriz filial o subsidiaria.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Fecha o período de presentación (se determina desde el 1 de enero de 20_ año) hasta el periodo que desee presentarlos (a 31 de enero a 28 de febrero, a 31 de marzo, o 30 de abril, o 31 de mayo, o 30 de junio, o 31 de julio o 31 de agosto, o 30 de septiembre, o 31 de octubre, o 30 de noviembre, o 31 de diciembre).
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Moneda funcional (expresado en $ colombianos o US$ o euros). 
          
          div(numero="2" titulo="Cuerpo del informe").p-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 4
              span Cuerpo del informe
            figure.mb-5
              img(src="@/assets/curso/temas/tema1/30.png", data-aos="zoom-in")
            
            p Seguidamente se presenta el cuerpo del informe, teniendo en cuenta la información que recopila el estado de resultado integral, compuestos por:

            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas de ingresos, las cuentas 41 y 42. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas de gastos, de la 51, 52 y 53.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 La ganancia (utilidad) del ejercicio, o 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 La ganancia o pérdida.  
            
            p Cabe resaltar que en cada cuenta se relaciona:

            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Nombre de los ítems.  
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Valores
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Sumas (valores).

          
          div(numero="3" titulo="Parte jurídica").p-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 5
              span Cuerpo del informe
            figure.mb-5
              img(src="@/assets/curso/temas/tema1/31.png", data-aos="zoom-in")
            
            p Dentro de las disposiciones legales vigentes aplicables a los estados financieros encontramos: 

            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Firma del Representante Legal. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Firma del Contador Público con número de la tarjeta profesional T.P - T (titulado) o A (aceptado); los últimos son personas que estudian y luego se presentan a la junta central de contadores para desarrollar un exámen (personas empíricas) y,
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Firma de Revisor Fiscal con número de tarjeta profesional, quien da fe pública de las cifras allí registradas en los Estados Financieros en este caso el Estado de Resultado Integral, emitiendo un dictamen. Acogiéndose a las normas colombianas: (Ley 222 de 1995, artículos 37 y 38 y Decreto 2649 de 1993, artículo 33).  
    
    p.mb-5  El Estado de resultados integral, se puede presentar por “naturaleza” o por “función”, acorde con la empresa y sus lineamientos, los cuales se relacionan a continuación: 

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Estado de resultados por naturaleza de los gastos
        
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema1/32.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0(data-aos="fade-left")
            p Según las NIIF (CTCP, 2020), es muy simple de aplicar, ya que no es necesaria la distribución de los gastos realizados en los registros (operaciones) en las diferentes funciones que se llevan a cabo en la empresa y son presentados de acuerdo con su naturaleza.

            p De acuerdo con lo descrito, en este tipo de presentación del Estado de resultado integral se revelan los registros contables que hacen parte de este. Así mismo, solo se reconocen gastos sin ser redistribuidos entre administrativos, ventas o financieros. Estos se presentan de acuerdo con su relevancia, relacionando: amortización, depreciación, compras de materiales, transporte, sueldos, etc.

            p Es de aclarar que en la ejecución de las transacciones o registros contables se discriminan como gastos administrativos, gastos de venta, gastos no operacionales, costos de venta, costos de producción, dado que, para los informes a nivel local (Colombia) se deben presentar discriminados. Sin embargo, bajo las Normas Internacionales de Información Financiera (NIIF), los informes se presentan sin códigos y todo corresponde a gastos (CTCP, 2020). 

        h5.mb-5 Estructura general del estado de resultados por naturaleza de los gastos
        .row.mb-5
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/estructura-general-estado.xls')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-xls.svg")
              .anexo__texto
                p <b>Anexo.</b> Estado de resultados por naturaleza de los gastos.
        
        .tarjeta.bg-color-24.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/33.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0 
                  h3.mb-1.bg-color-25 Estado de resultados por naturaleza de los gastos.
                  p.text-white En el siguiente anexo podrá ver la estructura general del estado de resultados por naturaleza de los gastos. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Parte jurídica      
    p En la presentación de esta sección, se tiene en cuenta la parte jurídica acorde con los lineamientos del Código de Comercio, asimismo con la Ley 222 de 1995, específicamente en los artículos 37 y 38. 
    h5.mb-5 Ejemplo:

    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span Estado de resultado integral por naturaleza - comparativo anual
        figure.mb-5
          img(src="@/assets/curso/temas/tema1/34.svg", data-aos="zoom-in")
 
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Estado de resultado integral por función de los gastos
    p.mb-5 De acuerdo con las Normas Internacionales de Información Financiera (NIIF), este método presenta de forma discriminada en el ámbito local (Colombia) los ingresos ordinarios, costos de venta y costos de administración. De igual forma, se presentan los ingresos financieros, los gastos financieros, las diferencias de cambio en moneda extranjera, revelando así los registros contables que hacen parte de este estado de resultado integral por función.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/35.svg", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Para esto se considera la dimensión jurídica acorde con los lineamientos del Código de Comercio (Congreso de la República de Colombia, 2020).proyecto.
        p(data-aos="fade-left") Para realizar el estado de resultados es importante haber surtido el proceso del ciclo contable, donde se tiene en cuenta: el registro de los hechos económicos con base a los soportes contables originados en la transacción, seguidamente el registro en los libros de contabilidad, el balance de comprobación, ajustes y, finalmente, el comprobante de cierre para empezar a elaborar los estados financieros.
        p(data-aos="fade-left") El primer estado que se debe elaborar es el estado de resultados, teniendo en cuenta los saldos presentados en las cuentas de ingresos, gastos y costos y la estructura elegida para su presentación. Al final se obtiene el resultado, que puede ser ganancia o pérdida.
    
    .tarjeta.bg-color-24.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/33.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0 
              h3.mb-1.bg-color-25 Estado de resultados por función de los gastos.
              p.text-white En el siguiente anexo podrá ver la estructura general del estado de resultados por función de los gastos.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador

    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.8.	Información a revelar
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema1/36.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En el evento que las partidas tanto de ingresos como de gastos tengan importancia relativa, su naturaleza y valor se revelarán por separado. 
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Las revelaciones separadas de los valores de ingresos y/o egresos, se expresan en las NIIF para pymes (NIC NIIF, 2020):
    
    p.mb-5 “Una entidad revelará por separado las siguientes partidas en el estado del resultado integral como distribuciones para el periodo:

    .row.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/37.svg', alt='Texto que describa la imagen')

          h3.text-center El resultado del periodo atribuible a:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 La participación no controladora.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Los propietarios de la controladora.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/38.svg', alt='Texto que describa la imagen')

          h3.text-center El resultado integral total del periodo atribuible a:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 La participación no controladora.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Los propietarios de la controladora. 
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 “Una entidad presentará un desglose de gastos, utilizando una clasificación basada en la naturaleza o en la función de los gastos dentro de la entidad, lo que proporcione una información que sea fiable y más relevante” (NIC NIIF, 2020).
            i.fas.fa-quote-right
    
    .row.justify-content-center
      .col-lg-10.bg-color-9.tarjeta.p-5
        ol.lista-ol--cuadro.mb-5
          li
            .lista-ol--cuadro__vineta
              span A
            span.text-bold Desglose por naturaleza de los gastos
            p.ms-4.mt-3 Según este método de clasificación, los gastos se agruparán en el estado del resultado integral de acuerdo con su naturaleza (por ejemplo, depreciación, compras de materiales, costos de transporte, beneficios a los empleados y costos de publicidad d) y no se redistribuirán entre las diferentes funciones dentro de la entidad (NIC NIIF, 2020).
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema1/39.svg", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span B
                span.text-bold Desglose por función de los gastos
                p.ms-4.mt-3 Según este método de clasificación, los gastos se agruparán de acuerdo con su función como parte del costo de las ventas o, por ejemplo, de los costos de actividades de distribución o administración. Como mínimo una entidad revelará, según este método, su costo de ventas de forma separada de otros gastos (NIC NIIF, 2020).
                p.ms-4 Una entidad revelará el importe del impuesto a las ganancias relativo a cada partida de otro resultado integral, incluyendo los ajustes por reclasificación, en el estado del resultado del periodo y otro resultado integral o en las notas (CTCP, 2020).
        
        h5.ms-4 De igual manera, las revelaciones que se presentarán de forma separada son (CTCP, 2020):

        ul.ms-4.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 La rebaja de los inventarios hasta su valor neto realizable, o de los elementos de propiedades, planta y equipo hasta su importe recuperable, así como la reversión de tales rebajas.
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 La reestructuración de las actividades de una entidad y la reversión de cualquier provisión para hacer frente a los costos de ella. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 La disposición de partidas de propiedades, planta y equipo. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Las disposiciones de inversiones. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Las operaciones discontinuadas. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Cancelaciones de pagos por litigios. 
          li.mb-0.d-flex
            i.fas.fa-check-circle.bg-color-14
            p.mb-0 Otras reversiones de provisiones.

        p.ms-4.mb-5 Para ampliar la información, se invita a revisar el siguiente libro en la biblioteca SENA: Estupiñán, R., y Sierra, A. (2017). Estados financieros básicos: bajo NIC /NIIF. Ecoe Ediciones.
        h5.ms-4.mb-5 Así mismo, revisar:

        .row
          .col-lg-8
            a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Norma Internacional de Contabilidad (NIC) 1.


        
          
          



        
    




         
    
        






 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
