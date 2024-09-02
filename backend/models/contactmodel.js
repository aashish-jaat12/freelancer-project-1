import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    name:{type:String,required: true},
    email:{ type: String, required: true, unique:true },
    number:{ type: String, required: true,  },
    subject:{ type: String, required: true,  },
    message:{ type: String, required: true,  },

})


const contactmodel = mongoose.model('Cntact' , contactSchema)

export default contactmodel