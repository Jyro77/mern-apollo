interface task {
    title: string;
}

export default function TaskCard({ title }: task) {
    return (
        <div>
            <h1>{title}</h1>
            <button>Delete</button>
        </div>
    );
}
