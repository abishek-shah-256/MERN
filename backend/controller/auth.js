import users from "../model/schema";
import { hashPassword, compPassword } from "../utils/auth";
import jwt from "jsonwebtoken";

export const SignUp = async (req, res) => {
  // console.log(req.body)
  const { username, password, email, address_state, address_city } = req.body;

  if (!username) return res.status(400).send("Name is required");
  if (!password) return res.status(400).send("Password is required");
  if (!email) return res.status(400).send("Email is required");
  if (!address_state) return res.status(400).send("Address is required");
  if (!address_city) return res.status(400).send("Address is required");

  let userExist = await users
    .findOne({
      username,
      email
    })
    .exec();
  if (userExist)
    return res.status(400).send("Username or email already exists");

  const hashedPassword = await hashPassword(password);
  // console.log(hashedPassword)

  const userData = new users({
    username,
    password: hashedPassword,
    email,
    address: {
      address_state,
      address_city,
    },
  });

  await userData.save();
  return res.json({ Message: "User has been registered" });
};


export const Login = async (req, res) => {
  const { username, password } = req.body;
  // console.log(req.body);
  try {
    const findUser = await users
      .findOne({
        username,
      })
      .exec();

    if (!findUser) return res.status(404).send("User xaina db ma!!");
    if (findUser) {
      const isMatch = await compPassword(password, findUser.password);

      if (!isMatch) return res.status(401).send("password not matched");

      const token = jwt.sign(
        {
          userId: findUser._id,
          username: findUser.username,
        },

        process.env.LOGIN_SECRET,
        {
          expiresIn: "7d",
        }
      );
      console.log(token);

      findUser.password = undefined;
      res.cookie("token", token, {
        //secure:true //jaba sama hhtps request bta aaudaina taba sama token save hudaina browser ma in production
        httpOnly: true
      });
      res.json(findUser);
    }

  } 
  //try block end
  catch (err) {
    console.log(err);
    console.log("error aayo");
  }
};

export const Logout=async(req,res)=>{
  res.clearCookie('token')
  return res.json({Message : "Bye Bye"})
}

export const Users = async (req, res) => {
  const userInfo = await users
    .find({
      //empty codda sabai aauxa
    })
    .select("-password")
    .exec();
  //console.log(userInfo)
  res.json(userInfo);
};

//Getting data from db for editing user-->
export const SingleUser = async (req, res) => {
  const { id } = req.body;
  let findSingleUser = await users
    .findById(id) //.select('-password')
    .exec();
  res.json(findSingleUser);
  console.log(findSingleUser);
};
//editing user---->
export const EditUser = async (req, res) => {
  console.log("backma data aako" + req.body.id);
  const { id, username, password, email, address_state, address_city } =
    req.body;

  const updateUser = await users
    .findByIdAndUpdate(id, {
      username,
      password,
      email,
      address: { address_state, address_city },
    })
    .exec();
  res.status(200).send("user updated successfully");
};

export const DeleteUser = async (req, res) => {
  console.log(req.query);
  const { userid } = req.query;

  const deleteUser = await users.findByIdAndDelete(userid).exec();
  res.status(200).send("User deleted successfullly");
};
