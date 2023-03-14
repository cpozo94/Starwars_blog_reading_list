const URL ="https://www.swapi.tech/api/people"

const people = async () => {
    const response = await fetch(URL)
    const dataResponse = await response.json();
    return dataResponse
    
}


export default people;