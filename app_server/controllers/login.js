const login = function(req, res)
{
    res.render('index', { title: 'Login'});
};

module.exports = 
{
    login
};