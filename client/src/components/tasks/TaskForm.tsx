import { ChangeEvent, FormEvent, useState } from "react";
import { CREATE_TASK } from "../../graphql/tasks";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function TaskForm() {
    const [title, setTitle] = useState("");
    const params = useParams();

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
        variables: {
            title: title,
            projectId: params.id,
        },
        refetchQueries: ["getProject"],
    });

    const handlerSubmit = (e: FormEvent) => {
        e.preventDefault();
        createTask();
        setTitle("");
    };
    return (
        <form onSubmit={handlerSubmit}>
            {error && <p>{error.message}</p>}
            <input
                type='text'
                name='title'
                onChange={handlerChange}
                value={title}
                className='bg-zinc-900 text-white w-full p-2 rounded-lg mb-2'
                placeholder='Add Task'
            />
            <button
                disabled={!title || loading}
                className='bg-blue-500 w-full px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400'>
                Submit
            </button>
        </form>
    );
}
