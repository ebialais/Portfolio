import React from 'react';


const items = [
    {
        id: 7,
        title: "Qui suis-je ?",
        logo: "/img/logo/me.svg",
        imgs: "/img/img/Me.png",
        text:   <div id="pInfos">
                    <h3>Developpeuse web front-end</h3>
                    Initialement kinésithérapeute, j'ai travaillé pendant 11 ans dans le secteur des soins intensifs. M'étant énormément investi dans la recherche clinique, j'ai pu développer un esprit <strong>logique</strong> et <strong>analytique</strong> fort.<br/> <br/>
                    Au moment de réorienter ma carrière professionnelle et dans une volonté de mettre à profit cet esprit logique et analytique, tout en m'investissant dans un processus de <strong>création</strong>, je me suis orientée vers le <strong>développement web</strong>. D'abord un peu par hasard, j'ai decouvert en codant les joies et les peines du developpeur, j'y ai pris de plus en plus de plaisir et trouvé ainsi une vraie <strong>passion</strong>.
                </div>,
    },{
        id: 111,
        title: "Contact",
        logo: "/img/logo/contact.svg",
        imgs: "",
        text: <div id="pContact">
                <div id="adress"><i class="fas fa-home"></i> : Scherendelle 52, <br />3090 Overijse<br /> <br /></div>
                <div><i class="fas fa-phone"></i> : +32 472 86 06 25<br /> <br /></div>
                <a href = "mailto: ebialais@gmail.com" className="linkEmail"><i class="fas fa-envelope"></i> : ebialais@gmail.com</a><br /> <br />
                <div id="linkInfos">
                    <a href="https://github.com/ebialais" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/emilie-bialais/" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>,
    },
    // {
    //     id: 112,
    //     title: "Mon CV",
    //     logo: "/img/logo/resume.svg",
    //     imgs: [
    //         "./img/MacAPIBecome.png",
    //         "./img/iphoneAPIBecome.png"
    //     ],
    //     // text: ,
    //     color: "#f5efe3",
    //     src: ""
    // },
    // {
    //     id: 113,
    //     title: "Mes hobbies",
    //     logo: "/img/logo/mindfulness.svg",
    //     imgs: [
    //         "./img/MacAPIBecome.png",
    //         "./img/iphoneAPIBecome.png"
    //     ],
    //     text: "Projet de groupe visant a créer une application utilisation VueJs et PHP. Integration de l'API 'the MovieDB' pour afficher différents films et séries télé, selon un design imposé. Intégration d'une base de données et d'un formulaire permettant de laisser des commentaires sur les films. Le projet a été réalisé à 3 en une semaine.",
    //     color: "#f5efe3",
    //     src: ""
    // },
]

export default items;