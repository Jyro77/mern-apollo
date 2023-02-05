import { useMutation } from "@apollo/client";
import { AiOutlineDelete } from "react-icons/ai";
import { DELETE_TASK } from "../../graphql/tasks";

interface task {
    _id: string;
    title: string;
}

export default function TaskCard({ _id, title }: task) {
    const [deleteTask] = useMutation(DELETE_TASK, {
        variables: {
            id: _id,
        },
        refetchQueries: ["getProject"],
    });
    return (
        <div className='bg-zinc-900 px-5 py-3 mb-2 flex justify-between'>
            <h1 className='text-sm'>{title}</h1>
            <button
                className=''
                onClick={() => {
                    deleteTask();
                }}>
                <AiOutlineDelete />
            </button>
        </div>
    );
}
