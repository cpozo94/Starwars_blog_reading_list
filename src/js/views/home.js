import React, {useState,useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import people from "../services/index.js";
import { Link } from 'react-router-dom';







export const Home = () => {

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
<div className="row">
  <div className="col-3 mr-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3 ml-2">
    <div className="card">
      <img src="https://source.unsplash.com/random/350x350/?soccer" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/people/:id">
            <span className="btn btn-outline-primary" role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-outline-primary" role="button">
            favourite
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



)};
/* /* <div classNameName="text-center col-6">
  <div classNameName="card">
    <img src="https://source.unsplash.com/random/350x350/?soccer" classNameName="img-fluid"/>
    <div classNameName="mt-3">
      <h5 classNameName="card-title text-start mb-4">{state}</h5>
    </div>
    <div classNameName="d-flex justify-content-between align-items-end px-3 pb-3">
      <Link to="/people/:id">
        <span classNameName="btn btn-outline-primary" role="button">
          Learn more!
        </span>
      </Link>
    </div>
    <div classNameName="card-body">
      <p classNameName="card-text"></p>
    </div>
  </div>
</div> */ 