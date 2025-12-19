// js\data.js
const evenements = [
    {
        "id": "noel-chevaux-2024",
        "titre": "Noël des Chevaux",
        "date": "2024-12-20",
        "image": "./images/evenements/noel-des-chevaux-01.jpg"
    },
    {
        "id": "noel-chevaux-03-2024",
        "titre": "Noel des Chevaux - Poney Game",
        "date": "2024-12-20",
        "image": "./images/evenements/noel-des-chevaux-03.jpg"
    },
    {
        "id": "noel-chevaux-02-2024",
        "titre": "Noel des Chevaux - Rallye",
        "date": "2024-12-7",
        "image": "./images/evenements/noel-des-chevaux-02.jpg"
    },
    {
        "id": "anniversaire-2025",
        "titre": "Anniversaire au Paradis O'Fer",
        "date": "2025-01-01",
        "image": "./images/evenements/anniversaire-au-paradis-ofer.jpg"
    },
    {
        "id": "automne-atelier-nature",
        "titre": "Atelier Nature en Automne",
        "date": "2024-11-15",
        "image": "./images/evenements/automne-atelier-nature-souvenir.jpg"
    },
    {
        "id": "bon-au-paradis-ofer-01",
        "titre": "Bon Cadeau - Séance Découverte",
        "date": "2025-12-31",
        "image": "./images/evenements/bon-au-paradis-ofer-01.jpg"
    },
    {
        "id": "bon-au-paradis-ofer-02",
        "titre": "Bon Cadeau - Pack 5 Séances",
        "date": "2025-12-31",
        "image": "./images/evenements/bon-au-paradis-ofer-02.jpg"
    },
    {
        "id": "bon-au-paradis-ofer-03",
        "titre": "Bon Cadeau - Pack 10 Séances",
        "date": "2025-12-31",
        "image": "./images/evenements/bon-au-paradis-ofer-03.jpg"
    },
    {
        "id": "poney-ballade",
        "titre": "Ballade à Poney",
        "date": "2025-06-15",
        "image": "./images/evenements/poney-ballade.jpg"
    },
    {
        "id": "poney-jeu-de-piste",
        "titre": "Jeu de Piste avec les Poneys",
        "date": "2025-07-20",
        "image": "./images/evenements/poney-jeu-de-piste-gardien.jpg"
    },
    {
        "id": "rallye-equestre-mediation",
        "titre": "Rallye Équestre Médiation",
        "date": "2025-08-10",
        "image": "./images/evenements/rallye-equestre-mediation.jpg"
    },
    {
        "id": "halloween-2024",
        "titre": "Halloween au Paradis",
        "date": "2024-10-31",
        "image": "./images/evenements/halloween.jpg"
    },
];

