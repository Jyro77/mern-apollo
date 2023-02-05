import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/projects";
import TasksList from "../components/tasks/TasksList";
import TaskForm from "../components/tasks/TaskForm";

function ProjectDetails() {
    const params = useParams();
    const { data, loading, error } = useQuery(GET_PROJECT, {
        variables: {
            id: params.id,
        },
        skip: !params.id,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <button>Delete</button>
            <TaskForm />
            <TasksList tasks={data.project.tasks} />
        </div>
    );
}

export default ProjectDetails;

/* 
    interface props {
        _id: string;
        name: string;
        description: string;
        tasks: [
            {
                _id: string;
                title: string;
            },
        ];
    } */
