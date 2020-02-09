const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true
};

const requiredNumber = {
  type: Number,
  required: true
};

const defaultRequiredDate = { type: Date, default: Date.now, required: true };

const logEntrySchema = new Schema(
  {
    title: requiredString, // String is shorthand for {type: String}
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0
    },
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180
    },
    visitdate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true // created at & updated at
  }
);

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
