import style from "./home.module.css";

const Home = () => {
    return(
        <div className = {style.homeContainer}>
            <article className = {style.articleContainer}>
                <h1>
                    <span className={style.firstLeft}>Vizcay</span>
                    <span className={style.firstRight}>a</span>
                </h1>
                <div className={style.paragraphContainer}>
                    <p className={style.leftParagraphContainer}>
                        Centro Empresarial y Comercial en Medellín
                    </p>
                    <p className={style.rightParagraphContainer}>
                        De un diseño pensado para el uso comercial de los medellinenses, Vizcaya migra a ofrecer una combinación de
                        espacios que privilegian los servicios empresariales y personales en un lugar estratégico en El Poblado.<br/>
                        <br/>
                        Los planos oficiales para la construcción del hoy llamado Centro Empresarial y Comercial Vizcaya, se remontan
                        a 1997, en un momento en el que la parte alta de la zona de El Poblado, en Medellín, se densificaba a un ritmo
                        importante para el desarrollo habitacional, dado su atractivo por las zonas verdes, exclusividad y generosos
                        espacios en esta zona de la ciudad. El proyecto nace como una respuesta a esa densificación pretendiendo ofrecer
                        un nuevo conglomerado de comercio en el sector, sin embargo, la apertura simultánea de otros desarrollos y la mayor
                        crisis hipotecaria del país en el año 1999 hizo inviable financieramente el proyecto y la mayoría de inmuebles
                        quedaron en manos de sus bancos acreedores. <br/>
                        <br/>
                        Hacia el año 2011, UNIVERSA comienza a estudiar la habitabilidad de recuperar este espacio a partir de la redefinición
                        de su vocación principal mediante la introducción de los usos empresariales y de servicios como el eje dinamizador
                        de su actividad y una completa renovación arquitectónica de los espacios. En 2013 se firma una promesa de asociación
                        para la ejecución de estas transformaciones con el Grupo Éxito a partir de 2014, Universa y una de sus empresas
                        accionistas AYURÁ SAS adquieren la participación de Grupo Éxito en este proyecto y asumen la totalidad de la inversión
                        en este proyecto.                       
                    </p>
                </div>
            </article> 


            <article className = {style.articleContainer}>
                <h1>
                    <span className={style.secondtLeft}>Ide</span>
                    <span className={style.secondRight}>o</span>
                </h1>
                <div className={style.paragraphContainer}>
                    <p className={style.leftParagraphContainer}>
                        De una planta industrial a un Centro de Diseño y Construcción
                    </p>
                    <p className={style.rightParagraphContainer}>
                        Desde un principio fue evidente que, para la transformación pretendida, este inmueble debía renovarse por completo. Con
                        este panorama, en 2015, con el acompañamiento de un equipo interdisciplinario, se realizaron estudios previos de viabilidad
                        técnica, urbanística y comercial para los cambios que se vendrían una vez comprobada la idoneidad del mismo.<br />
                        <br />
                        Al verificar que sí era posible, llegaron los retos para materializar este proyecto. Por un lado, había que detectar si en
                        la zona se presentaban problemas ambientales debido a la manipulación de químicos de la antigua industria que allí funcionaba.
                        Otro se enfocaba en la oportunidad de darle al sector un lugar con fines comerciales, lo que significó mejorar su visibilidad
                        desde la vía principal, eliminar los cerramientos preliminares, mejorar sus antejardines y reformar un espacio acorde a las
                        demandas de los compradores de una superficie que entrega soluciones para diseñar y construir. De igual forma, se hizo necesario
                        acoplar zonas para la descarga de mercancía, así como emprender diagnósticos de actualización de los sistemas técnicos y aplicar
                        las nuevas normativas para edificios comerciales.
                    </p>
                </div>
            </article> 

            <article className = {style.articleContainer}>
                <h1>
                    <span className={style.thirdLeft}>Yacar</span>
                    <span className={style.thirdRight}>é</span>
                </h1>
                <div className={style.paragraphContainer}>
                    <p className={style.leftParagraphContainer}>
                        Un hallazgo maravilloso que nos permitió soñar y descubrir un potencial sin igual
                    </p>
                    <p className={style.rightParagraphContainer}>
                        El antiguo edificio residencial Yacaré es hoy un centro empresarial y comercial en el que la luz y los espacios verdes e interconectados
                        son los protagonistas.<br />
                        <br />
                        Construido a principios de la década de los ochenta en el corredor de la calle cien con carrera séptima, uno de los lugares
                        emblemáticos empresariales y mejor ubicados de la capital, el edificio fue posteriormente adquirido por la Chevron Petroleum
                        Company que instaló allí su sede hasta el 2012. Un año después UNIVERSA se propone repensar este espacio, de cara a las nuevas
                        necesidades del mercado, cuando el auge económico del país generaba una demanda muy fuerte por oficinas de gran formato y existía
                        una baja oferta de las mismas, y asume así el desafío de darle un nuevo uso a esta representativa edificación.                
                    </p>
                </div>
            </article>
            
                 
        </div>
    )
};

export default Home;