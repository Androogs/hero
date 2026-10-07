import { SITIO, waLink } from '../data/sitio.js'
import { MOTOS } from '../data/motos.js'
import PageHero from '../components/PageHero.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp, IconPhone, IconMail, IconPin } from '../components/Icons.jsx'

export default function Contacto() {
  const canales = [
    { i: <IconWhatsApp />, t: 'WhatsApp', v: 'Escríbenos ahora', href: waLink('Hola, necesito información.') },
    { i: <IconPhone />, t: 'Teléfono', v: SITIO.telefono, href: `tel:${SITIO.telefonoLink}` },
    { i: <IconMail />, t: 'Correo', v: SITIO.email, href: `mailto:${SITIO.email}` },
    { i: <IconPin />, t: 'Visítanos', v: SITIO.ciudad, href: '/concesionario' },
  ]
  return (
    <>
      <PageHero kicker="Hablemos" title="Contacto" crumbs={[{ label: 'Contacto' }]}>
        <p>¿Tienes dudas sobre un modelo, tu crédito o tu mantenimiento? Estamos para ayudarte.</p>
      </PageHero>
      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__channels">
            {canales.map((c) => (
              <a key={c.t} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="channel">
                <span className="channel__icon">{c.i}</span>
                <span><small>{c.t}</small><b>{c.v}</b></span>
              </a>
            ))}
          </div>
          <div className="contact__form">
            <LeadForm
              titulo="Envíanos tu mensaje"
              asunto="Contacto web – Hero Palmira"
              fields={[
                { name: 'nombre', label: 'Nombre completo', required: true },
                { name: 'celular', label: 'Celular', type: 'tel', required: true },
                { name: 'email', label: 'Correo', type: 'email' },
                { name: 'interes', label: 'Me interesa', type: 'select', options: ['Comprar una moto', 'Financiación', 'Taller / mantenimiento', 'Repuestos', 'Otro'] },
                { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => m.nombre).concat('Aún no sé'), full: true },
                { name: 'mensaje', label: 'Mensaje', type: 'textarea', full: true },
              ]}
            />
          </div>
        </div>

        <div className="container" id="datos">
          <details className="legal">
            <summary>Política de tratamiento de datos personales</summary>
            <p>
              {SITIO.empresa} trata los datos personales suministrados en este sitio con la finalidad de atender solicitudes de cotización,
              financiación, servicio posventa y contacto comercial, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
              El titular puede conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiendo a {SITIO.email}.
            </p>
            <p><b>FORMATO AUTORIZACIÓN BASE DE DATOS

Los datos personales que nos ofrece, serán incluidos en una base de datos propiedad de SUMOTO S.A., cuya finalidad es informarle acerca de los eventos y actividades que puedan resultar de su interés.

SUMOTO S.A. garantiza el ejercicio de los derechos de acceso, rectificación, cancelación y oposición de los datos facilitados. Si desea cambiar o eliminar sus datos, puede hacerlo mediante comunicación escrita, dirigida a los puntos de información o a la oficina de Administración.

SUMOTO S.A., por razones comerciales, podrá ceder o comunicar los datos suministrados por el usuario, única y exclusivamente para aliados estratégicos, con la finalidad que estas compañías puedan hacerle llegar ofertas y mensajes publicitarios por cualquier medio, incluyendo correos electrónicos, referente a los productos y servicios que cada una de estas compañías ofrecen en el sector en el que operan.

El usuario acepta las condiciones anteriores, se declara enterado de ellas y en consecuencia, autoriza el uso de la información suministrada. Todo dando cumplimiento a la Ley 1581 de 2012 Protección de Datos Personales.

 

AVISO DE PRIVACIDAD

Para SUMOTO S.A., es de gran importancia la Protección y seguridad de sus Datos Personales, los que serán exclusivamente utilizados para los fines del objeto social

de nuestra empresa.

Responsabilidades: Es usted Señor Usuario responsable de la información suministrada aquí, debiendo ser veraz, completa, exacta, actualizada, comprobable y comprensible, que no induzca a error, por ser suministrados sin ninguna garantía SUMOTO S.A., no asume ninguna responsabilidad por cualquier error u omisión en la información que allí ingrese.

Los derechos que le asisten a Usted, por ser el titular de la información son los siguientes: Conocer, actualizar y rectificar sus datos personales, solicitar prueba de la autorización, ser informado respecto del uso de los datos, presentar quejas ante la SIC, renovar la autorización y/o solicitar la supresión de los datos personales, acceder en forma gratuita a sus datos personales, esto lo puede realizar en cualquier momento a través de nuestro correo tratamientodedatos@sumoto.com.co
o a la línea 2750202 opción 112, igualmente podrá conocer nuestra política sobre el tratamiento de Datos Personales que se encuentra publicada en la página Web
www.sumotopalmira.com

SUMOTO S.A.

 

POLITICA DE TRATAMIENTO DE DATOS PERSONALES

 

OBJETIVO

 

SUMOTO S.A., con el fin de garantizar la protección de derechos como Habeas Data, la privacidad, la intimidad, el buen nombre, la imagen , la transparencia y la libertad de los datos personales de personas naturales que se encuentran dentro de nuestra base de datos, con tal propósito todas las actuaciones y Políticas de Tratamiento de Datos se regirán por los principios de buena fe, derecho, garantías y procedimientos previstos en nuestra Constitución Nacional, Ley 1581 de 2012, Decreto Reglamentario 1377 de 2013 y normas concordantes.

 

RESPONSABLE

 

RAZÓN SOCIAL :                        SUMOTO S.A

NIT:                                  800,235,505-9

DOMICILIO:                       PALMIRA (VALLE)

DIRECCIÓN:                      CALLE 30 # 33 – 80 PALMIRA (VALLE)

CORREO ELECTRÓNICO:      tratamientodedatos@sumoto.com.co

TELÉFONO RESPONSABLE:   2750202 opción 112

PAGINA WEB                      www.sumotopalmira.com

 

AMBITO LEGAL Y APLICACIÓN

La política de tratamiento de datos de SUMOTO S.A., será aplicable a los datos personales registrados como Clientes, Repuesteros, Talleres Autorizados, Puntos de Venta, Proveedores, Empleados, Aprendices, Practicantes, aspirantes a cargos, contratistas, asistentes a eventos, capacitaciones, protegidos dentro de la Constitución Política de Colombia de 1991, Ley 1581 de 2012 y Decreto Reglamentario 1377 de 2013.

VIGENCIA

 

La política de tratamiento de datos personales de los titulares de SUMOTO S.A., entrará en vigencia a partir del día veintisiete (27) del mes de octubre del año 2016 y tendrá una duración a término indefinido mientras exista el objeto social por el cual fue creada la sociedad SUMOTO S.A.

 

 

 

 

DEFINICIONES:

Con el fin de dar cumplimiento al ordenamiento jurídico y aplicación a la presente política, se tendrán presente las siguientes definiciones:

Aviso de privacidad. Comunicación verbal o escrita generada por el Responsable, dirigida al Titular para el Tratamiento de sus datos personales, mediante la cual se le informa acerca de la existencia de las políticas de Tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las finalidades del Tratamiento que se pretende dar a los datos personales.

Dato público. Es el dato que no sea semiprivado, privado o sensible. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales y sentencias judiciales debidamente ejecutoriadas que no estén sometidas a reserva.

Datos sensibles. Se entiende por datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político o que garanticen los derechos y garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual, y los datos biométricos.

Tratamiento de datos sensibles: Se podrá hacer uso y tratamiento de los datos catalogados como sensibles cuando: a) El Titular haya dado su autorización explícita a dicho tratamiento, salvo en los casos que por ley no sea requerido el otorgamiento de dicha autorización. b) El Tratamiento sea necesario para salvaguardar el interés vital del titular y este se encuentre física o jurídicamente incapacitado. En estos eventos, los representantes legales deberán otorgar su autorización. c) El Tratamiento sea efectuado en el curso de las actividades legítimas y con las debidas garantías por parte de una fundación, ONG, asociación o cualquier otro organismo sin ánimo de lucro, cuya finalidad sea política, filosófica, religiosa o sindical, siempre que se refieran exclusivamente a sus miembros o a las personas que mantengan contactos regulares por razón de su finalidad. En estos eventos, los datos no se podrán suministrar a terceros sin la autorización del titular. d) El Tratamiento se refiera a datos que sean necesarios

