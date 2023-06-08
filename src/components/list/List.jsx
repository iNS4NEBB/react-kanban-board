import { useState } from "react";
import {Link} from "react-router-dom";
import {LIST_TYPES} from "../../config";
import {IconRemove} from "../../asset/icon-remove";
import FormAddNewTask from "../forms/FormAddNewTask";
import DropDown from "../dropdown/DropDown";
import "./List.css";

const List = props => {
	const { type, title, tasks, addNewTask, setTasks, task } = props;
	const [isFormVisible, setFormVisible] = useState(false);

	
	const handleClick = () => {
		setFormVisible (!isFormVisible );
	};
	const back = tasks.filter(obj => {return obj.status === "backlog"});
	const read = tasks.filter(obj => {return obj.status === "ready"});
	const inProgres = tasks.filter(obj => {return obj.status === "inProgress"});
	
	return (
		
		<div className= "list">
			<div className = "listItem">
			<p className= "taskTitle">{title}</p>
			{type === LIST_TYPES.BACKLOG && <span className="listRemove" onClick= {() => setTasks(tasks.filter(task => task.status !== "backlog"))}><IconRemove/></span>}
			{type === LIST_TYPES.READY && <span className="listRemove" onClick= {() => setTasks(tasks.filter(task => task.status !== "ready"))}><IconRemove/></span>}
			{type === LIST_TYPES.IN_PROGRESS && <span className="listRemove" onClick= {() => setTasks(tasks.filter(task => task.status !== "inProgress"))}><IconRemove/></span>}
			{type === LIST_TYPES.FINISHED && <span className="listRemove" onClick= {() => setTasks(tasks.filter(task => task.status !== "finished"))}><IconRemove/></span>}
			</div>
			{ task.length? 
				task.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className= "taskLink">
						<div className= "task" >{task.title}					
						</div>						
					</Link>
				) : <p>No tasks added yet</p>
			}
			
			{type === LIST_TYPES.BACKLOG && isFormVisible && ( <FormAddNewTask 
			        addNewTask = {addNewTask} 
			        setFormVisible = {setFormVisible}  /> 
			)}
			
			{type === LIST_TYPES.BACKLOG && <button className="addButton"    onClick={handleClick}  style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			{type === LIST_TYPES.READY &&  <button  className={ back.length === 0  ? " add" : "addButton"}   onClick={handleClick} disabled= {back.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			{type === LIST_TYPES.IN_PROGRESS &&  <button  className={ read.length === 0  ? " add" : "addButton"}   onClick={handleClick} disabled= {read.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}
			
			{type === LIST_TYPES.FINISHED && <button  className={ inProgres.length === 0  ? " add" : "addButton"}   onClick={handleClick} disabled= {inProgres.length === 0 } style={{ display: !isFormVisible ? "block" : "none" }} >+ Add card</button>}

			
			
			{type !== LIST_TYPES.BACKLOG && isFormVisible && ( <DropDown 
				type={type}
				tasks = {tasks}
				setFormVisible = {setFormVisible}
				isFormVisible = {isFormVisible}
				addNewTask = {addNewTask }
				    setTasks = {setTasks}
				task = {task}
				back = {back}
				read = {read}
				inProgres = {inProgres}

					
			/> 
					
			)}
			
		</div>
		
	);
};

export default List;
