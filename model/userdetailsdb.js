const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
     block:{
        type: String,
        required:true,
        default:"active"
    },
    isAdmin:{
        type:Number,
        required:true,
        default:0
    },
    cartId:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'cart',
        required:false,
     },
    myorderId:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'cart',
        required:false,
     },
     wishlistId:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'wishlist',
        required:false,
     },
     walletId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wallet',
        required:false,
     },
     isreferred:{
        type:Number,
        deafult:0
     },
     address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "address",
        required: false
      }]
})



const customerdetail= new mongoose.model("customerdetail",userSchema)

module.exports=customerdetail
