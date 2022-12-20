
//React Icons
import { FaTrash } from "react-icons/fa";

const TaskItem = ({text, id, onDeleteTask}) => {
    return (
        <div className="tasks__item task" onClick={()=>onDeleteTask(id)}>   
            {text}
            <FaTrash  
            className="tasks__icon" 
            size={20}
            />
        </div>
    )
}

export default TaskItem;