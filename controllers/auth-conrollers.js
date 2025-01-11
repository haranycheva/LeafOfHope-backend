import {ctrlWrapper} from "../decorators/index.js"
import { getInfo, logout, redactUser, signin, signup, signupVerification, verificate } from './auth/index.js'

export default {
    signup: ctrlWrapper(signup),
    signin: ctrlWrapper(signin),
    getInfo: ctrlWrapper(getInfo),
    logout: ctrlWrapper(logout),
    redactUser: ctrlWrapper(redactUser),
    signupVerification: ctrlWrapper(signupVerification),
    verificate: ctrlWrapper(verificate)
}