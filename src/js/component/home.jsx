import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	
	return (
		<div className="container-fluid">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div>{props.seis}</div>
			<div>{props.cinco}</div>
			<div>{props.cuatro}</div>
			<div>{props.tres}</div>
			<div>{props.dos}</div>
			<div>{props.uno}</div>
		</div>
	);
};

export default Home;
