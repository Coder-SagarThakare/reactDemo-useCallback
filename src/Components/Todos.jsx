import { memo } from "react";

function Todos({ todos = [], addTodo }) {
  console.log("child rendered");

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
      <h2> child component</h2>
      <h1>My Todos</h1>

      {todos.map((element, index) => {
        return (
          <div key={index}>
            <span>
              {element} : {index}{" "}
            </span>
            <br />
          </div>
        );
      })}

      <button onClick={addTodo}> add Todo </button>
    </div>
  );
}

// export default Todos;

export default memo(Todos);   // make component memoized
