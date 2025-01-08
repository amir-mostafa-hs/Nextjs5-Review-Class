import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
});

export default mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema);
