const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
  User: {
    type: String,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Access: {
    type: Object,
    require: true,
    Rank: {
      type: String,
      require: true,
    },
    Padawon: {
      type: Array,
      require: true,
    },
  },
  Droid: {
    type: Object,
    require: true,
    names: {
      type: String,
      require: true,
    },
    specifications: {
      type: Object,
      require: true,
      type: {
        type: String,
        require: true,
      },
      version: {
        type: Number,
        require: true,
      },
    },
  },
});

module.exports = mongoose.model("user_document", user_schema);
