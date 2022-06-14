import jwt from "jsonwebtoken";

export const requireSignIn = (req,res,next) =>{
    // console.log(req.cookies.token)
    const myToken = req.cookies.token
    if(!myToken) return res.status(401).send('Unauthorizeddd!!!!<')
    jwt.verify(myToken, process.env.LOGIN_SECRET,
        async function(err,success){
            if(err) return res.status(401).send("User Session Expire")
             const {userId} = jwt.decode(myToken)
            // {userId,username} = myToken
            console.log(`id ho token ma save vko ${userId}`)
    })
    next();

}