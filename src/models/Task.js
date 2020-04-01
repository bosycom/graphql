import mongoose from 'mongoose';

export const Task = mongoose.model('Task', {
    description: String,
    status: String
});
