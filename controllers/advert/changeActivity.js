import { HttpError } from "../../helpers/index.js";
import { Advert } from "../../models/Advert.js";
import { advertDeactivationData } from "../../models/advertDeactivationData.js";

const changeActivity = async (req, res, next) => {
  const advertId = req.params.id;
  const { _id: owner } = req.user;
  const { active, reason } = req.body;
  const editedAdvert = await Advert.findOneAndUpdate(
    { _id: advertId, owner },
    { active }
  );
  if (!editedAdvert) {
    throw HttpError(404, `Can not find an advert with id ${advertId}`);
  }
  if (active) {
     return res.json({
      message: "setting advert active is successful",
      advert: editedAdvert,
    });
  }
  if(!reason){
    throw HttpError(400, `Please add reason of making advert inactive`);
  } 
  const changedActivityStats = await advertDeactivationData.create({owner, advertFrom: advertId, reason})
  if(!changedActivityStats){
    throw HttpError(500, `Couldn't change active statistics, but your advert was updated`);
  }
  res.json({
    message: `setting advert inactive is successful, reason: ${reason}`,
    advert: editedAdvert,
  })
};

export default changeActivity