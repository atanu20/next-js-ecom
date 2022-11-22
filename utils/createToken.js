import jwt from 'jsonwebtoken'

export const createToken=(payload)=>{
    let token=jwt.sign(payload,'abababababababababab@',{
        expiresIn:'1d'
    })
    return token;

}