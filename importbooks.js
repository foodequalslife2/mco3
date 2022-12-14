
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const books = require('./models/books');

async function run(){
    try{
        const book1 = await books.create({
            booktitle: "Queen's Gambit",
            bookgenre: "Coming of Age",
            bookauthor: "Walter Tevis",
            bookpicture: "queens-gambit.png",
            booksynopsis: "The Queen's Gambit follows the life of an orphan chess prodigy, Elizabeth Harmon, during her quest to become an elite chess player while struggling with emotional problems, drugs and alcohol dependency. The title of the series refers to a chess opening of the same name. The story is set in the mid-1950s and 1960s.",
            finishread: "",
            currentread: "",
            planread: ""
        });
        await book1.save();
        console.log('created ' + book1);

        const book2 = await books.create({
            booktitle: "One Piece Volume 1",
            bookgenre: "Action and Adventure",
            bookauthor: "Eiichiro Oda",
            bookpicture: "one-piece-vol-1.png",
            booksynopsis: "One Piece is the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.",
            finishread: "",
            currentread: "",
            planread: ""
        });
        await book2.save();
        console.log('created ' + book2);
        
        const book3 = await books.create({
            booktitle: "The Little Prince",
            bookgenre: "Children's",
            bookauthor: "Antoine de Saint-Exupéry",
            bookpicture: "little-prince.png",
            booksynopsis: "The Little Prince is an honest and beautiful story about loneliness, friendship, sadness, and love. The prince is a small boy from a tiny planet (an asteroid to be precise), who travels the universe, planet-to-planet, seeking wisdom. On his journey, he discovers the unpredictable nature of adults.",
            finishread: "",
            currentread: "",
            planread: ""
        });
        await book3.save();
        console.log('created ' + book3);

        const book4 = await books.create({
            booktitle: "Pride and Prejudice",
            bookgenre: "Romance",
            bookauthor: "Jane Austen",
            bookpicture: "pride-and-prejudice.png",
            booksynopsis: "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
            finishread: "",
            currentread: "",
            planread: ""
        });
        await book4.save();
        console.log('created ' + book4);

        const book5 = await books.create({
            booktitle: "Angels & Demons",
            bookgenre: "Suspense",
            bookauthor: "Dan Brown",
            bookpicture: "angels-and-demons.png",
            booksynopsis: "When Harvard symbologist Robert Langdon discovers the resurgence of an ancient brotherhood known as the Illuminati, he flies to Rome to warn the Vatican, the Illuminati's most hated enemy. Joining forces with beautiful Italian scientist Vittoria Vetra (Ayelet Zurer), Langdon follows a centuries-old trail of ancient symbols in the hope of preventing the Illuminati's deadly plot against the Roman Catholic Church from coming to fruition.",
            finishread: "",
            currentread: "",
            planread: ""
        });
        await book5.save();
        console.log('created ' + book5);

       
    }catch(e){
        console.log(e.message);
    }
}
run();