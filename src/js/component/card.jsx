import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

const baseURL= "https://starwars-visualguide.com/assets/img";

const Card = ({elemento,picture,type}) =>{
    
	const {store,actions}=useContext(Context);
	
    const navigate= useNavigate();
	
	let imgid='';
	if (type=='people'){
		imgid='characters'; 
	}else{
		imgid=type;
	}

	const handleClick=()=>{
		navigate(`/${type}/${elemento.uid}`)
	}

    const handleClickLike=()=>{
		actions.addLike(elemento.name)
		actions.changeColor(elemento.uid)
	}

    return(
        <div className="card p-0 mx-3" style={{width: '300px'}}>
			<img src={(imgid=='planets' && elemento.uid==1)?`${baseURL}/big-placeholder.jpg`: `${baseURL}/${imgid}/${elemento.uid}.jpg`} className="img-fluid" /> 
			<div className="card-body d-flex align-items-end">
				<div className="card-body ">
					<h4 className="card-title"><strong>{elemento.name}</strong></h4>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<div className="d-flex justify-content-between">
						<a onClick={()=>handleClick()}  className="btn btn-outline-primary">Learn More!</a>
						<a onClick={()=>handleClickLike()} className={store.favorites.includes(elemento.name)?"btn btn-warning":"btn btn-outline-warning"}><i className="far fa-heart"></i></a>
					</div>
				</div>	
			</div>
		</div>
    )
}

export default Card;