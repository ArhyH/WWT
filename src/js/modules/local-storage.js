import { TodoItem } from './constructors/todo-item';
import { TodoList } from './constructors/todo-list';
import { TodoLists } from './constructors/todo-lists';

const prepareData = (lists) => {
  const state = {
    lists: lists.lists.map((list) => {
      const listItem = {
        id: list.id,
        title: list.title,
        todos: list.todos.map((todo) => {
          const todoItem = {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            assignee: todo.assignee,
            date: todo.date,
            completed: todo.completed,
          };

          return todoItem;
        }),
      };
      return listItem;
    }),
    activeListId: lists.activeListId,
  };
  return state;
};

const recoverData = (data) => {
  const lists = new TodoLists();

  data.lists.forEach((list) => {
    const newList = new TodoList({ title: list.title });
    newList.id = list.id;

    list.todos?.forEach((todo) => {
      const newTodo = new TodoItem({
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        assignee: todo.assignee,
        date: todo.date,
      });
      newTodo.id = todo.id;
      newTodo.completed = todo.completed;
      newList.add(newTodo);
    });
    lists.add(newList);
  });

  lists.activeListId =
    data.activeListId ?? (data.lists.length > 0 ? data.lists[0].id : null);

  return lists;
};

const saveData = (data) => {
  const dataToStore = JSON.stringify(prepareData(data));
  localStorage.setItem('todo-list-state', dataToStore);
};

const getData = () => {
  const storedData = localStorage.getItem('todo-list-state');

  if (!storedData) {
    return;
  }

  const data = JSON.parse(storedData);
  const savedData = recoverData(data);
  return savedData;
};

export { saveData, getData };
