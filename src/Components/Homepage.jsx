
// problem : 
//  when i click on count button by-default Todos component rendered after every render.

import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function Homepage() {
  console.log('parent rendered');
  
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  // useCAllback
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new Entry"]);
  }, []); 
  // you can give dependency here, in this case i dont have dependency

  return (
    <div style={{border:"1px solid black", padding:"20px", margin:"20px"}}>
      <h2>Parent component</h2>
      <span>Count : {count} </span>
      <button onClick={increment}> + </button>
      <Todos todos={todos} addTodo={addTodo} />

      {/* when we click on increment button it automatically calls the Todos Component. we dont have need of call to the Todods component  */}
    </div>
  );
}
