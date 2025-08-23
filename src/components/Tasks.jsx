import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
    return(
        <ul className="space-y-3 p-6 bg-slate-200 rounded-md my-6 shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => props.onTaskClick(task.id)} 
                        className={`bg-slate-400 text-left w-full text-white p-2 cursor-pointer ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        
                    </button>

                    <button className="bg-slate-400 rounded-md p-2 text-white cursor-pointer">
                        <ChevronRightIcon />
                    </button>

                     <button 
                        onClick={(() => props.DeleteTask(task.id))}
                        className="bg-slate-400 rounded-md p-2 text-white cursor-pointer">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;