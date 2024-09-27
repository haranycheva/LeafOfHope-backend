import { HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";

const deleteAdvert = async(req, res, next) => {
    const advertId = req.params.id;
    const advert = await Advert.findByIdAndDelete(advertId)
    
    if(!advert){
      throw HttpError(400, `Can not find a post with id ${advertId}`)
    }
    res.json({advert, message: "delete success"});
}

export default deleteAdvert