para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial. e) El Tratamiento tenga una finalidad histórica, estadística o científica. En este evento deberán adoptarse las medidas conducentes a la supresión de identidad de los Titulares.

Transferencia. La transferencia de datos tiene lugar cuando el Responsable y/o Encargado del Tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor, que a su vez es Responsable del Tratamiento y se encuentra dentro o fuera del país.

Transmisión. Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable.

Autorización: Sin perjuicio de las excepciones previstas en la ley, en el tratamiento se requiere la autorización previa, expresa e informada del titular, la cual deberá ser obtenida por cualquier medio que pueda ser objeto de consulta y verificación posterior.

Casos en que no se requiere la autorización: La autorización del Titular no será necesaria cuando se trate de: a) Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial. b) Datos de naturaleza pública. c) Casos de urgencia médica o sanitaria. d) Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos. e) Datos relacionados con el Registro Civil de las Personas.

Base de Datos: Conjunto organizado de datos personales que sea objeto de Tratamiento.

Dato personal: Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.

Encargado del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento.

Responsable del Tratamiento: Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos.

Titular: Persona natural cuyos datos personales sean objeto de Tratamiento.

Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.

PRINCIPIOS

 

SUMOTO S.A., aplicará de manera armónica e integral los siguientes principios en el Tratamiento de datos personales:

