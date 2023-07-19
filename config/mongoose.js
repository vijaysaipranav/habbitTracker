{
    const mongoose= require('mongoose');
    
    mongoose.connect('mongodb+srv://vijaysaipranavt:pranav3108011234@cluster2.cmyuqua.mongodb.net/Habbit_Tracker_Db?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

    const db=mongoose.connection;

    db.on('error',console.error.bind(console,"error accured to connecting to db..."));

    db.once('open',function(){
        console.log("successfully connected to DataBase.....");
    });

}