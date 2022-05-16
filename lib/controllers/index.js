const Users         = require("../models/users");
const _self         = {}; 

_self.homepage = async (req, res) => {
    res.render('index', { title: 'Welcome to homepage',  });
}


_self.dashboard = async (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        message : 'Welcome to Dashboard page'
    });
}
module.exports = _self;