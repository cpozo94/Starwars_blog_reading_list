const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites:[

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			changeColor: (index, color) => {
				
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addLike:(name) =>{
				const store= getStore();
				if(!store.favorites.includes(name)){
				setStore({favorites: [...store.favorites,name]})
				}
			},
			deleteLikes:(index)=>{
				const store= getStore();
				const arrayAux= [...store.favorites];
				arrayAux.splice(index,1);
				setStore({favorites:[...arrayAux]});
			}
		}
	};
};

export default getState;
