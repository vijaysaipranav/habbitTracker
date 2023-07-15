{
    const mongoose= require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/Habbit_Tracker_Db',{useNewUrlParser:true,useUnifiedTopology:true});

    const db=mongoose.connection;

    db.on('error',console.error.bind(console,"error accured to connecting to db..."));

    db.once('open',function(){
        console.log("successfully connected to DataBase.....");
    });

}