Principio de Legalidad: El Tratamiento de datos es una actividad reglada que debe sujetarse a lo establecido en ella y en las demás disposiciones que la desarrollen.

Principio de Finalidad: El Tratamiento de datos que realice SUMOTO S.A., debe obedecer a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual debe ser informada al Titular.

Principio de Libertad: El Tratamiento de datos sólo puede ejercerse con el consentimiento, previo, expreso e informado del Titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.

Principio de Veracidad o Calidad: La información sujeta a Tratamiento de datos debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.

Principio de Transparencia: En el Tratamiento de datos debe garantizarse el derecho del Titular a obtener del Responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.

Principio de Acceso y Circulación Restringida: El Tratamiento de datos se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la presente ley y la Constitución. En este sentido, el Tratamiento sólo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en la ley. Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares o terceros autorizados conforme a la ley.

Principio de Seguridad: La información sujeta a Tratamiento por el Responsable del Tratamiento o Encargado del Tratamiento a que se refiere la ley, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.

Principio de Confidencialidad: Todas las personas que en SUMOTO S.A., intervengan en el Tratamiento de datos personales que no tengan la naturaleza de públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento, pudiendo sólo realizar suministro o comunicación de datos personales cuando ello corresponda al desarrollo de las actividades autorizadas en la ley y en los términos de la misma.

DERECHOS DE LOS NIÑOS, NIÑAS Y ADOLESCENTES.

 

SUMOTO S.A., en el Tratamiento de Datos Personales asegurará el respeto a los derechos prevalentes de los menores. Queda prohibido el Tratamiento de datos personales de menores, salvo aquellos datos que sean de naturaleza pública.

DERECHOS DEL TITULAR

 

El artículo 8 de la Ley 1581 de 2012, establece que el titular de los datos personales tiene los siguientes derechos:

1.‐ Conocer, actualizar y rectificar sus datos personales frente a los Responsables del Tratamiento o Encargados del Tratamiento de SUMOTO S.A., Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.

2.‐Solicitar prueba a SUMOTO S.A., de la autorización otorgada al Responsable del Tratamiento salvo cuando expresamente se exceptúe como requisito para el Tratamiento, de conformidad con lo previsto en el artículo 10 de la Ley 1581 de 2012.

3.‐ Ser informado por el Responsable del Tratamiento o el Encargado del Tratamiento de SUMOTO S.A., previa solicitud, respecto del uso que le ha dado a sus datos personales.

