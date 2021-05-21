//
/**
 *
 * вобщем чтобы получить токен по юзеру - этого юзера надо сначала завести
 *
 *
 *
 *
 * https://conduit.productionready.io/api/users
{
	"user":{
	
	"email": "test1937@ddd.com",
		"password": "Qwerty123",
		"username":"sergei"
}
}


//или курлом в терминале
curl --location --request POST 'https://conduit.productionready.io/api/users' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
--header 'Cookie: __cfduid=d9928802e090eb03ec934c56fdb64dbd71611412695' \
--data-raw '{
"user":{
	
	"email": "test1937@ddd.com",
		"password": "Qwerty123",
		"username":"sergei"
}
}
 *
 *
 *
 *
 *
 *
 * ну и если интересно - ошибка 422 сетилась вот тут
passport.authenticate('local', {session: false}, function(err, user, info){
    if(err){ return next(err); }

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
 *
 *
 *
 *
 *
 *
 *
 */


