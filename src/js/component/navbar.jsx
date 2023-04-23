import React, {useContext} from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Navbar = () => {

	const {store,actions}=useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="btn-group ">
				<button type="button" className="d-flex btn btn-primary dropdown-toggle align-items-center justify-content-around"  style={{width:'200px', fontSize:'27px'}} data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
					<div>Favorites </div><div className="bg-secondary m-1" style={{width:'55px'}}>{store.favorites.length}</div>
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end" style={{fontSize:'20px'}}>
					{store.favorites.length===0 ? <h5>'empty'</h5> : store.favorites.map((name,index)=>
						<li className="d-flex justify-content-between p-2" key={index}>
							{name} <a onClick={()=>actions.deleteLikes(index)} className="btn btn-outline-primary">X</a>
						</li>)
					}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;