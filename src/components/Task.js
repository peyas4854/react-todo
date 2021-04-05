import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3 key={task.id}>
        {" "}
        {task.title} <FaTimes
        
        style={{ cursor:'pointer',color:'red' }}
        onClick={()=>onDelete(task.id)} />
      </h3>
    </div>
  );
};

export default Task;
