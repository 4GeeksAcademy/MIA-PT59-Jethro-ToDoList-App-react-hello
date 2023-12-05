import React, {useState} from "react";


//create your first component
const Home = () => {
	
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	//const saveTodos;

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				
				<li id="l1">
					<input type="text" onChange={(e)=> setInputValue(e.target.value)}
						value = {inputValue} 
						onKeyPress ={(e)=> {
							if(e.key === "Enter"){
								setTodos([inputValue,...todos]);
								setInputValue("");
							}
						}
					}
					placeholder="What do you need to do?">
					</input>	
				</li>
				
				{todos.map((item, index)=>{
					return	<li key={index} id="index">
						{item}<i className="fas fa-trash-alt"
								onClick={()=>
									setTodos(
										todos.filter(
											(t, currentIndex)=>
												index != currentIndex
											)
										)	
							}></i>
					</li>
				})}
				
			</ul>
			<div>
				<h3> <strong>
					{todos.length} items left
				</strong> </h3>
			</div>
		</div>
	);
};

export default Home;
