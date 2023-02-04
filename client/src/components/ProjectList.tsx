import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCard from "./ProjectCard";

interface props {
    _id: string;
    name: string;
    description: string;
}

function ProjectList() {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;

    return (
        <div>
            {data.projects.map(({ _id, name, description }: props) => (
                <ProjectCard key={_id} name={name} description={description} />
            ))}
        </div>
    );
}

export default ProjectList;
