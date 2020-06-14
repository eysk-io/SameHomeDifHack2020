import anthonyImg from '../../../assets/anthony.jpg';
import benImg from '../../../assets/ben.jpg';
import rickImg from '../../../assets/rick.jpg';

const PROSPECTS = [
    {
        img: anthonyImg,
        name: "Anthony Lopes",
        bio: "I am a third year student at UBC studying Computer Science. I am interested in finding a partner for a web project I've been working on over the summer",
        interests: [
            "Whiteboarding", "Leadership", "Typescript"
        ],
        matched: false,
    },
    {
        img: benImg,
        name: "Ben Cheung",
        bio: "I am always looking for project partners and friends to practice leetcode questions with. Let's do a project together!",
        interests: [
            "Mentorship", "Java", "Typescript"
        ],
        matched: false,
    },
    {
        img: rickImg,
        name: "Rick Huang",
        bio: "I am a senior computer science student in Vancouver always open to chat about technology and innovation!",
        interests: [
            "React", "React Native", "ExpressJS"
        ],
        matched: false,
    }
];

export default PROSPECTS;