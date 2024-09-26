import ctrlWrapper from '../decorators/ctrlWrapper.js'
import { getInfo, logout, signin, signup } from './auth/index.js'

export default {
    signup: ctrlWrapper(signup),
    signin: ctrlWrapper(signin),
    getInfo: ctrlWrapper(getInfo),
    logout: ctrlWrapper(logout)
}