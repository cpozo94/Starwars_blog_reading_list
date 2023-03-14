import React, {useState,useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import people from "../services/index.js";







export const Home = () => {

	const [state,setState] = useState([])

async function getDataFromFunction(){
	const datafromFetch = await people()
	console.log(datafromFetch.results)
	const resultsDelFetch = datafromFetch.results[0].name
	console.log(resultsDelFetch)
	setState(resultsDelFetch)
}
	useEffect(()=>{
		getDataFromFunction();
	},[])





	return (
	<div className="text-center col-6">
		<div className="card">
  			<img src="https://picsum.photos/200/300" className="card-img-top"/>
  		<div className="card-body">
    	<h5 className="card-title">{state}</h5>
    	<p className="card-text"></p>
    	<a href="#" className="btn btn-primary">
			
		</a>
  		</div>
		</div>
		
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
