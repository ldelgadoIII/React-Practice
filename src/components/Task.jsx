import { FaTimes } from "react-icons/fa"

const Task = ({ task: { text, day, id }, onDelete, onToggle }) => {
    return (
        <div className="task" onDoubleClick={() => onToggle(id)}>
            <h3>{text} <FaTimes style={{ color: "red", cursor: "pointer"}} onClick={() => onDelete(id)}/></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
