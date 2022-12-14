
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect(process.env.MONGO_URI || process.env.DB_URL);

const user = require('./models/user');

async function run(){
    try{
        let user1pass = bcrypt.hashSync("edricchua123", 10)
        const user1 = await user.create({
            username: "ChuaEdric",
            password: user1pass,
            email: "chuaedric@gmail.com",
            profilepicture: "edric_chua.jpg",
            genrelove: "Coming of Age",
            finishread: "Queen's Gambit",
            currentread: "Pride and Prejudice",
            planread: "Angels & Demons",
            top3books:"",
            bio:"Show me a family of readers, and I will show you the people who move the world. Napoleon Bonaparte",
        });
        await user1.save();
        console.log('created ' + user1);
        let user2pass = bcrypt.hashSync("ashleycifra991", 10)
        const user2 = await user.create({
            username: "CifraAshley",
            password: user2pass,
            email: "ashleycifra@gmail.com",
            profilepicture: "ashley_cifra.jpg",
            genrelove: "Action & Adventure",
            finishread: "Angels & Demons",
            currentread: "Queen's Gambit",
            planread: "The Little Prince",
            top3books:"",
            bio:"Today a reader, tomorrow a leader. Margaret Fuller",
        });

        await user2.save();
        console.log('created ' + user2);
        
        let user3pass = bcrypt.hashSync("nigelagero456", 10)
        const user3 = await user.create({
            username: "AgeroNigel",
            password: user3pass,
            email: "nigelagero@gmail.com",
            profilepicture: "nigel_agero.jpg",
            genrelove: "Children's",
            finishread: "Pride and Prejudice",
            currentread: "One Piece",
            planread: "Queen's Gambit",
            top3books:"",
            bio:"If you don’t like to read, you haven’t found the right book. J.K. Rowling",
        });
        await user3.save();
        console.log('created ' + user3);
        
        let user4pass = bcrypt.hashSync("sagesentinel", 10)
        const user4 = await user.create({
            username: "Sage",
            password: user4pass,
            email: "sagesentinel@gmail.com",
            profilepicture: "sage_icon.jpg",
            genrelove: "Romance",
            finishread: "The Little Prince",
            currentread: "Angels & Demons",
            planread: "Pride and Prejudice",
            top3books:"",
            bio:"Books are a uniquely portable magic. Stephen King",
        });
        await user4.save();
        console.log('created ' + user4);

        let user5pass = bcrypt.hashSync("admin", 10)
        const user5 = await user.create({
            username: "admin",
            password: user5pass,
            email: "omencontroller@gmail.com",
            profilepicture: "omen_icon.jpeg",
            genrelove: "Coming of Age",
            finishread: "Queen's Gambit",
            currentread: "Pride and Prejudice",
            planread: "Angels & Demons",
            top3books:"",
            bio:"Show me a family of readers, and I will show you the people who move the world. Napoleon Bonaparte",
        });
        await user5.save();
        console.log('created ' + user5);
        
    }catch(e){
        console.log(e.message);
    }
}
run();