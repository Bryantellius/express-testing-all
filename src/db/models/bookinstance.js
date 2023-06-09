import mongoose from "mongoose";

/**
 * @type {mongoose.Schema}
 */
const BookInstanceSchema = mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", require: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: {
    type: Date,
    default: Date.now,
  },
});

BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

/**
 * @type {mongoose.Model}
 */
const BookInstance = mongoose.model("BookInstance", BookInstanceSchema);

export default BookInstance;
