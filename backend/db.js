const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://tush1:qwer1234@nodeexpressprojects.r6fgo.mongodb.net/Internship?retryWrites=true&w=majority",
      connectionParams
    );
  } catch (error) {
    console.log(error);
  }
};
