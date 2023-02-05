import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects";

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
        <form onSubmit={handlerSubmit}>
            {error && <p>{error.message}</p>}
            <input
                type='text'
                name='name'
                placeholder='Title of project'
                onChange={handlerChange}
                value={project.name}
            />
            <textarea
                name='description'
                rows={3}
                placeholder='Description...'
                onChange={handlerChange}
                value={project.description}></textarea>
            <button disabled={!project.name || !project.description || loading}>
                Submit
            </button>
        </form>
    );
}

export default ProjectForm;
