
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL);

const user = require('./models/user');

async function run(){
    try{
        const user1 = await user.create({
            username: "ChuaEdric",
            password: "edricchua123",
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

        const user2 = await user.create({
            username: "CifraAshley",
            password: "ashleycifra991",
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
        
        const user3 = await user.create({
            username: "AgeroNigel",
            password: "nigelagero456",
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
        
        const user4 = await user.create({
            username: "Sage",
            password: "sagesentinel",
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

        const user5 = await user.create({
            username: "Omen",
            password: "omencontroller",
            email: "omencontroller@gmail.com",
            profilepicture: "omen_icon.jpeg",
            genrelove: "Suspense",
            finishread: "The Little Prince",
            currentread: "One Piece",
            planread: "Pride and Prejudice",
            top3books:"",
            bio:"We tell ourselves stories in order to live. Joan Didion",
        });
        await user5.save();
        console.log('created ' + user5);
        
    }catch(e){
        console.log(e.message);
    }
}
run();