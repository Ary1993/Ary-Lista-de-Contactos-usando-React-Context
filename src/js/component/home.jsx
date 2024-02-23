import React from "react";
import { TodoList } from "./TodoList.jsx";
import { TodoListFetch } from "./TodoListFetch.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> Todo List Usando Fetch</h1>
			<TodoListFetch />
		</div>
	);
};
export default Home;