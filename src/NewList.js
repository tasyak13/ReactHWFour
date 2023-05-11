import { useState } from 'react';



function NewList() {
    const [tasks, setTask] = useState([]);
    const [formData, setFormData] = useState({
        title: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        setTask(tasks => [...tasks, formData]);
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                <br />
                <br />
                <button type="submit">Add</button>
            </form>

            <ol>
                {
                    tasks.map((task) => 
                        <li>{task.title}</li>)
                }
            </ol>
        </>
    );
} 


export default NewList;