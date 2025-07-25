import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserEntity = mongoose.model('users', new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}));

export default UserEntity;