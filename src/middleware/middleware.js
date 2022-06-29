exports.middlewareglobal= (req,res,next) =>{
    res.locals.errors = req.flash('errors');
    res.locals.success =req.flash('success');
    res.locals.user = req.session.user;
    next();
}

exports.outromiddleware =(req,res,next)=>{
    console.log('sou seu outro middleware');
    next();
}


exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
    next();
    }

  exports.csrfMiddleware = (req, res, next)=>{
  res.locals.csrfToken = req.csrfToken();
    next();
  }

  exports.loginRequired = (req,res,next) =>{
    if(!req.session.user){
        req.flash('errors', 'Você precisa fazer o login.');
        req.session.save(()=> res.redirect('/'));
        return;
    }

    next();
  }