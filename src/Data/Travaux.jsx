import React from 'react';

const travaux = [
    {
        id: 1,
        title: "API Promo BeCode",
        logo: "/img/logo/code.svg",
        imgs: "/img/img/MacAPIBecode.png",
        text: 
            <div>
                Premier exercice d'intégration d'une API. <br/> 
                L'API reprend les différentes personnalités qui ont inspirées BeCode et qui ont données leurs noms
                aux différentes promotions. <br/>
                L'exercice a été réalisé en <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong>.
            </div>,
        srcGithub: "https://github.com/ebialais/API_PromoBecode",
        srcProjet: "https://ebialais.github.io/API_PromoBecode/",
    },{
        id: 2,
        title: "Hackathon UE",
        logo: "/img/logo/europe.svg",
        imgs: "/img/img/UEHackathon.png",
        text: 
            <div>
                <strong>Hackathon</strong> organisé par l'Union Européenne. <br/>
                Après 3 mois de formation, et en équipe de 4 personnes, nous avions <strong>24h</strong> pour trouver un 
                moyen pour inciter les utilisateurs de la plateforme de fournir un feedback. <br/>
                Le travail a été réalisé en <strong>HTML</strong>, <strong>CSS</strong> et <strong>Javascript</strong>.<br/>
                Notre équipe est arrivée à la troisième place.
            </div>,
        srcGithub: "https://github.com/ebialais/Single_digital_gateway",
        srcProjet: "https://ebialais.github.io/Single_digital_gateway/",
    },{
        id: 3,
        title: "Coockie Clicker",
        logo: "/img/logo/game.svg",
        imgs: "/img/img/coockiClicker.png",
        text: 
            <div>
                Après 1 mois de formation, nous avons effectué notre premier travail d'équipe (5 personnes). <br/>
                A l'aide des langages que nous avions appris alors (<strong>HTML/CSS/Javascript</strong>), nous avons eu une semaine 
                pour créer un <strong>coockie clicker</strong> qui devait posséder certaines fonctionnalités précises.
            </div> , 
        srcGithub: "https://github.com/ebialais/cookieChoco",
        srcProjet: "https://corneliushka.github.io/cookieChoco/",
        
    },{
        id: 4,
        title: "Bootstrap Resto",
        logo: "/img/logo/restaurant.svg",
        imgs: "/img/img/RestoBootstrap.png",
        text: 
            <div>
                Projet de site web adapté à un <strong>restaurant</strong>. 5 pages HTML différentes sont intégrées 
                selon des consignes précises. Le projet a été réalisé en <strong>HTML, CSS, Bootstrap et Javascript</strong>. Il a été 
                effectué en une semaine.
            </div>,
        srcGithub: "https://github.com/ebialais/bootstrap-resto-website",
        srcProjet: "https://ebialais.github.io/bootstrap-resto-website/",
    },{
        id: 5,
        title: "Geolia",
        logo: "/img/logo/map.svg",
        imgs: "/img/img/geolia.png",
        text: 
            <div>
                Projet réalisé dans le cadre d'un <strong>partenariat entre les apprenants BeCode et ceux de la formation Pilote Media</strong>. <br/>
                La cliente souhaitait réaliser une <strong>carte interactive</strong> regroupant différentes informations en lien avec 
                la "slow consommation" (producteurs locaux, supermarchés bio, 
                friperies, etc).<br/>
                Le projet s'est déroulé sur 2 semaines. Un maximum de fonctionalités ont été mises en 
                place, mais celui-ci n'a pas pu, vu l'ampleur initiale du projet et le court delai imparti, être totalement abouti. 
                Il s'agit donc d'un prototype. Le projet a été réalisé en <strong>ReactJs</strong>.
            </div>,
        srcGithub: "",
        srcProjet: "https://becodeorg.github.io/PiloteMedia-Geolia/",
    },{
        id: 6,
        title: "Allez-Ciné",
        logo: "/img/logo/movie.svg",
        imgs: "/img/img/AllezCiné.png",
        text: 
            <div>
                Projet de groupe (nous étions 3 personnes pendant 1 semaine) intégrant les données issues de <strong>l'API 
                'the MovieDB'</strong>. Ces données devaient être affichées selon un design imposé dans une <strong>single page 
                application</strong>. 
                Nous devions également mettre en place une base de données et un formulaire permettant de laisser des commentaires sur 
                les films ou séries. Le projet a été réalisé en <strong>Vue.js</strong> et <strong>PHP</strong>.
            </div>,
        srcGithub: "https://github.com/ebialais/allezcine",
        srcProjet: " https://ebialais.github.io/allezcine/",
    },{
        id: 7,
        title: "PodCode",
        logo: "/img/logo/podcast.svg",
        imgs: "/img/img/PodCode.png",
        text: 
            <div>
                Site web réalisé à deux pour la mise en place d'un <strong>Podcast à destination des apprentis 
                developpeur web</strong>. PodCode est une <strong>single Page Application</strong> qui accueillera 
                dans un avenir proche les différentes émissions réalisés par les apprenants de BeCode.
                Le projet a été réalisé en <strong>Vue.js</strong>.
            </div>,
        srcGithub: "https://github.com/ebialais/podcode-landing-page",
        srcProjet: "https://andresgol.github.io/podcode-landing-page/#/",
    },{
        id: 8,
        title: "On Stage",
        logo: "/img/logo/react.svg",
        imgs: "/img/img/onStage.png",
        text: 
            <div>
                Projet intégrant les information venant d'une <strong>API</strong> au choix et son affichage sous forme
                de <strong>talbeau paginé</strong>. Au clic sur un élement du tableau, plus de détails sont affichés.
                L'API choisie est celle de "TicketMaster". Le projet est réalisé en <strong>React</strong> et avec <strong>matérial-UI</strong>.
            </div>,
        color: "#f5efe3",
        srcGithub: "https://github.com/ebialais/FamoTestAPI",
        srcProjet: "https://ebialais.github.io/FamoTestAPI/",
    },
]

export default travaux;