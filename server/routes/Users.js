const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwtUtils = require('../utils/jwt.utils');
const bcrypt = require('bcrypt');


const User =require('../models/User');

//users.use(cors());

users.post('/register',(req,res) => {
    const userData = {
        first_name : req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        password:req.body.password,
    };

    User.findOne({
        where: {
            email: userData.email
        }
    }).then(user => {
        if(userData.first_name == null || userData.last_name == null || userData.email == null || userData.password == null){
            return res.status(400).json({'error':'Missing parametres'});
        }
        if(!user){
            bcrypt.hash(userData.password,10, (err, hash) => {
                userData.password = hash;

                User.create(userData)
                    .then(user => {
                        res.json({status:user.email +' ' + 'Enregistrer'})
                    }).catch(err => {
                       res.send('error: ' + err)
                })
            })
        }else{
            res.json({error: 'Utilisateur existe deja'})
        }
    }).catch(err => {
        res.send('error: ' + err)
    })
});


users.post('/login',(req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, function(errBycrpt, resBycrypt){
                if(resBycrypt){
                    return res.status(200).json({
                        'Utilisateur': user.id,
                        'token': jwtUtils.generateToken(user)
                    })
                }else{
                    return res.status(403).json({'error': 'Mot de passe invalide'})
                }
            })
            // if(bcrypt.compareSync(req.body.password, user.password)){
            //     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            //         expiresIn: 1440
            //     });
            //     res.status(201).json({
            //         'Utilisateur': user.id,
            //         'Token': token
            //     })
            // }else{
            //     return res.status(403).json({'error': 'Mot de passe invalide'})
            // }
        }else{
            res.status(400).json({error: 'Utilisateur existe pas'})
        }
    }).catch(err => {
        res.status(400).json({error: err})
    })

});

module.exports = users;
