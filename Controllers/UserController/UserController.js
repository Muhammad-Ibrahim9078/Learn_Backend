import jwt from "jsonwebtoken";
import UserModal from "../../Model/UserModel.js";



const welcometoDb = (req, res)=>{
    return res.send({
        status: true,
        messege: "Welcome to Node Js."
    })
}

const createUser = async (req, res)=>{
    console.log(`Body: ${req.body}`)

    try {

        const bodyValues = Object.values(req.body)
        const isValidate = bodyValues?.some((item)=>{
            return item == "";
        });

        if(isValidate){
            return res.status(400).send({
                status: false,
                messege: "All fields are Required",
            });
        }
           const isUserExit = await UserModal.findOne({email: req?.body?.email});
            if(isUserExit){
                return res.status(404).send({
                    status: false,
                    messege: "User with this Email Already Exist",
                });
            }


        
    } catch (error) {
        
    }


    




}













            const fetchAllUser = async (req, res)=>{
                // try {
                    const counts = await UserModal.countDocuments();
                    console.log(`counts ${counts}`)
                    res.send(counts)
                    
                // } catch (error) {
                    
                // }
            }

            
export {welcometoDb, createUser, UserModal ,  fetchAllUser};