4.‐ Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la ley 1581 DE 2012 y las demás normas que la modifiquen, adicionen o complementen.

5.‐ Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el Tratamiento el Responsable o Encargado han incurrido en conductas contrarias a esta ley y a la Constitución.

6.‐ Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento

DEBERES DE SUMOTO S.A., COMO RESPONSABLE Y ENCARGADO DE LOS DATOS PERSONALES

 

SUMOTO S.A. tiene el deber en relación con el tratamiento de los datos personales tener presente, en todo momento, que los datos personales son propiedad de las personas a las que se refieren y que sólo ellas pueden decidir sobre los mismos. En este sentido, hará uso de ellos sólo para aquellas finalidades para las que se encuentra facultado debidamente, y respetando en todo caso la normatividad vigente sobre protección de datos personales.

1. SUMOTO S.A., como Responsable del Tratamiento de los Datos Personales tiene los siguientes deberes:

a) Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.

b) Solicitar y conservar, en las condiciones previstas en la presente ley, copia de la respectiva autorización otorgada por el Titular.

c) Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.

d) Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.

e) Garantizar que la información que se suministre al Encargado del Tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible.

f) Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento, todas las novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada.

g) Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Encargado del Tratamiento.

h) Suministrar al Encargado del Tratamiento, según el caso, únicamente datos cuyo Tratamiento esté previamente autorizado de conformidad con lo previsto en la presente ley.

i) Exigir al Encargado del Tratamiento en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del Titular.

j) Tramitar las consultas y reclamos formulados en los términos señalados en la presente ley.

k) Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la presente ley y en especial, para la atención de consultas y reclamos.

l) Informar al Encargado del Tratamiento cuando determinada información se encuentra en discusión por parte del Titular, una vez se haya presentado la reclamación y no haya finalizado el trámite respectivo.

m) Informar a solicitud del Titular sobre el uso dado a sus datos.

n) Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares.

o) Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.

2.‐ Deberes de SUMOTO S.A., cuando realiza el Tratamiento de los Datos Personales por un encargado:

a) Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data.

b) Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.

c) Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos de la presente ley.

d) Actualizar la información reportada por los Responsables del Tratamiento dentro de los cinco (5) días hábiles contados a partir de su recibo.

e) Tramitar las consultas y los reclamos formulados por los Titulares en los términos señalados en la presente ley

f) Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la presente ley y, en especial, para la atención de consultas y reclamos por parte de los Titulares.

g) Registrar en la base de datos las leyenda “reclamo en trámite” en la forma en que se regula en la presente ley.

h) Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte de la autoridad competente sobre procesos judiciales relacionados con la calidad del dato personal.

i) Abstenerse de circular información que esté siendo controvertida por el Titular y cuyo bloqueo haya sido ordenado por la Superintendencia de Industria y Comercio.

j) Permitir el acceso a la información únicamente a las personas que pueden tener acceso a ella.

k) Informar a la Superintendencia de Industria y Comercio cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares.

l) Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio.

SOLICITUD DE AUTORIZACIÓN Y CONSENTIMIENTO AL TITULAR DE LOS DATOS PERSONALES

 

La recolección, almacenamiento, uso, circulación o supresión de los datos personales por SUMOTO S.A., de los Clientes, Repuesteros, Talleres Autorizados, Puntos de Venta, Proveedores, Empleados, Aprendices, Practicantes, aspirantes a cargos, contratistas, asistentes a eventos, capacitaciones requieren del consentimiento previo, libre, expreso e informado de cada uno de los titulares e informando su finalidad.

MEDIO Y MANIFESTACIONES PARA OTORGAR LA AUTORIZACIÓN. La autorización será generada por SUMOTO S.A., y puesta a disposición del titular con antelación y de manera previa al tratamiento de sus datos personales. Puede constar en un documento físico, electrónico, mensaje de datos, Internet, Sitios Web, en cualquier otro formato que permita garantizar su posterior consulta, o mediante un mecanismo técnico o tecnológico idóneo, que permita manifestar u obtener el consentimiento vía clic o doble clic, mediante el cual se pueda concluir de manera inequívoca, que de no haberse surtido una conducta del titular, los datos nunca hubieren sido capturados y almacenados en la base de datos.( Autorización que se anexa)

