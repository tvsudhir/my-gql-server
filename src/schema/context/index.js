import * as todos from '../../todos/index.js';

const datasources = {
  todos: todos,
};

export default async function createContext() {
  return {
    datasources
  }
}