const chevaux = [
    {
        "id": "indy",
        "nom": "Indy",
        "type": "Poney",
        "age": 7,
        "date_anniversaire": "1er janvier 2018",
        "race": "ONC",
        "photo": "./images/cheval/cheval-indy.jpg",
        "resume": "Voici Indy, la plus jeune qui a 7 ans. Elle a un caractère très calme et aime qu'on s'occupe d'elle. Elle apprécie la présence d'adultes mais plus particulièrement des enfants qu'elle côtoie depuis toute petite. Elle n'a peur de rien !"
    },
    {
        "id": "patchouli",
        "nom": "Patchouli",
        "type": "Poney",
        "age": 21,
        "date_anniversaire": "1er janvier 2003",
        "race": "ONC",
        "photo": "./images/cheval/cheval-patchouli.jpg",
        "resume": "Voici Patchouli, notre petite mamie, elle a 21 ans. Elle a toujours été au contact d'humains, ainsi que de personnes en situation de handicap depuis son plus jeune âge. De ce fait elle est très douce avec tout le monde, mais elle sait tout de même affirmer son caractère avec les autres chevaux."
    },
    {
        "id": "poly",
        "nom": "Poly",
        "type": "Poney",
        "age": 13,
        "date_anniversaire": "22 avril 2012",
        "race": "Shetland",
        "photo": "./images/cheval/cheval-poly.jpg",
        "resume": "Poly est notre plus petit poney, il a 13 ans. Avec sa petite taille et sa bouille craquante : comment résister ? Mais ne vous fiez pas à son apparence, car il sait très bien ce qu'il veut. Il a son caractère, mais il adore la présence d'enfants avec lesquels il aime s'amuser."
    },
    {
        "id": "rodeo",
        "nom": "Rodéo",
        "type": "Poney",
        "age": 20,
        "date_anniversaire": "30 avril 2005",
        "race": "Haflinger",
        "photo": "./images/cheval/cheval-rodeo.jpg",
        "resume": "Voici Rodéo, il a 20 ans. Nous l'avons récupéré au Grand Refuge à la SPA de Pervenchères. Il a eu un passé compliqué, mais depuis qu'il nous a rejoins il profite pleinement. C'est un poney avec un caractère en or. Il est très doux que ce soit avec les enfants ou les adultes. Il recherche tout le temps le contact humain, peut-être parce qu'il en a toujours manqué auparavant, c'est un vrai pot de colle ! C'est également un poney très calme."
    },
    {
        "id": "sunny",
        "nom": "Sunny",
        "type": "Cheval",
        "age": 19,
        "date_anniversaire": "25 août 2006",
        "race": "Anglo-arabe Selle français",
        "photo": "./images/cheval/cheval-sunny.jpg",
        "resume": "Sunny est le seul cheval de par sa plus grande taille, il a 19 ans. C'est le 1er cheval que nous ayons eu, nous l'avons connu à ses 6 ans. Il est très attentif à tout ce qui l'entoure et c'est un cheval d'une très grande intelligence qui retient vite. Il aime la présence de tout le monde."
    }
];

const installations = {
    "intro": "Nos installations évoluent : l'accueil, le manège semi-couvert, la sellerie, l'allée praticable et l'aire de pansage sont déjà opérationnels, tandis que la chambre d'hôte est en travaux.",
    "elements": [
        {
            "id": "bureau-accueil",
            "nom": "Bureau d'accueil",
            "photos": [
                "./images/installations/bureau-01.jpg",
                "./images/installations/bureau-02.jpg",
                "./images/installations/bureau-03.jpg"
            ],
            "statut": "disponible",
            "resume": "Point d'accueil chaleureux et équipé : bureau, coin attente et documentation pratique pour les visiteurs. Espace pensé pour l'accueil, l'organisation des rendez-vous et la remise d'informations avant chaque séance."
        },
        {
            "id": "manege",
            "nom": "Manège semi-couvert",
            "dimensions": "15 × 30 m",
            "revetement": "sable",
            "photos": ["./images/installations/manege.jpg"],
            "statut": "disponible",
            "resume": "Grand manège semi-couvert offrant une surface confortable et sécurisée pour les séances, utilisable par tous les temps. Sol en sable adapté au travail des chevaux et à la sécurité des participants."
        },
        {
            "id": "allee-praticable",
            "nom": "Allée praticable pour tous",
            "photos": [
                "./images/installations/alle-praticable-pour-tous01.jpg",
                "./images/installations/alle-praticable-pour-tous02.jpg"
            ],
            "statut": "disponible",
            "resume": "Allée stabilisée et accessible qui facilite l'accès à l'ensemble des installations. Conçue pour la sécurité et le confort des visiteurs, y compris pour les personnes à mobilité réduite."
        },
        {
            "id": "sellerie",
            "nom": "Sellerie",
            "photos": [
                "./images/installations/sellerie01.jpg",
                "./images/installations/sellerie02.jpg",
                "./images/installations/sellerie03.jpg"
            ],
            "statut": "disponible",
            "resume": "Espace de sellerie bien organisé avec rangements pour selles et harnachements, permettant une préparation rapide et sécurisée des chevaux avant les séances."
        },
        {
            "id": "aire-pansage",
            "nom": "Aire de pansage",
            "photos": ["./images/installations/aire-de-pansage.jpg"],
            "statut": "disponible",
            "resume": "Aire dédiée à la préparation et aux soins des chevaux, équipée pour le pansage, le brossage et les soins de base — conçue pour le confort des équidés et des soignants."
        },
        {
            "id": "gite",
            "nom": "Gîte",
            "photos": [],
            "statut": "en travaux",
            "resume": "Gîte champêtre en projet : hébergement prévu pour prolonger l'expérience sur place, avec confort simple et mise en valeur du cadre naturel."
        }
    ]
};

