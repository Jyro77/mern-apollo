import { useNavigate } from "react-router-dom";
import TaskForm from "../tasks/TaskForm";
import TasksList from "../tasks/TasksList";

interface props {
    _id: string;
    name: string;
    description: string;
    /*     tasks: [
        {
            _id: string;
            title: string;
        },
    ]; */
}
function ProjectCard({ _id, name, description }: props) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/projects/${_id}`)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;
