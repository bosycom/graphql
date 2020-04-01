import {Task} from "./models/Task";

export const resolvers = {
    task: () => ({description: "What"}),

    createTask: async ({description}) => {
        const task = new Task({description, status: "OPEN"});
        await task.save();

        return task;
    }
};