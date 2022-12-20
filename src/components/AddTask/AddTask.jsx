
//React
import { useState } from "react";

//Uuid
import { v4 as uuidv4 } from "uuid";

//React Icons
import { MdKeyboardArrowRight } from "react-icons/md";

//Styles
import "./addTask.scss";

const AddTask = ({setTodos}) => {

    const [value, setValue] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        if (value === "" ) {
            setValue("What's the point of an empty task?")
        } else if (value.length > 30) {
            setValue("No more than 30 characters")
        } else {
            const item = {
                id: uuidv4(), 
                text: value
            }
            setTodos(prev => {
                return [...prev, item];
            })
            setValue("");
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <section className="add-task">
            <div className="add-task__wrapper">
                <form onSubmit={onSubmit}>
                    <label className="add-task__label" htmlFor="add">
                        <input
                        className="add-task__input task--inverse" 
                        id="add" 
                        type="text"
                        onChange={onChange}
                        value={value} 
                        placeholder="Add new task"/>
                        <button className="add-task__btn" onSubmit={onSubmit}>
                            <MdKeyboardArrowRight size={40}/>
                        </button>
                    </label>
                </form>
            </div>
        </section>
    )
}

export default AddTask;