
//Components
import TaskItem from "../TaskItem/TaskItem";

//Styles
import "./tasks.scss";

const Tasks = ({todos, setTodos}) => {

    const onDeleteTask = (id) => {
        const copy = [...todos];
        const filter = copy.filter(item => item.id !== id);
        setTodos(filter);
    }

    const taskList = todos.map(item => {
        return (
            <TaskItem
            key={item.id}
            text={item.text}
            id={item.id}
            todos={todos}
            setTodos={setTodos}
            onDeleteTask={onDeleteTask}
            />
        )
    })

    return (
        <section className="tasks">
            <div className="task-container">
                <div className="tasks__list">
                    {taskList}
                </div>   
            </div>
        </section>
    )
}

export default Tasks;