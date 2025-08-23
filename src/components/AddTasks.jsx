import { useState } from "react";

function AddTasks(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mt-10 flex flex-col">
            <input 
            type="text" 
            placeholder="Digite o título da tarefa"
            className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            ></input>

            <input 
            type="text" 
            placeholder="Digite a descrição da tarefa"
            className="bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            ></input>

            <button onClick={() => {
                if(!title.trim() || !description.trim()) {
                    return;
                }

                props.AddTaskSubmit(title, description)
                setTitle("");
                setDescription("");
            }} 
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">Adicionar</button>
        </div>
    );
}

export default AddTasks;