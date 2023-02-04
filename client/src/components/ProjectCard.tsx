interface props {
    name: string;
    description: string;
}

function ProjectCard({ name, description }: props) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;
