
//React
import { useEffect, useState } from "react";

//Components
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

function App() {

	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);

	useEffect(()=> {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	return (
		<div className="App">
			<div className="container">
				<AddTask setTodos={setTodos}/>
				<Tasks todos={todos} setTodos={setTodos}/>
			</div>
		</div>
	);
}

export default App;
