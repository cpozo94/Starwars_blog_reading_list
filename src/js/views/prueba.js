import React, {useState,useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/prueba.css";
import people from "../services/index.js";
import { Link } from 'react-router-dom';



const Prueba = () => {

	const [state,setState] = useState([])

async function getDataFromFunction(){
	const datafromFetch = await people()
	console.log(datafromFetch.results)
	const resultsDelFetch = datafromFetch.results[1].name
	console.log(resultsDelFetch)
	setState(resultsDelFetch)
}
	useEffect(()=>{
		getDataFromFunction();
	},[])

    return (
        <div className="container">
        <div className="image">
          <img src="https://source.unsplash.com/random/350x350/?soccer" alt="your-image" />
        </div>
        <div className="text p-4">
            <h2 className="text-center">{state}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a orci at augue tincidunt facilisis. Nulla quis fringilla mauris, in iaculis massa. Ut ut dictum nulla, vel ultricies metus. Phasellus vel ante tempor, venenatis dolor nec, efficitur lectus. Sed blandit massa nunc, ut tempus nunc euismod vitae. Fusce blandit pharetra.</p>
        </div>
        <footer className="footer mt-3">Your footer text here</footer>
      </div>
        


    )
}

export default Prueba;


{/* <div className="card col-6 ml-2">
<img src="https://source.unsplash.com/random/350x350/?soccer" className="img-fluid"/>
<div className="card-body">
<h5 className="card-title">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a orci at augue tincidunt facilisis. Nulla quis fringilla mauris, in iaculis massa. Ut ut dictum nulla, vel ultricies metus. Phasellus vel ante tempor, venenatis dolor nec, efficitur lectus. Sed blandit massa nunc, ut tempus nunc euismod vitae. Fusce blandit pharetra.

</h5>
<p className="card-text"></p>

</div>

</div> */}