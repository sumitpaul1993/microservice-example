import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CartEntity = mongoose.model('carts', new Schema({
    product_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}));

export default CartEntity;