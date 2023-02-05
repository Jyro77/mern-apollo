import ProjectForm from "../components/projects/ProjectForm";
import ProjectList from "../components/projects/ProjectList";

function Projects() {
    return (
        <div className='bg-zinc-900 rounded-lg shadow-lg shadow-black p-8 h-4/5 w-3/5'>
            <h1 className='text-2x1 font-bold py-2 mb-4'>Project Manager</h1>
            <div className='flex justify-between gap-x-1'>
                <ProjectForm />
                <ProjectList />
            </div>
        </div>
    );
}

export default Projects;
