
const fecthData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const showDataFromAPI = async (url_api) => {
	try{
		const data = await fecthData(url_api);
		const character = await fecthData(`${url_api}${data.results[0].id}`);
		const location = await fecthData(character.origin.url);
		console.log(data.info.count);
		console.log(character.name);
		console.log(location.dimension); 
	}catch(e){
		console.error(e);
	}
}

console.log('Before');
showDataFromAPI(API);
console.log('After');