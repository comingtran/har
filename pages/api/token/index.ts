
import { NextApiRequest, NextApiResponse } from "next"
import { writeFileSync } from 'fs';

const index = (req: NextApiRequest, res: NextApiResponse)=>{
   
if(req.method === 'POST'){
    
    const {token_type, expires_in, access_token, scope, refresh_token}=req.body
    const data = "token_type: "+ token_type +", expires_in:" + expires_in +", access_token: "+ access_token +", scope: "+scope+", refresh_token:"+ refresh_token
    //writeFileSync('./accesstoken.json',data)
    res.status(200).json({token_type: token_type, expires_in: expires_in, access_token:access_token, scope:scope, refresh_token: refresh_token})
}else{
    res.status(200).json({message: "Không dúng với tiêu chi của abcd"})
}
}
export default index
/**"token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "gOq8Lo4vJ4lK1CykzIgJLW_1A18inCVguNEMGm7h0Ecc8qOEq0WrOJXk3vIAbCnfKZD8SWgL",
  "scope": "photo offline_access",
  "refresh_token": "ZLJ2JiXdPSXcxePtpC7Ikeav" */