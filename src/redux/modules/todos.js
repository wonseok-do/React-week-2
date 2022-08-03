const LOAD = "todo/LOAD";
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";
const TOGGLE = "todo/TOGGLE";

export function loadTodo(todo_list) {
  return { type: LOAD, todo_list };
}
export function createTodo(todo) {
  return { type: CREATE, todo };
}
export function toggleTodo(todo_id) {
  return { type: TOGGLE, todo_id };
}
export function deleteTodo(todo_id) {
  return { type: DELETE, todo_id };
}
const initialState = {
  todos: [
    {
      id: "1252cdd",
      title: "react 공부하기",
      body: "react를 공부해봅시다",
      isDone: false,
    },
    {
      id: "ddf1244",
      title: "밥 먹자",
      body: "밥만 잘 먹자",
      isDone: true,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "todo/LOAD": {
      return { list: action.todo_list };
    }
    case "todo/CREATE": {
      const new_todo_list = [...state.todos, action.todo];
      return { ...state, todos: new_todo_list };
    }
    case "todo/TOGGLE": {
      console.log(state.todos, action.todo_id);
      const new_todo_list = state.todos.map((todo) => {
        if (action.todo_id === todo.id) {
          // console.log(!todo.isDone);
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      console.log(new_todo_list);
      return { ...state, todos: new_todo_list };
    }

    case "todo/DELETE": {
      const new_todo_list = state.todos.filter((todo) => {
        return action.todo_id !== todo.id;
      });
      console.log(new_todo_list);
      return { ...state, todos: new_todo_list };
    }
    default:
      return state;
  }
}
