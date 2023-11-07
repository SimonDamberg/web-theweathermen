import teamData from './teamData';

const Team = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 xl:gap-24 transition-all max-w-sm sm:max-w-3xl xl:max-w-4xl mx-auto px-10 py-20'>
            {teamData.map((member, index) => (
                <TeamMember key={index} {...member} />
            ))}
          
        </section>
    )
}

interface ITeamMemberProps {
    name: string;
    title: string;
    image?: string;   
    color?: string;
    email?: string;
    linkedin?: string;
}
const TeamMember: React.FC<ITeamMemberProps> = (props) => {
    const { name, title, image, color, email, linkedin } = props;
    return (
        <a className="flex flex-col justify-center rounded-md shadow-md p-10 hover:shadow-xl transition-all bg-gray-light aspect-square" href={linkedin ? `https://linkedin.com/in/${linkedin}` : "#"}>
            <div className={`h-32 w-32 rounded-full ring-4 ring-slate-900 overflow-hidden border-2 border-white  self-center transform hover:scale-110 transition-all duration-500 `}>
                <img className="h-32 w-32" src={image || "/assets/default_team.png"} alt={name} width="1000px" height="1000px" />
            </div>
            <h1 className={`text-3xl mt-3 text-center text-slate-900`}>{name}</h1>
            <p className={`mt-1 text-center mb-2 italic`}>{title}</p>{email &&
                <p className='text-center text-md'>{email }</p>
            }
        </a>
    )
}

export default Team