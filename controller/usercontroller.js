const user = require('../models/user');
const book = require('../models/books');

const usercontroller={
    displayindex:function(req,res){
        delete req.session.user
        delete req.session.result
        delete req.session.book_result
        res.render('index'); //before login
    },

    homepage:function(req,res){
        user.find({username:req.session.user},null, function(error, result){
                console.log(result)
                if(error){ console.log(error), res.redirect('/')}
                else if(result.length==0){ res.redirect('/')}
                else{ res.render('home')}
        })
    },
    
    displaysignup:function(req,res){
        res.render('signUp'); 
    },

    storesignup:function(req,res){
        const users = new user({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        users.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.redirect("/");
            }
        });
    },
    loginuser:function(req,res){
        uname = req.body.username;
        psw = req.body.password;
    
        user.find({ username: uname}, function (err, result) {
            if (err){
                console.log(err);
            } else{
                if(result.length == 0) {
                    res.render('index');
                }else{
                    if(psw == result[0].password) {
                        book.find({}, function (err, book_result) {
                            if (err){
                                console.log(err);
                            } else{
                                req.session.user = uname;
                                req.session.result = result;
                                req.session.bookarchive = book_result
                                res.render('profilePage',{ 
                                    searchresult : result,
                                    bookarchive : book_result
                                });
                               
                            }
                        });
                    }else{
                        res.render('index');
                    }
                }
            }
        });
    },

    displaychangepw:function(req,res){
        res.render('changePassword');
    },

    displayprofilepage:function(req,res){
        user.find({username:req.session.user},null, function(error, result){
            console.log(result)
            if(error){ console.log(error), res.redirect('/')}
            else if(result.length==0){ res.redirect('/')}
            else{ res.render('profilePage',{ 
                searchresult : req.session.result,
                bookarchive : req.session.bookarchive
            })}
        })
    },

    displaygenre:function(req,res){
        book.find({bookgenre:"Coming of Age"},function(err,COA){
            if (err){
                console.log(err);
            } 
            else
            {
                book.find({bookgenre:"Action and Adventure"},function(err,action){
                    if (err){
                        console.log(err);
                    } 
                    else
                    {
                        book.find({bookgenre:"Romance"},function(err,romance){
                            if (err){
                                console.log(err);
                            } 
                            else
                            {
                                book.find({bookgenre:"Suspense"},function(err,suspense){
                                    if (err){
                                        console.log(err);
                                    } 
                                    else
                                    {
                                        book.find({bookgenre:"Children's"},function(err,children){
                                            if (err){
                                                console.log(err);
                                            } 
                                            else{
                                                res.render('genre',{
                                                    genre1:COA,
                                                    genre2:action,
                                                    genre3:romance,
                                                    genre4:suspense,
                                                    genre5:children
                                               });
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    },

    displayedit:function(req,res){
        user.find({username:req.session.user},null, function(error, result){
            console.log(result)
            if(error){ console.log(error), res.redirect('/')}
            else if(result.length==0){ res.redirect('/')}
            else{ res.render('edit')}
        })
        // res.render('edit'); //edit profile page
    },

    searchbook:function(req,res){
        const searchtext = req.body.search;
        
        console.log(req.body.search);
        book.find({booktitle:searchtext},function(err,result){
            if (err){
                console.log(err);
            } else{
                console.log(result);
                if(result.length != 0){
                    res.render('searchhome', {
                        searchresult : result,
                        search_result : result.length
                    });
             } else{
                res.render('searchhome',{search_result: 0});
            }
            }
        })
    },

    searchbookindex:function(req,res){
        const searchtext = req.body.search;
        console.log(req.body.search);
        book.find({booktitle:searchtext},function(err,result){
            if (err){
                console.log(err);
            } else{
                console.log(result);
                if(result.length != 0){
                    res.render('searchindex', {
                        searchresult : result,
                        search_result : result.length
                    });
             } else{
                res.render('searchindex',{search_result: 0});
            }
            }
        })
    },

    displaybookinfo:function(req,res){     
        const userId = req.params.userId;
        book.find({ _id: userId}, function (err, result) {
            if (err){
                console.log(err);
            } else
            {
                res.render('bookinfo',{
                    searchresult : result,
                });
            }
        });         
    },


}
module.exports=usercontroller;


