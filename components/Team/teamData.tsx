interface ITeamAttributes {
 
    name: string;
    title: string;
    linkedin: string;
    image: string;
    email: string;
}

const teamData: ITeamAttributes[] = [
    {
        "name": "Simon Damberg",
        "title": "Project Manager",
        "email": "damberg.simon00@gmail.com",
        "linkedin": "simon-damberg",
        "image": "/images/team/simon_web.jpeg"
    },
    {
        "name": "Theo Meier Ström",
        "title": "Testing/Documentation",
        "email": "meier.strom.theo@gmail.com",
        "image": "/images/team/theo_web.jpeg",
        "linkedin": "theo-meier-ström"
    },
    {
        "name": "Kevin Hormiz",
        "title": "Design/Frontend",
        "email": "kevinhormiz@gmail.com",
        "image": "/images/team/kevin_web.jpeg",
        "linkedin": "kevin-hormiz"
    },
    {
        "name": "Filip Crkvenjas",
        "title": "Backend/flex",
        "email": "filipcrkvenjas99@gmail.com",
        "image": "/images/team/filip_web.jpeg",
        "linkedin": "filip-crkvenjas-5166b0173"
    },
    {
        "name": "Tomas Pérez",
        "title": "Backend/flex",
        "email": "tomas@perezjarnil.se",
        "linkedin": "tomasjperez",
        "image": "/images/team/tomas_web.jpeg"
    },
]

export default teamData; 