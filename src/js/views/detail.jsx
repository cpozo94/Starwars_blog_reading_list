import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getStarWars } from "../service/index.js";
import "../../styles/detail.css";

const baseURL = "https://starwars-visualguide.com/assets/img";

const Detail = () => {

	const params = useParams();
	const [info, setInfo] = useState({});

	const getInfo = async (material) => {
		const data = await getStarWars(material);
		setInfo(data.result.properties);
	}

	const { url, created, edited, homeworld, pilots, films, ...keydelete } = info;

	const keyFilter = Object.keys(keydelete).reverse();

	useEffect(() => {
		getInfo(`${params.type}/${params.id}`)
	}, [])

	let imgid = '';
	if (params.type == 'people') {
		imgid = 'characters';
	} else {
		imgid = params.type;
	}

	return (
		<div className="container-fluid">
			<div className="card m-3" >
				<div className="row g-0">
					<div className="col-md-4">
						<img src={(imgid == 'planets' && params.id == 1) ? `${baseURL}/big-placeholder.jpg` : `${baseURL}/${imgid}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-6">
						<div className="card-body justify-content-center">
							<h1 className="card-title"><strong>{info.name}</strong></h1>
							<h4 className="card-title"> Category: {imgid} </h4>
							<p className="card-text">
								Lorem ipsum dolor sit amet. Ut dicta voluptas et odit voluptatem est possimus veritatis aut nesciunt dolore et iure consequatur. Eos rerum eaque ut dolor vitae et dolores atque?
								Aut minus enim aut molestiae dolorem sed quidem eaque aut ipsam doloremque ut enim odio qui accusantium exercitationem? A eligendi enim eum sequi inventore ad harum asperiores. Aut maxime unde aut autem alias rem rerum unde et mollitia fuga.
								Aut beatae architecto et fugiat molestiae sed voluptas voluptate vel harum dolorum est alias dolores qui itaque voluptate quo numquam doloremque. Ut eaque repellendus in quasi doloremque et delectus debitis ut amet voluptas est similique iste ut inventore beatae rem placeat saepe.
							</p>

						</div>
					</div>
				</div>
			</div>
			<div className="table-responsive m-3">

				<table className="table align-middle">
					<thead>
						<tr>
							{keyFilter.map((keys, index) => <th key={index}>{keys}</th>)}
						</tr>
					</thead>
					<tbody className="border-top-0" >
						<tr>
							{keyFilter.map((keys, index) => <td key={index}>{info[keys]}</td>)}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
};

export default Detail