import TaskCard from "./TaskCard";

interface props {
    tasks: [
        {
            _id: string;
            title: string;
        },
    ];
}
function TasksList({ tasks }: props) {
    return (
        <div>
            {tasks.map(task => (
                <TaskCard key={task._id} _id={task._id} title={task.title} />
            ))}
        </div>
    );
}

export default TasksList;
