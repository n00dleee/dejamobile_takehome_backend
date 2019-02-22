var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	if (req.cookies['auth-private']) {
        //check if token is still valid
        auth.checkToken(req.cookies['auth-private']).then((result) => {
            //If token is expired
            if (result.statusCode == 400) {
                auth.refreshToken(req.cookies['auth-private']).then((result) => {
                  if (result.statusCode == 200) {
                        //encrypt and set a new cookie
                        res.cookie('auth-private', auth.encryptCookie(result.body));
                        return res.redirect(res.originalUrl)
                    }
                }).catch((err) => console.error(err));
            }
        })
    } else {
    	console.log("No cookie !");
    	res.redirect(baseAuthUri + '?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectUri + '&scope=private:admin auth:read auth:write openid email profile');
    }
    next();
});

