function loginRequired(req,res,next){
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  }
  next();
}

function adminRequired(req,res,next){
  if (req.user.is_admin !=1) {
    res.redirect('/403');
  }
  next();
}


module.exports = {
  loginRequired,
  adminRequired
}
