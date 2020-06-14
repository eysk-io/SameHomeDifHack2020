import anthonyImg from './anthony.jpg';
import benImg from './ben.jpg';
import rickImg from './rick.jpg';

const data = [
    {
        img: anthonyImg,
        name: "Anthony Lopes",
        description: "I am a third year student at UBC studying Computer Science. I am interested in finding a partner for a web project I've been working on over the summer",
        interests: [
            "Whiteboarding", "Leadership", "Typescript"
        ],
    },
    {
        img: benImg,
        name: "Ben Cheung",
        description: "I am always looking for project partners and friends to practice leetcode questions with. Let's do a project together!",
        interests: [
            "Mentorship", "Java", "Typescript"
        ],
    },
    {
        img: rickImg,
        name: "Rick Huang",
        description: "I am a senior computer science student in Vancouver always open to chat about technology and innovation!",
        interests: [
            "React", "React Native", "ExpressJS"
        ],
    }
]

export default data;