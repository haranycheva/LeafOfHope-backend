import { Advert } from "../../models/Advert.js"
import {HttpError} from "../index.js";

const findValuesThatNeedToBeTranslated = async ({name = "", description = "", wish = ""}, _id) => {
    const editedValues = {name, description, wish}
    const oldAdvert = await Advert.findOne({_id})
    if (!oldAdvert) {
        throw HttpError(404, `Can not find an advert with id ${_id}`);
      }
    const needsTranslation = {}
    const needsToBeSame = {}
    for(const key in editedValues){
        if(editedValues[key] !== oldAdvert[key] && editedValues[key]){
            needsTranslation[key] = editedValues[key]
        } else if (oldAdvert.translated[key]) {
            needsToBeSame[key] = oldAdvert.translated[key]
        }
    }
    return [needsTranslation, needsToBeSame]
}

export default findValuesThatNeedToBeTranslated

