import {findValuesThatNeedToBeTranslated, translateAdvert} from "./index.js"

const translateEditedValues = async(editedValues, _id) => {
    const [toTranslate, toStaySame] = await findValuesThatNeedToBeTranslated(editedValues, _id)
    const translated = await translateAdvert(toTranslate)
    return {...translated, ...toStaySame}
}

export default translateEditedValues