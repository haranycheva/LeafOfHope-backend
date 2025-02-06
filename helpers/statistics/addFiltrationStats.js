import { filtrationStatistics } from "../../models/filtrationStatistics.js"
import {HttpError} from "../index.js"

const addFiltrationStats = async(filtration) => {
    const newFiltrashionStats = await filtrationStatistics.create({...filtration})
    if(!newFiltrashionStats){
        throw HttpError(500, "could not write filtration statistics")
    }
    return newFiltrashionStats
}

export default addFiltrationStats