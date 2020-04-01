import {buildSchema} from 'graphql';

export const schema = buildSchema(`
    type Query {
      task: Task
    }
    
    type Task {
      id: ID!
      description: String
      status: TaskStatus
    }
    
    type Mutation {
      createTask(description: String): Task
    }
    
    enum TaskStatus {
      OPEN
      IN_PROGRESS
      DONE
    }
`);