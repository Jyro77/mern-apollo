import { useNavigate } from "react-router-dom";

interface props {
    _id: string;
    name: string;
    description: string;
}
function ProjectCard({ _id, name, description }: props) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/projects/${_id}`)}
            className='bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-2 hover:bg-zinc-700 hover:cursor-pointer'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;
