import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...toods, newTodo(action.payload.name)];
    default:
      return state;
  }
}

const newTodo = (name) => {
  return {
    id: Date.now(),
    name,
    completed: false,
  };
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <div className="flex flex-col p-4 min-h-screen">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-2 rounded-md border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default App;