PRUEBA DE LA AUTORIZACIÓN. SUMOTO S.A., utilizará los mecanismos con que cuenta actualmente, e implementará y adoptará las acciones tendientes y necesarias para mantener registros o mecanismos técnicos o tecnológicos idóneos de cuándo y cómo obtuvo autorización por parte de los titulares de datos personales para el tratamiento de los mismos.

CASOS EN QUE NO ES NECESARIA LA AUTORIZACIÓN. La autorización del Titular no será necesaria cuando se trate de:

a) Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial;

b) Datos de naturaleza pública;

c) Casos de urgencia médica o sanitaria;

d) Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos;

e) Datos relacionados con el Registro Civil de las Personas.

AVISO DE PRIVACIDAD

 

El aviso de privacidad es el documento físico, electrónico o en cualquier otro formato, puesto a disposición del titular para informarle acerca del tratamiento de sus datos personales. A través de este documento se informa al Titular la información relativa a la existencia de las políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las características del

tratamiento que se pretende dar a los datos personales. (Aviso que se anexa)

El Aviso de Privacidad, como mínimo, deberá contener la siguiente información: a) La identidad, domicilio y datos de contacto del Responsable del Tratamiento. b) El tipo de tratamiento al cual serán sometidos los datos y la finalidad del mismo. c) Los mecanismos generales dispuestos por el Responsable para que el Titular conozca la política de tratamiento de la información y los cambios sustanciales que se produzcan en ella. En todos los casos, debe informar al titular cómo acceder o consultar la política de tratamiento de información.

LIMITACIONES TEMPORALES

 

SUMOTO S.A., solo podrá recolectar, almacenar, usar o circular los datos personales durante el tiempo que sea razonable o necesario, de acuerdo con las finalidades que justificaron el tratamiento, atendiendo las disposiciones aplicables a la materia de que trate y sin perjuicio de las normas legales que dispongan lo contrario, procederá a la supresión de los datos personales en su posesión. No obstante lo anterior, los datos personales deberán ser conservados cuando así se requieran para el cumplimiento de una obligación legal o contractual.

PROCEDIMIENTO DEL TRATAMIENTO DE LOS DATOS PERSONALES:

 

Los derechos de los titulares de la base de Datos de SUMOTO S.A., establecidos

como legítimos, sólo lo pueden ejercer las siguientes personas: a) El titular o sus causahabientes, previa acreditación de su identidad, o a través de instrumentos electrónicos que le permitan identificarse. b) Su representante Legal, previa acreditación de la representación. Cuando la solicitud sea formulada por persona distinta del titular, deberá acreditarse en debida forma la personería o mandato para actuar; y en caso de no acreditar tal calidad, la solicitud se tendrá por no presentada.

En cualquier momento y de manera gratuita el titular podrán solicitar a los responsables de SUMOTO S.A., al acceso de sus datos personales, a ejercer el derecho de consulta y reclamo, como también al derecho de rectificación, actualización o supresión de sus datos personales, previa acreditación de su identidad únicamente

DEL DERECHO DE ACCESO. SUMOTO S.A., establecerá mecanismos sencillos, ágiles y permanentemente disponibles a los Titulares con el fin de que estos puedan acceder a los datos personales que estén bajo el control de aquéllos y ejercer sus derechos sobre los mismos.

CONSULTAS Los titulares, o sus causahabientes podrán consultar de forma gratuita sus datos personales que repose en cualquier base de datos. En consecuencia, SUMOTO S.A., garantizará el derecho de consulta suministrando a los Titulares toda la información contenida en el registro individual o que esté vinculada con la identificación del Titular, conforme a la legislación aplicable a ésta materia.

En cualquier caso, para la atención de solicitudes de consulta, las mismas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de su recibo. Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado antes del vencimiento de los diez (10) días, expresando los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer plazo.

