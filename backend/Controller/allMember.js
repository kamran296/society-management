// Getting all the member who signuped
const Users = require("./../Models/Users");
module.exports.getAllMember = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ user: users });
  } catch (err) {
    console.log("errore", err);
  }
};
