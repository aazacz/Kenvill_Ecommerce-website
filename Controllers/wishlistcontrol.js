const wishlistdb=require('../model/wishlistdb')
const wishlistHelper = require("../Helper/wishlistHelper")
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


exports.addtowishlist=async(req,res)=>{
    

   
    let userid=req.body.userid
    console.log("1");
    const productid=req.body._id
   
    console.log("session in the page is: "+req.session.userid);
    //checking if wishlist already exists
    let wishlist=await wishlistdb.findOne({userId:req.session.userid})
    try {
        if(wishlist){
            const isProductExist = await wishlistdb.findOne({ userId: req.session.userid, product: new ObjectId(id) });
            console.log("PRODUCT FOUND IS:  " + isProductExist);

            if (!isProductExist) { //Executes the IF Condition if the product is not already existed in the cart
                console.log("product does not exist in the cart");
               
                const userid=req.session.userid
                const productId = id
              
             // Wishlist Helper function
             const WishlistHelper=await wishlistHelper.addToWishlist(userid,productId)
                   
                    if(WishlistHelper)  {  res.send('Added To Wishlist')}
                    else                {  res.send('Already Exists')  }
                return

            }
            else {
                res.send({ message: "Already Exists" })
                return;
                 }


          
        }
        else{  //else condition only works if wishlistDB is not already created in the beginning of the signup
        
            const newWishListyDb=new wishlistdb({
                userid:userid,
                product:[]
            })
            await newWishListyDb.save()
            
          const userid=req.session.userid
          const productId = id
          
         // Wishlist Helper function
         const WishlistHelper=await wishlistHelper.addToWishlist(userid,productId)
        
         if(wishlistHelper){
            res.send('Added To Wishlist')
         }
         else{
             res.send('Already Exists')
         }


         return
        }

    } catch (error) {
    console.log(error.message);
    }



}