const Creator = require("../models/creator.model");

const savecreator = async (req, res) => {
  try {
    const { name, email } = req.body;
    const finduser = await Creator.findOne({ email: email });
    if (finduser) {
      return res.json({
        message: "User Already Exsist",
        success: true,
        userId:finduser._id
      });
    }
    const user = new Creator(req.body);

    const thesave = await user.save();
    if (thesave) {
      return res.json({
        message: "Data Saved",
        success: true,
        userId:thesave._id
      });
    } else {
      return res.json({
        message: "Data Not Saved",
        success: false,
      });
    }
  } catch (error) {
    console.log("error in saving", error);
    return res.json({
      message: "Data Not Saved",
      success: false,
    });
  }
};

module.exports = { savecreator };
