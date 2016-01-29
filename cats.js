var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catapp")


var catSchema = new mongoose.Schema({
    
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add new cat to DB

var george = new Cat({
    name: "Mrs Norris",
    age: 7,
    temperament: "evil"
})

// george.save(function(err, cat){
//     if(err){
//         console.log("Something Went Wrong")
//     } else{
//         console.log("We Just Saved a Cat to the DB")
//         console.log(cat)
//     }
    
// });



Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland"
}, function(err, cat){
    if(err){
        console.log(err)
    } else {
        console.log(cat)
    }
    
})

Cat.find({}, function(err,cats){
    if(err){
        console.log("OH NO, ERROR");
        console.log(err)
    } else {
        console.log("All the cats")        
        console.log(cats)
    }
})