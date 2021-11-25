const { Router } = require('express');
const router = Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');
router.get('/', (req,res)=> res.send('hello world'))

router.post('/signup', async (req,res)=>{
    const { email, password} = req.body;
    const newUser =  new User({
        email,password
    });
    await newUser.save();

    const token =jwt.sign({
        id:newUser._id
    },'secretkey'
    )
    res.status(200).json({token})


})

router.post('/signin', async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send("the email doesn't exists");
    if(user.password !== password) return res.status(401).send('wrong password');

   const token = jwt.sign({_id:user.id}, 'secretkey')
   return res.status(200).json({token});
});

router.get('/tasks', (req,res)=>{
  res.json({
      _id:1,
      name: 'Task one',
      descriptionn: 'lorem ipsum',
      date:"2021-11-24T23:28:36.119Z"
  },{
    _id:2,
      name: 'Task two',
      descriptionn: 'lorem ipsum',
      date:"2021-11-24T23:28:36.119Z"
  },{
    _id:3,
    name: 'Task three',
    descriptionn: 'lorem ipsum',
    date:"2021-11-24T23:28:36.119Z"
  })
});

router.get('/private-tasks',verifyToken,(req,res)=>{
    res.json({
        _id:1,
        name: 'Task one',
        descriptionn: 'lorem ipsum',
        date:"2021-11-24T23:28:36.119Z"
    },{
      _id:2,
        name: 'Task two',
        descriptionn: 'lorem ipsum',
        date:"2021-11-24T23:28:36.119Z"
    },{
      _id:3,
      name: 'Task three',
      descriptionn: 'lorem ipsum',
      date:"2021-11-24T23:28:36.119Z"
    })
});

router.get('/profile', verifyToken,(req,res)=>{
   res.send(req.userId);
});

module.exports = router;

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unathorize Request');
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token== 'null'){
        return res.status(401).send('Anunthorize Request');
    }
   const payload = jwt.verify(token,'secretkey');
   console.log(payload)
   req.userId= payload._id;
   next();
  
}