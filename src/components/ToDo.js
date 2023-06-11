
import React, { useState } from 'react'; 

const todosArray = [ 
    "görevleri tamamla",
    "diğer göreve başla",
]

export default function ToDo() {
  

  const [todos, setTodos] = useState(todosArray);

  const [input, setInput] = useState("")
	
  const inputuDegistir = evt => {
    
    const { value } = evt.target;
	
    setInput(value)
  };
  const reset = () => {
    setInput("")
  };

  const submit = () => {
    const newState = [...todos]
    newState.push(input)
    setTodos(newState)
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: input.length > 10 ? "crimson" : "royalblue" /* ADIM 2 */
  };

  return (
    <div className='widget-input container'>
      <h2>ToDo</h2>
      <div id='output' style={stil}>
        <ul>
            {todos.map((t, i) => {
        <li key={i}>{t}</li>
        })}
        </ul>
        </div> {/* ADIM 3 */}
      <div>
		<input id='input' type='text' onChange={inputuDegistir} value={input}/> {/* ADIM 6 */}
        <button  onClick={submit}>Ekle</button>
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
