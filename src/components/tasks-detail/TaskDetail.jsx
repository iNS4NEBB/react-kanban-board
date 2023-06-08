import { useState } from "react";
import {useMatch, Link} from "react-router-dom";
import "../tasks-detail/TaskDetail.css";




const TaskDetail = (props) => {
	
	const [isEdit, setIsEdit] = useState(false);
	const match = useMatch("tasks/:taskId");
	const {taskId} = match.params;
	const {tasks,setTasks } = props;
	const tas = tasks.find(task => task.id === taskId); 
	
	let elem;
	if (!isEdit) {
		elem = <span className="descript" title="Редактировать" onClick={(e) => setIsEdit(true) }>
			{tas.description || "This task has no description"}
		</span>;
	} else {
		
		elem = <textarea 
		    className="area-text"
		    name="description"
			value={tas.description}
			onChange={event => setTasks(tasks.map(task => task.id === taskId ? {...task, [event.target.name]: event.target.value} : task
			))}
			onBlur={() => setIsEdit(false)}/>;
		
	}
	
    

	return (
		<div className="wrapper2">
			
			<div className='header2'>
				<h2 className='title2'>{tas.title}</h2>
			
				<p className="text-area">{elem}</p>
				
			</div>
			  <Link to='/' className="homeLink">&#9587;</Link>
	   
		</div>
	);
	
	
};

export default TaskDetail;
