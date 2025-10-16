import { getAllDatabyQuery } from "../controllers/getAllDatabyQuery.js";
import { getDtabyPathParams } from "../controllers/getDatabyPathParams.js";
import { startups } from "../data/data.js";
import express from 'express'

export const apiRoutes = express.Router()

// now we want to handle queries for {industry, country, continent, is_seeking_funding, has_mvp} these features
apiRoutes.get('/' , getAllDatabyQuery  )
//handleing parameters for country ,continent,industry
apiRoutes.get('/:key/:value', getDtabyPathParams)

