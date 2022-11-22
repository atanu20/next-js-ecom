// url=''
import  mongoose  from "mongoose"
const connection={};
async function dbconnection(){
    if(connection.isConnected)
    {
        return;
    }
    const db = await mongoose.connect('mongodb+srv://nextapp:nextapp@cluster0.8fig6.mongodb.net/nextEcom?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    useUnifiedTopology: true,
    
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbconnection;