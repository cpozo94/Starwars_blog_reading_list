import React, { useState, useEffect } from "react";
import Card from "../component/card.jsx";
import { getStarWars } from "../service/index.js"
import "../../styles/home.css";

const Home = () => {

	const [load, setLoad] = useState(false);
	const [datacomplete, setDatacomplete] = useState({
		people: [],
		planets: [],
		vehicles: []
	})

	const getData = async (material) => {
		const data = await getStarWars(material);
		return data.results
	}

	const getIniData = async () => {
		const people = await getData('people');
		const planets = await getData('planets');
		const vehicles = await getData('vehicles');
		setDatacomplete({ people, planets, vehicles })
		setLoad(true);
	}

	useEffect(() => {
		getIniData();
	}, [])

	return (
		<>
			{load ?
				<div className="container-fluid px-5">
					<h1 className="titulo">Characters</h1>
					<div className="contenedorscroll">
						<div className="row flex-row flex-nowrap">
							{(datacomplete.people).map((people, index) => <Card elemento={people} type="people" key={index} />)}
						</div>
					</div>
					<h1 className="titulo">Planets</h1>
					<div className="contenedorscroll">
						<div className="row flex-row flex-nowrap">
							{(datacomplete.planets).map((planets, index) => <Card elemento={planets} type="planets" key={index} />)}
						</div>
					</div>
					<h1 className="titulo">Vehicles</h1>
					<div className="contenedorscroll">
						<div className="row flex-row flex-nowrap">
							{(datacomplete.vehicles).map((vehicles, index) => <Card elemento={vehicles} type="vehicles" key={index} />)}
						</div>
					</div>
				</div> :
				<div className="d-flex justify-content-center">
					<div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			}
		</>
	)
}

export default Home;