RECTIFICACIÓN Y ACTUALIZACIÓN DE DATOS. SUMOTO S.A., tiene la obligación de rectificar y actualizar a solicitud del titular, la información de éste que resulte ser incompleta o inexacta, de conformidad con el procedimiento y los términos arriba señaladas. Al respecto se tendrá en cuenta lo siguiente: En las solicitudes de rectificación y actualización de datos personales el titular debe indicar las correcciones a realizar y aportar la documentación que avale su petición. SUMOTO S.A., habilitará mecanismos que le faciliten el ejercicio de este derecho, siempre y cuando éstos beneficien al titular. Por lo tanto, se podrán habilitar medios electrónicos u otros que considere pertinentes, establecer formularios, sistemas y otros métodos simplificados, que deben ser informados en el aviso de privacidad y que se pondrán a disposición de los interesados en la página web.

SUPRESIÓN DE DATOS. El titular tiene el derecho, en todo momento, a solicitar a SUMOTO S.A., la supresión (eliminación) de sus datos personales cuando: a) Considere que los mismos no están siendo tratados conforme a los principios, deberes y obligaciones previstas en la normatividad vigente. b) Hayan dejado de ser necesarios o pertinentes para la finalidad para la cual fueron recabados. c) Se haya superado el periodo necesario para el cumplimiento de los fines para los que fueron recabados.

Esta supresión implica la eliminación total o parcial de la información personal de acuerdo con lo solicitado por el titular en los registros, archivos, bases de datos o tratamientos realizados por SUMOTO S.A.

El derecho de supresión (eliminación) no es absoluto y el responsable puede negar el ejercicio del mismo cuando: a) El titular tenga un deber legal o contractual de permanecer en la base de datos. b) La eliminación de datos obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, la investigación y persecución de delitos o la actualización de sanciones administrativas. c) Los datos sean necesarios para proteger los intereses jurídicamente tutelados del titular; para realizar una acción en función del interés público, o para cumplir con una obligación legalmente adquirida por el titular.

REVOCATORIA DE LA AUTORIZACIÓN. Los titulares de los datos personales pueden revocar el consentimiento al tratamiento de sus datos personales en cualquier momento, siempre y cuando no lo impida una disposición legal o contractual. Para ello, SUMOTO S.A., deberá establecer mecanismos sencillos y gratuitos que permitan al titular revocar su consentimiento, al menos por el mismo medio por el que lo otorgó.

RECLAMOS El Titular o sus causahabientes que consideren que la información contenida en una base de datos debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes contenidos en la Ley 1581 de 2012, podrán presentar un reclamo que será tramitado bajo las siguientes reglas:

1. El reclamo se formulará mediante solicitud, con la identificación del Titular, la descripción de los hechos que dan lugar al reclamo, la dirección, y acompañando los documentos que se quiera hacer valer. Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo. En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado a quien corresponda en un término máximo de dos (2) días hábiles e informará de la situación al interesado.

2. Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga “reclamo en trámite” y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido.

3. El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.

RESPONSABLES DE LOS DERECHOS DE LOS TITULARES DE DATOS PERSONALES

Los derechos de los titulares podrán ser ejercidos a través de los canales que han sido habilitados para dicho efecto.

Dirección de correo electrónico: tratamientodedatos@sumoto.com.co, a la página web www.sumotopalmira.com, línea 2750202 opción 112, o a la calle 30 # 33 – 80 en la ciudad de Palmira (Valle).

El titular del Dato personal o quien ejerza su representación legal podrá formular o enviar su petición, queja o reclamo de lunes a viernes, de 8:00 am a 5:00 pm, a través de las direcciones y línea telefónica anteriormente descritas y a nombre de CAROLINA PENILLA REINA, previo el cumplimiento de los requisitos mínimos establecidos en éste documento y en la ley.

 

MEDIDAS DE SEGURIDAD

Dando cumplimiento al principio de seguridad establecido en la normatividad vigente, SUMOTO S.A., adoptará las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a la información que reposa en la base de datos personales, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.

 

CAMBIOS

Cualquier cambio sustancial en las políticas de tratamiento de Datos Personales, SUMOTO S.A., se compromete a notificar e informar dichos cambios por medio de un aviso de privacidad.</b></p>
          </details>
        </div>
      </section>
    </>
  )
}
