const Tasks = ({ tasks }) => {
    return (
        <>
          {tasks.map(({ text, id }) => {
              return(
                  <h3 key={id}>{text}</h3>
              )
          })}
        </>
    )
}

export default Tasks
