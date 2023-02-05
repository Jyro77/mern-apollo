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
            />
            <button disabled={!title || loading}>Submit</button>
        </form>
    );
}
