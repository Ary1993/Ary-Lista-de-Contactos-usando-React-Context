import React from "react";
import { TodoList } from "./TodoList.jsx";
import { TodoListFetch } from "./TodoListFetch.jsx";
import Navbar from '../component/Navbar.jsx';


//create your first component
const Home = () => {

	const handleErrorImg = (event) => {
		event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}

	return (
		<div className="text-center">
			<div className="cover-container d-flex w-75 p-4 mx-auto flex-column">	
			<img onError={handleErrorImg}
					src={"https://starwars-visualguide.com/assets/img/planets/3.jpg"} />
			</div>
		</div>
	);
};
export default Home;