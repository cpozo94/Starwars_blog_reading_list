const URL="https://www.swapi.tech/api/"

export const getStarWars= async (material) =>{
    try{
        const URLconcat=`${URL}${material}`;
        const response= await fetch(URLconcat,{method: 'GET'});
        const data= await response.json();
        return data;
    }
    catch(err){
        console.log(err)
    }
}