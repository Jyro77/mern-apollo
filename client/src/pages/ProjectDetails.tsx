import { Link, useParams, redirect } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PROJECT, DELETE_PROJECT, GET_PROJECTS } from "../graphql/projects";
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

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: {
            id: params.id,
        },
        refetchQueries: [GET_PROJECTS],
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <Link to='/projects'>
                <button className='bg-blue-500 rounded-md text-white px-3 py-2'>
                    Back
                </button>
            </Link>
            <div className='container bg-zinc-900 mb-2 p-10 flex justify-between'>
                <div>
                    <h1 className='text-2xl'>{data.project.name}</h1>
                    <p>{data.project.description}</p>
                </div>
            </div>
            <Link to='/projects'>
                <button
                    className='bg-red-700 rounded-md px-3 py-2 mb-2 w-full'
                    onClick={() => {
                        deleteProject();
                    }}>
                    Delete
                </button>
            </Link>
            <TaskForm />
            <TasksList tasks={data.project.tasks} />
        </div>
    );
}

export default ProjectDetails;
