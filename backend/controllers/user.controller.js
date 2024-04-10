import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res)=>{

    try{

        const loggedInUserId = req.user._id;

        const allUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");      // all users except the loggedin one
        // console.log('------------------------------------------ Logged In --------------------------------------------------')
        // console.log(loggedInUserId);

        // console.log('------------------------------------------ All --------------------------------------------------')

        // console.log(allUsers);

        res.status(200).json(allUsers);


    }catch(error){
        console.log('Error in getUsersForSidebar controller', error.message);
        res.status(500).json({error : "Internal Server Error"});
    }

}