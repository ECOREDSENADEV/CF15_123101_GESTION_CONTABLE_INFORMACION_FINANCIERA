<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estado de flujos de efectivo
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5.justify-content-center
          .col-lg-12 
            div.bg-color-9.p-4.tarjeta
              p.mb-0 Es el estado financiero básico que muestra cómo se genera el efectivo utilizado en las actividades de operación, inversión y financiación. Este informe debe proporcionar información sobre la capacidad de la empresa para generar el efectivo y/o equivalentes al efectivo.
        
        p.mb-5 De acuerdo con la NIC 7 (CTCP, 2020), se establece lo siguiente: 

        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema4/1.svg", data-aos="zoom-in")
          .col-lg-7
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
              div(titulo="Objetivo")
                p.mb-0 La información acerca de los flujos de efectivo de una entidad es útil porque suministra a los usuarios de los estados financieros las bases para evaluar la capacidad que tiene la entidad para generar efectivo y equivalentes al efectivo, así como las necesidades que esta tiene de utilizar dichos flujos de efectivo. Para tomar decisiones económicas, los usuarios deben evaluar la capacidad que la entidad tiene de generar efectivo y equivalentes al efectivo, así como las fechas en que se producen y el grado de certidumbre relativa de su aparición. El objetivo de esta Norma es requerir el suministro de información sobre los cambios históricos en el efectivo y equivalentes al efectivo de una entidad mediante un estado de flujos de efectivo en el que los flujos de fondos del período se clasifiquen según si proceden de actividades de operación, de inversión o de financiación. 
              div(titulo="Alcance")
                .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema4/17.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 Una entidad prepara un estado de flujos de efectivo, de acuerdo con los requerimientos de esta Norma, y lo presentará como parte integrante de sus estados financieros para cada periodo en que sea obligatoria la presentación de éstos.
                .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema4/18.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 Esta Norma sustituye a la antigua NIC 7 Estado de Cambios en la Posición Financiera, aprobada en julio de 1977.  
                .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema4/19.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 Los usuarios de los estados financieros están interesados en saber cómo la entidad genera y utiliza el efectivo y los equivalentes al efectivo. Esta necesidad es independiente de la naturaleza de las actividades de la entidad, incluso cuando el efectivo pueda ser considerado como el producto de la entidad en cuestión, como puede ser el caso de las entidades financieras. Básicamente, las entidades necesitan efectivo por las mismas razones, por muy diferentes que sean las actividades que constituyen su principal fuente de ingresos. En efecto, todas ellas necesitan efectivo para llevar a cabo sus operaciones, pagar sus obligaciones y suministrar rendimientos a sus inversores. Por consiguiente, esta Norma requiere que todas las entidades presenten un estado de flujos de efectivo.
    
    .tarjeta.bg-color-24.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/20.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0 
              h3.mb-1.bg-color-25 Estado de Flujos de Efectivo.
              p.text-white Es importante profundizar la norma, por tanto, se invita a explorar el siguiente enlace de la NIC 7: 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1.	Identificación

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/2.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-23.p-5(data-aos="fade-left").h-100
          h5.mb-5 El estado de flujos de efectivo se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información (CTCP, 2020):
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Expresar si el estado financiero pertenece a una entidad individual o a un grupo. 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Fecha del cierre del periodo sobre el que se informa.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos.
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Flujos de efectivo en moneda extranjera
    p.mb-5 Para la presentación del flujo de efectivo en moneda extranjera es importante tener en cuenta las directrices establecidas en la NIC 7 (CTCP, 2020):

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-3
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-22.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema4/3.svg', alt='Texto que describa la imagen')

              p  25. Los flujos de efectivo procedentes de transacciones en moneda extranjera se convertirán a la moneda funcional de la entidad aplicando al importe en moneda extranjera la tasa de cambio entre ambas monedas en la fecha en que se produjo cada flujo en cuestión. 

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-22.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema4/4.svg', alt='Texto que describa la imagen')
              p 26. Los flujos de efectivo de una subsidiaria extranjera se convertirán utilizando la tasa de cambio entre la moneda funcional y la moneda extranjera, en la fecha en que se produjo cada flujo en cuestión. 
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-22.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/temas/tema4/5.svg', alt='Texto que describa la imagen')

              p 27. Los flujos de efectivo en moneda extranjera se presentarán de acuerdo con la NIC 21 Efectos de las Variaciones en las Tasas de Cambio de la Moneda Extranjera.
    
        separador

        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2.	Período contable sobre el que se informa
        
        p El estado de flujos de efectivo se presenta de acuerdo con los requerimientos normativos en el periodo contable previsto, donde se incorporan las actividades de inversión, de financiación y de operación. 

        separador

        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.3.	Elementos para elaborar el flujo de efectivo
        
        p Para realizar el estado de flujos de efectivo, es importante identificar claramente los elementos con el fin de proceder con su correcta clasificación y, posteriormente, elaboración. Las actividades que se presentan son (CTCP, 2020):

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema4/6.svg", data-aos="zoom-in")
      .col-lg-8
        .row.mb-5.justify-content-center
          .col-md-10.mb-5.mb-md-0
            //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Actividades de operación") Son las actividades relacionadas con el objeto social de la empresa, resultado de las actividades operacionales de activos y pasivos corrientes, excepto obligaciones financieras.
              p(numero="2" titulo="Actividades de inversión") Son los cambios presentados en los activos no corrientes, relacionados con inversiones permanentes y propiedades, planta y equipo.
              p(numero="3" titulo="Actividades de financiación") Son las variaciones presentadas en el capital y obligaciones financieras.
    
    .row.justify-content-center
      .col-lg-10  
        div.bg-color-9.p-5.tarjeta
          p.mb-0 Es importante considerar que, para iniciar el proceso de elaboración, se requieren dos estados de situación financiera de periodos consecutivos y un estado de resultados, con el fin de determinar las entradas y salidas de efectivo.
    
    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4.	Métodos de presentación
    
    p.mb-5 En la elaboración y presentación del estado de flujos de efectivo se tienen en cuenta los siguientes métodos (CTCP, 2020):

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Método directo
    
    p.mb-5 Este presenta de forma separada las entradas y salidas de efectivo, teniendo en cuenta la clasificación de las actividades de operación, de inversión y financiación. En este estado se rehace el estado de resultados utilizando el método de caja para determinar las entradas y salidas de las actividades de operación. 

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema4/7.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 Por ejemplo: se inicia con el estado de resultados donde se identifican los ingresos ordinarios. Luego, se procede a revisar el estado de situación financiera para relacionarlo con la cuenta que determina la entrada de efectivo por concepto de dichos ingresos, en este caso, la cuenta clientes (cuentas por cobrar). El objetivo es determinar el efectivo generado por este concepto, al finalizar la unidad temática observe el ejemplo para realizar el cálculo de las actividades. Está compuesto por las siguientes actividades:
          
    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Actividades de operación
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/8.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-23.px-5.py-4(data-aos="fade-left").h-100
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Efectivo cobrado a los clientes.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Efectivo recibido por intereses, dividendos y sobre inversiones.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Otros cobros de operación operacional o no operacional.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Efectivo pagado tanto a empleados como a proveedores.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Pagos por impuestos corrientes y/o no corrientes.

    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Actividades de inversión
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema4/9.svg", data-aos="zoom-in")
      .col-lg-7
        .bg-color-23.px-5.py-4(data-aos="fade-left").h-100
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Flujos de efectivo procedentes de la pérdida de control de subsidiarias y otros negocios. 
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Importes procedentes de la venta de propiedades, planta y equipo.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Compra de propiedades planta y equipo.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Compra de activos intangibles.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Importes procedentes de subvenciones del Gobierno.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Anticipos de efectivo y préstamos concedidos a terceros.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Intereses pagados.
            li.d-flex.mb-0
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Intereses recibidos.

    div.bg-color-4.tarjeta.px-4.py-3.mb-5
      h4.mb-0 Actividades de financiación.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/10.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-23.px-5.py-4(data-aos="fade-left").h-100
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Importes procedentes de la emisión de acciones.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 cobros procedentes de la emisión de obligaciones sin garantía, préstamos, bonos, cédulas hipotecarias y otros fondos tomados en préstamo, ya sea a largo o a corto plazo.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Pagos por adquirir o rescatar las acciones de la entidad.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Reembolsos de préstamos. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Método indirecto 
    
    p.mb-5 Es una conciliación entre las ganancias acumuladas y el flujo efectivo de las actividades de operación, inversión y financiación. 

    .row
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema4/11.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 Tienen la misma composición que el método directo solo que se empieza con la ganancia acumulada, teniendo en cuenta las partidas no monetarias como depreciaciones, amortizaciones y reservas. Este cambio se genera solamente en las actividades de operación, lo que compete a las actividades de inversión y financiación permanecen igual al método anterior (CTCP, 2020).
    
    separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5.	Estructura

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/12.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-23.px-5.py-4(data-aos="fade-left").h-100
          h5.mb-5 Recuerde que en los dos métodos se tienen en cuenta los siguientes numerales:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Actividades de operación.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Actividades de inversión.
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Actividades de financiación. 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo Año Anterior (de caja, caja menor, bancos, corporaciones de ahorro e inversiones temporales que son los CDT del año anterior). 
            li.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Saldo Presente Año (de caja, caja menor, bancos, corporaciones de ahorro e inversiones temporales que son los CDT del presente año). 
    
    p.mb-5 A continuación, observa la estructura de cada uno de los métodos analizados anteriormente:

    .row
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p <b>Anexo.</b> Estado de flujos de efectivo - Método directo e indirecto.
    
    h5 Ejemplo
    p.mb-5 Con el fin de comprender la anterior información, se presenta un ejemplo práctico con la cuenta de ingresos y clientes. 

    h3 Procedimiento
    .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/temas/tema4/17.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 En los estados financieros se presenta la siguiente información de las actividades de operación:

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            caption Leyenda de la tabla
            thead.bg-color-27
              tr
                th Actividades de operación
                th 
            tbody
              tr
                td Recaudo de clientes
                td  $10.000.000
              tr
                td (-) Pagos laborales
                td  $2.000.000
              tr
                td (-) Pago proveedores
                td  $3.000.000
              tr
                td (-) Pago gastos
                td  $1.000.000
              tr
                td (-) Pago costos
                td  $1.500.000
              tr
                td (-) Pago impuestos
                td  $500.000
              tr
                td (-) Pago gastos financieros
                td  $500.000
              tr
                td Efectivo generado en actividades de operación
                td $1.500.000
    
    p.mb-5 Para calcular el recaudo de cliente se tiene en cuenta la información de los estados financieros:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0.me-0
        figure
          img(src="@/assets/curso/temas/tema4/13.svg", data-aos="zoom-in")
      .col-lg-5.ms-0
        .bg-color-12.px-5.py-4(data-aos="fade-left").h-100
          h5.mb-0 Estado de resultados
          p Ingresos ordinarios: $12.000.000
          h5.mb-0 Estado de situación Financiera
          p.mb-0 Saldo final año 1 clientes: $5.000.000
          p.mb-0 Saldo final año 2 clientes: $7.000.000 
    
    p.mb-5 Para calcular el efectivo recaudado de los clientes, resultados de las ventas generadas (ingresos ordinarios) se realiza el siguiente proceso:

    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/14.svg', alt='Texto que describa la imagen')

          p.text-center Se registra el valor de los ingresos.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/15.svg', alt='Texto que describa la imagen')
          p.text-center Se suman el valor de clientes del año 1. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-9.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema4/16.svg', alt='Texto que describa la imagen')

          p.text-center Se resta el valor de clientes del año 2.

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            thead.bg-color-27
              tr
                th Efectivo Recaudado Clientes
                th 
            tbody
              tr
                td Ingresos ordinarios
                td $12.000.000
              tr
                td + Saldo clientes año 1
                td  $ 5.000.000
              tr
                td - Saldo clientes año 2
                td  $ 7.000.000
              tr
                td Total recaudo de clientes 
                td  $10.000.000
    

    .row.justify-content-center.mb-5
      .col-lg-10  
        div.bg-color-9.p-4.tarjeta
          p.mb-0 El proceso anterior aplica para las actividades de operación por el método directo. Por tanto, se debe verificar la información suministrada en los estados financieros y determinar las respectivas variaciones de cada una de las cuentas presentadas.
    
    .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/temas/tema4/18.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Para calcular las actividades de inversión se presenta la siguiente información:
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            thead.bg-color-27
              tr
                th Actividades de inversión
                th 
            tbody
              tr
                td Efectivo recibido por venta de inversiones
                td  $7.000.000
              tr
                td + Efectivo recibido por venta de vehículo 
                td   $2.000.000
              tr
                td (-) Pago compra equipo de oficina
                td   $8.000.000
              tr
                td (-) Pago compra de maquinaria
                td  $1.000.000
              tr
                td Efectivo generado en actividades de inversión
                td  $0

    .row.justify-content-center.mb-5
      .col-lg-10  
        div.bg-color-9.p-4.tarjeta
          p.mb-0 Los valores relacionados anteriormente se obtienen de la diferencia entre al año 1 y 2 del estado de situación financiera y las notas, donde se observa los conceptos que implican entradas y salidas de dinero por concepto de inversiones.
    
    .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/temas/tema4/19.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Luego, se determinan las variaciones de las actividades de financiación, relacionadas con el capital y obligaciones financieras. Para ello, se presenta la siguiente información:
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            thead.bg-color-27
              tr
                th Actividades de financiación
                th 
            tbody
              tr
                td Emisión de acciones
                td  $5.000.000
              tr
                td + Efectivo recibido por venta de bonos
                td  $3.000.000
              tr
                td (-) Pago de obligaciones financieras
                td   $6.000.000
              tr
                td (-) Pago de participaciones
                td   $2.500.000
              tr
                td Efectivo generado en actividades de financiación
                td.bg-color-20  $500.000

    .row.justify-content-center.mb-5
      .col-lg-10  
        div.bg-color-9.p-4.tarjeta
          p.mb-0 Para calcular los saldos anteriores, se revisaron los estados financieros y las notas, con el fin de determinar los aumentos y disminuciones de las cuentas involucradas en las actividades de financiación.

    .bg-color-10.tarjeta.p-4.mb-3(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img(src="@/assets/curso/temas/tema4/21.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 Para comprobar que el estado de flujos de efectivo se haya realizado correctamente es importante revisar el efectivo y los equivalentes de efectivo de los dos años, con el fin de constatar con el efectivo generado en el estado de flujos de efectivo.
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-b.color-acento-contenido
          table
            thead.bg-color-27
              tr
                th Actividades de financiación
                th 
            tbody
              tr
                td Efectivo generado en actividades de operación
                td $1.500.000
              tr
                td Efectivo generado en actividades de inversión
                td  $0
              tr
                td Efectivo generado en actividades de financiación
                td.bg-color-20 $500.000
              tr
                td Flujo total de efectivo.
                td   $1.000.000
              

    .row.justify-content-center.mb-5
      .col-lg-10  
        div.bg-color-9.p-4.tarjeta
          p.mb-0 A continuación, observa un ejemplo por el método directo, donde se presenta la estructura y variaciones de las actividades de operación, inversión y financiación.
          
</template>

<script>
export default {
  name: 'Tema4',
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
