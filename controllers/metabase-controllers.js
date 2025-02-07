import {ctrlWrapper} from "../decorators/index.js"
import {getMetabaseLink} from "./metabase/index.js"


export default {
    getMetabaseLink: ctrlWrapper(getMetabaseLink)
}