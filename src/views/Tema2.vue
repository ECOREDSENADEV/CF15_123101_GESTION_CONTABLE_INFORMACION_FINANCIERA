<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estado de situación financiera
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Es un estado que representa la situación financiera de la empresa a una fecha determinada con el propósito de poder indicar el grado de liquidez, solvencia y rentabilidad de esta.
        
            .bg-color-1.p-4.tarjeta(data-aos="fade-left")
              p Para la presentación del estado de situación financiera es importante tener en cuenta la ecuación contable, la cual se expresa de la siguiente manera:
              p.mb-0.bg-color-26.text-bold.p-4.tarjeta.text-white Activo = Pasivo + Patrimonio 
        
        P En el activo se revelará de qué manera se ha invertido los fondos de la empresa, obtenidos de sus acreedores (pasivos) y de sus asociados (socios), correspondiente al denominado capital o patrimonio.

        separador

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1.	Identificación
        
        p.mb-5 El estado de situación financiera se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual reflejará la siguiente información según CTCP (2020):

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
                        img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')

                  p Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.

              .col-sm-6.col-lg-4.mb-4 
                //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta--boton.bg-color-10.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-5
                      figure
                        img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')

                  p Expresar si el estado financiero pertenece a una entidad individual o a un grupo.
              .col-sm-6.col-lg-4.mb-4 
                //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta--boton.bg-color-10.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-5
                      figure
                        img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
                  p Fecha del cierre del periodo sobre el que se informa.
              .col-sm-6.col-lg-4.mb-4 
                //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta--boton.bg-color-10.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-5
                      figure
                        img(src='@/assets/curso/temas/tema2/5.svg', alt='Texto que describa la imagen')
                  p Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.
              .col-sm-6.col-lg-4.mb-4 
                //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
                //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
                //- estas clases tambien tienen un modificador --borde
                .tarjeta--boton.bg-color-10.p-4.h-100
                  .row.justify-content-center.mb-3
                    .col-5
                      figure
                        img(src='@/assets/curso/temas/tema2/6.svg', alt='Texto que describa la imagen')
                  p El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos. (Norma Internacional de Contabilidad (NIC) 1).
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2.	Período contable sobre el que se informa

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se presenta mensual, bimestral, trimestral, semestral y, como mínimo, anual de acuerdo con los requerimientos de la empresa, las políticas implementadas y los entes de control. 

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3.	Principio del ente en marcha
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 También denominado hipótesis de empresa en funcionamiento, es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa y su intención en ningún momento es liquidar o recortar la escala de sus operaciones. En Colombia desde el mismo momento que se registra una empresa en la Cámara de Comercio o en notaría se estipula cuándo inicia y cuándo termina sus actividades.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4.	Distinción entre corriente y no corriente
    
    p.mb-5 La entidad presentará la información corriente o no corriente, determinado por el periodo sujeto a verificación y análisis.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/9.svg", data-aos="zoom-in")
      .col-lg-6
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Según la NIC 1 Activos corrientes, una entidad clasificará un activo como corriente cuando:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Espera realizar el activo, o tiene la intención de venderlo o consumirlo en su ciclo normal de operación.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Mantiene el activo principalmente con fines de negociación.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Espera realizar el activo dentro de los doce meses siguientes al periodo sobre el que se informa.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 El activo es efectivo o equivalente al efectivo (como se define en la NIC 7), a menos que este se encuentre restringido y no pueda ser intercambiado ni utilizado para cancelar un pasivo por un ejercicio mínimo de doce meses después del ejercicio sobre el que se informa. Una entidad clasificará todos los demás activos como no corrientes (CTCP, 2020).
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/10.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 En la NIC 1, se presentan las características de los pasivos corrientes considerando que: 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Espera liquidar el pasivo en su ciclo normal de operación; 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Mantiene el pasivo principalmente con fines de negociación; 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 El pasivo debe liquidarse dentro de los doce meses siguientes a la fecha del periodo sobre el que se informa; o 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 No tiene un derecho incondicional para aplazar la cancelación del pasivo durante, al menos, los doce meses siguientes a la fecha del periodo sobre el que se informa (véase el párrafo 73). Las condiciones de un pasivo que puedan dar lugar, a elección de la otra parte, a su liquidación mediante la emisión de instrumentos de patrimonio, no afectan a su clasificación. Una entidad clasificará todos los demás pasivos como no corrientes (CTCP, 2020):
    
    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5.	Cuentas del Estado de situación financiera

    .row.mb-5.justify-content-center
      .col-md-10.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Activo").p-4
            p Es un recurso controlado por la empresa como resultado de sucesos pasados, del que la empresa espera obtener, en el futuro, beneficios económicos (CTCP, 2020).
            h5 Está determinado por las siguientes cuentas (CTCP, 2020):
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Efectivo y equivalentes al efectivo. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas comerciales por cobrar y otras cuentas no corrientes.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas comerciales por cobrar y otras.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas por cobrar corrientes. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Inventarios corrientes.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Inventarios corrientes que surgen de actividades de extracción.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Activos financieros no corrientes al valor razonable con cambios en resultados.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Anticipos corrientes.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Inversiones contabilizadas utilizando el método de la participación. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Propiedades, planta y equipo.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Método de depreciación, propiedades, planta y equipo. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Información para revelar sobre deterioro de valor de activos. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Gastos diferidos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Intangibles. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Activos intangibles distintos de la plusvalía.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Activos biológicos no corrientes.   
          
          div(numero="2" titulo="Pasivos ").p-4
            p Es una obligación presente de la entidad surgida a raíz de sucesos pasados al vencimiento de la cual, para cancelarla, la entidad espera desprenderse de recursos que incorporen beneficios económicos. Se encuentran (CTCP, 2020):
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Obligaciones financieras.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Proveedores. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Cuentas comerciales por pagar y otras cuentas por pagar no corrientes. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Provisiones. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Información que revelar sobre beneficios a los empleados. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Información que revelar sobre derechos de reembolso. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 La determinación de los pagos.  
          
          
          div(numero="3" titulo="Patrimonio").p-4
            p Es la parte residual de los activos de la entidad, una vez deducidos todos los pasivos. Las principales cuentas son (CTCP, 2020):
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Capital.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Capital emitido..
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Reserva de capital. 
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Ganancias acumuladas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Otro resultado integral acumulado.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-14
                p.mb-0 Participaciones no controladoras.

    separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6.	Estructura
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hace referencia al contenido del estado financiero teniendo en cuenta las directrices de elaboración, este se presenta por liquidez o solvencia, el cual se explicará a continuación en la forma de presentación y se diferenciará.
    
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7.	Forma de presentación
  
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/12.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Lo determina el encabezado, cuerpo del informe y la parte jurídica de la siguiente manera:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Encabezado
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Razón social (nombre de la empresa).
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Nombre del Informe (Estado de situación financiera). Individual (cuando hace referencia a una empresa sola) o Consolidado (hace referencia cuando son matriz filial o subsidiaria).
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Fecha o período de presentación (se determina desde enero de 20__(año), febrero de 20__(año), marzo de 20__(año), abril de 20__(año), mayo de 20__(año), junio de 20__(año), julio de 20__(año), agosto de 20__(año), septiembre de 20__(año), octubre de 20__(año), noviembre de 20__(año), o diciembre de 20__(año)). 
    
    p.mb-5 Luego se relaciona el cuerpo del informe con las cuentas que lo componen: 
    
    .row.mb-5
      .col-lg-4
        div.bg-color-27.p-3
          h5.text-center.mb-0 Cuentas del activo 
        div.bg-color-9.p-3
          ol.lista-ol
            li.d-flex 
              span.text-bold 1.1 
              | Efectivo y equivalentes al efectivo. 
            li.d-flex 
              span.text-bold 1.2
              | Activos financieros. 
            li.d-flex 
              span.text-bold 1.3 
              | Cuentas comerciales por cobrar. 
            li.d-flex 
              span.text-bold 1.4 
              | Inventarios. 
            li.d-flex 
              span.text-bold 1.5 
              | Propiedades, planta y equipo.
            li.d-flex 
              span.text-bold 1.6
              | Activos intangibles y plusvalía (crédito mercantil).
            li.d-flex 
              span.text-bold 1.7 
              | Activos por impuestos corrientes. 
            li.d-flex 
              span.text-bold 1.8 
              | Propiedades de inversión.
            li.d-flex 
              span.text-bold 1.9 
              | Propiedades de inversión. 
      .col-lg-4
        div.bg-color-27.p-3
          h5.text-center.mb-0 Cuentas del pasivo  
        div.bg-color-9.p-3
          ol.lista-ol
            li.d-flex 
              span.text-bold 2.1 
              | Obligaciones financieras e instrumentos derivados. 
            li.d-flex 
              span.text-bold 2.2
              | Cuentas comerciales por pagar y cuentas por pagar.  
            li.d-flex 
              span.text-bold 2.3 
              | Pasivos por impuestos corrientes. 
            li.d-flex 
              span.text-bold 2.4 
              | Obligaciones laborales y de seguridad social.
            li.d-flex 
              span.text-bold 2.5 
              | Provisiones.
            li.d-flex 
              span.text-bold 2.6
              | Ingresos diferidos.
            li.d-flex 
              span.text-bold 2.7 
              | Pasivos incluidos en grupos de activos para su disposición clasificados como mantenidos para la venta. 
            li.d-flex 
              span.text-bold 2.8 
              | Otros pasivos.
      .col-lg-4
        div.bg-color-27.p-3
          h5.text-center.mb-0 Cuentas del patrimonio  
        div.bg-color-9.p-3
          ol.lista-ol
            li.d-flex 
              span.text-bold 3.1 
              | Capital social.
            li.d-flex 
              span.text-bold 3.2
              | Superávit de capital. 
            li.d-flex 
              span.text-bold 3.3 
              | Reservas. 
            li.d-flex 
              span.text-bold 3.4 
              | Dividendos y participaciones.
            li.d-flex 
              span.text-bold 3.5 
              | Resultados del ejercicio.
            li.d-flex 
              span.text-bold 3.6
              | Resultado del ejercicio anteriores.
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Aspectos jurídicos
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/13.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 Dentro de las disposiciones legales aplicables a los Estados financieros se encuentran: 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Firma del Representante Legal.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Firma del Contador Público con número de la tarjeta profesional TP N°.__ T (titulado) o A (aceptado) son personas que estudian y luego se presentan a la junta central contadores para desarrollar un examen (son para personas empíricas).
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Firma de Revisor Fiscal con número de tarjeta profesional, quien da fe pública de las cifras allí registradas en los Estados Financieros en este caso el Estado de Resultado Integral, emitiendo un dictamen. Acogiéndose a las normas colombianas: Ley 222 de 1995, artículos 37 y 38 y el Decreto 2649 de 1993, artículo 33. 
    
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Formas de presentación
    
    p.mb-5 El Estado de situación financiera se puede presentar por “liquidez” o “solvencia”. Se detallarán a continuación (Pymes y Autónomos, 2020): 

    .row.justify-content-center.mb-3
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/14.svg', alt='Texto que describa la imagen')

          h3.text-center Por liquidez
          p  Es una cualidad que tienen los activos que figuran en el estado de situación financiera de un ente económico para convertirse en dinero de forma fácil. El estado se presenta de la siguiente forma:

      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema2/15.svg', alt='Texto que describa la imagen')

          h3.text-center Por solvencia
          p La solvencia es la capacidad de un individuo o empresa para atender sus compromisos de pago con los acreedores, es decir, sus deudas.
          h5 Se identifica de la siguiente manera:
        
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xls.svg")
            .anexo__texto
              p <b>Anexo.</b> Estado de resultados por naturaleza de los gastos.
    
    .row.mb-5.justify-content-center
      .col-lg-10  
        div.bg-color-12.p-4
          h5 No olvidar que…
          p.mb-0 La estructura por liquidez es igual a las normas colombianas anteriores en relación con el Decreto 2649 de 1993 (NIIF, 2020), y se evidencia al compararlo con el de solvencia.
    
    p.mb-5 Una vez realizado el estado de resultados, se procede a elaborar el estado de situación financiera, teniendo en cuenta registrar los saldos obtenidos en las cuentas de activo, pasivo y patrimonio. También, se traslada el valor del impuesto, reservas, utilidad o pérdida determinada en el estado de resultados.

    .row.justify-content-center
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Estado de resultados por naturaleza de los gastos.
    
    separador

    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.8.	Información a revelar
  
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/16.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left")
          h5.mb-3 De acuerdo con la clasificación y relevancia la empresa revelará la siguiente información en el estado de situación financiera o en las notas:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Los conceptos de propiedades, planta y equipo de forma discriminada teniendo en cuenta la NIC 16.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Las cuentas deudoras de acuerdo con su naturaleza.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 La clasificación de los inventarios según la NIC 2.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Las provisiones, teniendo en cuenta separar los beneficios a empleado de los demás.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 El capital, reservas y primas de emisión (NIC1 .78). 
    


        
        

</template>

<script>
export default {
  name: 'Tema2',
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
