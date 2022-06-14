import bcrypt from 'bcrypt'
//password lai hash garne

export const hashPassword = (password) =>{
    return new Promise( (resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if(err) {
                 console.log("Salting error")
                 reject(err);
            }
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    console.log("password hashing error")
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

//compares and return true or false
export  const compPassword = (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}