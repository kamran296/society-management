const Notice = require("../../Models/Notice");

module.exports.createNotice = async (req, res) => {
  try {
    // Create a new user
    const notice = await Notice.create({
      title: req.body.title,
      description: req.body.description,
    });

    success = true;
    res.json({ success, notice });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error in Creating Notices");
  }
};

module.exports.getAllNotice = async (req, res) => {
  let success = false;
  try {
    const notice = await Notice.find({});
    success = true;
    res.status(200).json({ success, notice });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error in Getting Notices");
  }
};

module.exports.deleteNotice = async (req, res) => {
  try {
    let notice = await Notice.findById(req.params.id);
    if (!notice) {
      return res.status(400).send("error in deleting");
    }
    // let value = note.user;

    // if (value.toString() !== req.user.id) {
    //   return res.status(400).send("error in deleting");
    // }

    notice = await Notice.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.status(400).send("error in deleting");
  }
};