const tarifs = [
    {
        "id": 1,
        "intitule": "Séance individuelle",
        "duree": "1h (environ)",
        "prix": 50
    },
    {
        "id": 2,
        "intitule": "Forfait 5 séances individuelles",
        "duree": "5x1h (environ)",
        "prix": 225,
        "note": "soit la 5ème séance à moitié prix"
    },
    {
        "id": 3,
        "intitule": "Forfait 10 séances individuelles",
        "duree": "10x1h (environ)",
        "prix": 450,
        "note": "soit la 10ème séance offerte"
    },
    {
        "id": 4,
        "intitule": "Séance 2 personnes",
        "duree": "1h15 (environ)",
        "prix": 80
    },
    {
        "id": 5,
        "intitule": "Forfait groupes",
        "duree": "1h30 (environ)",
        "prix": 140,
        "note": "par groupe de 4, +35 € par personne en plus"
    },
    {
        "id": 6,
        "intitule": "Forfait famille",
        "duree": "1h30 (environ)",
        "prix": 120,
        "note": "pour 3 personnes (140 € pour 4, +35 € par personne en plus)"
    },
    {
        "id": 7,
        "intitule": "Forfait école",
        "duree": "2h (environ)",
        "prix": 250,
        "note": "par groupe de 6 enfants, +25 € par enfant en plus"
    },
    {
        "id": 8,
        "intitule": "Séances découverte enfants",
        "duree": "3h (mercredis et samedis, 14h-17h)",
        "prix": 33,
        "note": "à partir de 3 ans, jeux avec les poneys, goûter offert, 6 enfants max"
    }
];

const gites = [
    {
        "id": 1,
        "intitule": "Sans séance",
        "duree": "1 nuit",
        "prix": 95,
        "unite": "€/nuit",
        "capaciteMax": 6
    },
    {
        "id": 2,
        "intitule": "Nuit sur place + 1 séance individuelle",
        "duree": "1 nuit",
        "prix": 130,
        "unite": "€/nuit/personne",
        "capaciteMax": 6,
        "note": "+35 € par personne en plus / nuit"
    }
];

const avis = [
    {
        "author": "Adeline Ward",
        "text": "Très bon après-midi au paradis o'fer"
    },
    {
        "author": "Audrey Jeanne",
        "text": "Très bon accueil, personnes attentionnés et à l'écoute. Nous sommes ravis, ma fille a adoré son après midi avec les poneys. Nous reviendrons très prochainement avec grand plaisir. Merci pour tout ☺"
    },
    {
        "author": "Brigitte Pollet",
        "text": "Super découverte pour les filles. Elles ont adorés de découvrir les chevaux les poneys et de pouvoir les brosser et surtout petite balade. Un grand merci ☺"
    },
    {
        "author": "Amandine Delattre",
        "text": "Nous avons passé un super moment ! L'accueil était vraiment top. Ma fille a adoré son après-midi avec vous. Un grand merci pour votre patience et votre gentillesse ! 🫶🏻🐎"
    },
    {
        "author": "Sophie Delplanque",
        "text": "Séance de médiation équine est une première pour moi. Bérengère est une jeune femme passionnée par son travail et les chevaux. Je suis une personne très anxieuse. Au début de la séance, j'étais très tendue, je ne m'en rendais pas compte. Patchouli la jument l'a tout de suite ressenti, elle s'est arrêtée de marcher. Au fur et à mesure, j'ai lâché prise et durant le reste du temps, je n'ai eu aucunes pensées négatives. Cette séance s'est faite dans un cadre calme et verdoyant. Patchouli et moi étions très détendues à la fin de cette séance."
    },
    {
        "author": "Céline Delplanque",
        "text": "Nous avons participé à l'après midi halloween. Nous avons passé une très bonne après midi avec de très bonnes activités qui changent de ce que nous avons déjà pu faire dans d'autres lieux : les enfants ont brossé et déguisé les chevaux 😜, ils leur ont fait faire un parcours et ils ont pu ensuite les monter, et leur préparer et donner à manger. Nous avons ensuite profité d'un bon goûter 😋. Les enfants ont adoré."
    }
];

