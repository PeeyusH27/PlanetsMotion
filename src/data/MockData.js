import earth from '../assets/earth.png'
import jupiter from '../assets/jupiter.png'
import mars from '../assets/mars.png'
import mercury from '../assets/mercury.png'
import neptune from '../assets/neptune.png'
import saturn from '../assets/saturn.png'
import venus from '../assets/venus.png'
import uranus from '../assets/uranus.jpg'

export const NavbarData = [
    {
        id: 1,
        title: "Home",
        link: '/'
    },
    {
        id: 1,
        title: "Categories",
        link: '#'
    },
    {
        id: 1,
        title: "About",
        link: '#'
    },
    {
        id: 1,
        title: "Contact",
        link: '#'
    },
]

export const PlanetsData = [
    {
        id: 1,
        image: mercury,
        title: "Mercury",
        subTitle: "Mercury is the planet nearest to the Sun, and the smallest planet in our solar system.",
        fact: "Has no atmosphere, leading to extreme temperature variations, Used in thermometers.",
        bgColor: "",
        modal: "Mercury",
    },

    {
        id: 2,
        image: venus,
        title: "Venus",
        subTitle: "Venus is the second planet from the Sun, and the sixth largest planet.",
        fact: "Hottest planet due to a thick atmosphere trapping heat & Rotates in the opposite direction compared to most planets.",
        bgColor: "",
        modal: "Venus",
    },

    {
        id: 3,
        image: earth,
        title: "Earth",
        subTitle: "Earth – our home planet – is the third planet from the Sun, and the fifth largest planet.",
        fact: "71% of its surface is covered with water. Not to brag but I live here. Been organizing a race everday since eternity called: The Rat Race.",
        bgColor: "",
        modal: "Earth",
    },

    {
        id: 4,
        image: mars,
        title: "Mars",
        subTitle: "Mars is the fourth planet from the Sun, and the seventh largest planet.",
        fact: "I don't know man, pretty famous despite being named after a chocolate. Elon Musk's old age home probably. ",
        bgColor: "",
        modal: "Mars",
    },

    {
        id: 5,
        image: jupiter,
        title: "Jupiter",
        subTitle: "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system.",
        fact: "Have seen people ride this scooty in my street, looks a bit different here. Largest planet in the solar system.",
        bgColor: "",
        modal: "Jupiter",
    },

    {
        id: 6,
        image: saturn,
        title: "Saturn",
        subTitle: "Saturn is the sixth planet from the Sun, the second largest planet in our solar system.",
        fact: "Famous for its extensive ring system and is still single. Has over 80 moons for some reason, and we're struggling to explore just one.",
        bgColor: "",
        modal: "Saturn",
    },

    {
        id: 7,
        image: uranus,
        title: "UrAnus",
        subTitle: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system.",
        fact: "How am I supposed to know any fact about uranus man. Just a tip: Use Water.",
        bgColor: "",
        modal: "Uranus",
    },

    {
        id: 8,
        image: neptune,
        title: "Neptune",
        subTitle: "Neptune is the eighth and most distant planet in our solar system. It's the fourth largest planet.",
        fact: "Seems to be sidelined. Is in a long distance relationship with the sun.",
        bgColor: neptune,
        modal: "Neptune",
    },
];
