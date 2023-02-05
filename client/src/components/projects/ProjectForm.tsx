import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../../graphql/projects";

function ProjectForm() {
    const [project, setProject] = useState<{
        name: string;
        description: string;
    }>({
        name: "",
        description: "",
    });

    const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
        variables: {
            name: project.name,
            description: project.description,
        },
        refetchQueries: [
            {
                query: GET_PROJECTS,
            },
            "GetProjects",
        ],
    });

    const handlerChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const handlerSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        createProject();
        setProject({
            name: "",
            description: "",
        });
    };
    return (
        <form onSubmit={handlerSubmit} className='w-2/5'>
            {error && <p>{error.message}</p>}
            <input
                type='text'
                name='name'
                placeholder='Title of project'
                onChange={handlerChange}
                value={project.name}
                className='bg-zinc-800 text-white rounded-lg shadow-lg shadow-black p-4 block w-full mb-3'
            />
            <textarea
                name='description'
                rows={3}
                placeholder='Description...'
                onChange={handlerChange}
                value={project.description}
                className='bg-zinc-800 text-white rounded-lg shadow-lg shadow-black p-4 block w-full mb-3'></textarea>
            <button
                disabled={!project.name || !project.description || loading}
                className='bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400'>
                Submit
            </button>
        </form>
    );
}

export default ProjectForm;
