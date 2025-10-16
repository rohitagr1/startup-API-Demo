 import { startups } from "../data/data.js"
 
 export const getAllDatabyQuery = (req,res)=> {

    let filteredData = startups
    
    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

    if(industry){
        filteredData = filteredData.filter( startups => startups.industry.toLowerCase() === industry.toLocaleLowerCase())
    }
    if(country){
        filteredData = filteredData.filter( startups => startups.country.toLowerCase() === country.toLocaleLowerCase())
    }
    if(continent){
        filteredData = filteredData.filter( startups => startups.continent.toLowerCase() === continent.toLocaleLowerCase())
    }
    if(is_seeking_funding){
        filteredData = filteredData.filter( startups => startups.is_seeking_funding === JSON.parse(is_seeking_funding.toLocaleLowerCase()))
    }
    if(has_mvp){
        filteredData = filteredData.filter( startups => startups.has_mvp === JSON.parse(has_mvp.toLocaleLowerCase()))
    }
    //queries handled
    res.json(filteredData)

}