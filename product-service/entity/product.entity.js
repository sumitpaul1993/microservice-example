import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ProductEntity = mongoose.model('products', new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}));

export default ProductEntity;