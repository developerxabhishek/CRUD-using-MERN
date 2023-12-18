const { default: mongoose } = require("mongoose");

const stuSchema = new mongoose.Schema({
           "Rollno":String,
           "Name":String,
           "City":String,
           "Fees":String
});

  module.exports=mongoose.model("empoyee", stuSchema);