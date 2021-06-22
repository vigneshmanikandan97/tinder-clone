import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    age: Number,
    imgUrl: String
});

export default mongoose.model('cards', cardSchema);