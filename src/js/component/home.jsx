import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<i className="far fa-clock"></i>
				</div>
				<div className="col">{props.seis}</div>
				<div className="col">{props.cinco}</div>
				<div className="col">{props.cuatro}</div>
				<div className="col">{props.tres}</div>
				<div className="col">{props.dos}</div>
				<div className="col">{props.uno}</div>
			</div>
		</div>
	);
};

export default Home;