const faqData = [
    {
        "question": "Quels âges peuvent bénéficier des séances de médiation ?",
        "answer": "Nos séances sont adaptées à tous les âges : enfants dès 3 ans, adolescents, adultes et aînés. Nous ajustons l'approche selon les besoins de chacun."
    },
    {
        "question": "Faut-il avoir de l'expérience avec les chevaux ?",
        "answer": "Absolument pas ! Nos séances de médiation équine sont conçues pour tous, avec ou sans expérience préalable. Nos chevaux et poneys sont habitués au contact humain et très doux."
    },
    {
        "question": "Combien de personnes par séance ?",
        "answer": "Nous proposons des séances individuelles, en duo, en famille (3-4 personnes), en groupe (jusqu'à 4 personnes), ou pour écoles (jusqu'à 6 enfants). Les séances découverte enfants accueillent maximum 6 enfants."
    },
    {
        "question": "Comment réserver une séance ?",
        "answer": "Contactez-nous par téléphone (06 48 34 22 53) ou par courriel (au.paradis.o.fer@gmail.com). Vous pouvez également utiliser le formulaire de contact de ce site."
    },
    {
        "question": "Quelles sont les modalités d'annulation ?",
        "answer": "En cas d'imprévu, merci de nous prévenir au moins 48h à l'avance afin de pouvoir repositionner votre séance. Les conditions seront précisées lors de votre réservation."
    },
    {
        "question": "Les séances ont-elles lieu par tous les temps ?",
        "answer": "Oui ! Notre manège semi-couvert nous permet d'organiser les séances même en cas de pluie. En cas de conditions météorologiques exceptionnelles, nous vous contacterons pour reporter."
    },
    {
        "question": "Quelle tenue adopter ?",
        "answer": "Prévoyez des vêtements confortables et adaptés à la saison. Des chaussures fermées sont obligatoires (baskets, bottines). Évitez les talons et les tongs."
    },
    {
        "question": "Les séances sont-elles remboursées par la sécurité sociale ?",
        "answer": "Les séances de médiation équine ne sont pas prises en charge par la sécurité sociale. Cependant, certaines mutuelles peuvent participer au financement. Renseignez-vous auprès de votre organisme."
    },
    {
        "question": "Peut-on venir simplement visiter les installations ?",
        "answer": "Oui ! Contactez-nous pour convenir d'un moment de visite. Nous serons ravis de vous faire découvrir notre structure, nos chevaux et de répondre à vos questions."
    },
    {
        "question": "Proposez-vous des activités pour les anniversaires ?",
        "answer": "Oui, nous organisons des animations équestres pour les anniversaires d'enfants. Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé."
    }
];

window.APO_DATA = {
    evenements,
    chevaux,
    installations,
    tarifs,
    gites,
    avis,
    faqData,
};

// Optionnel : signal pour React (si vous voulez déclencher un refresh sans polling)
window.dispatchEvent(new Event("apo:data:ready"));
