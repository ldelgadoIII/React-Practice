import { FaTimes } from "react-icons/fa"

const Task = ({ task: { text, day } }) => {
    return (
        <div className="task">
            <h3>{text} <FaTimes/></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
