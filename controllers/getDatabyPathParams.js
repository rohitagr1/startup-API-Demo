import { startups } from "../data/data.js"

export const getDtabyPathParams =  (req,res)=>{

        const { key , value} = req.params

        const allowedKey = [ 'country' ,'continent' ,'industry']

        if(!allowedKey.includes(key)){
            return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
        }

        let filteredData = startups;

        filteredData = filteredData.filter( startups => startups[key].toLocaleLowerCase() === value.toLocaleLowerCase())

        res.json(filteredData)
}