const Users         = require("../models/users");
const _self         = {}; 

_self.getUser = async (req, res, next) => {

    var req_body = req.body || null;

    if(!req_body) 
        return res.send("Empty request data");

    if(!req_body.email_id)
        return res.send("Empty Email id");

    try {
        const user_data = await Users.findOne({ email_id : req_body.email_id });

        if(!user_data)
            return res.send('Invalid Email Id');
        
        res.send('respond with a resource');
    } catch (error) {
        res.send('error');
    }
}

module.exports = _self;