const fetchData = require('./../../utils/fetchData');

const API = 'https://www.easports.com/fifa/ultimate-team/api/fut/item';

const getData = async(url_api) =>{
    try{
        const data = await fetchData(url_api);
        const count = data.count;

        for (var i = 0; i < count; i++){
            const name = data.items[i].name;
            console.log(name);
            const position = data.items[i].positionFull;
            console.log(position);
            const nation = data.items[i].nation.name;
            console.log(nation);
            const teamName = data.items[i].club.name;
            console.log(teamName);         
        }
    } catch (error) {
        console.log(error);
    }
}

getData(API);