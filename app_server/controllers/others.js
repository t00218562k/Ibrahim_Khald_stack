/* GET home page */
const about = function(req, res){
  res.render('index', { title: 'this about' });
};

module.exports = {
  about
};