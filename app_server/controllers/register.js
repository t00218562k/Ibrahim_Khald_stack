const register = function(req, res)
{
    res.render('register', { title: 'Registration'});
};

module.exports = 
{
    register
};