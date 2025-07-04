import { v4 as uuid } from "uuid";


function App() {
  const list = [
    { id: uuid(), task: "Levar o Lixo para fora" },
    { id: uuid(), task: "Arruma o quarto" },
    { id: uuid(), task: "Arrumar o portão" }

  ];


  function inputMudou(event) {
    console.log(event.target.value);
  }

  function cliqueiNoBotao() {
    console.log("Cliquei no botao");
  }


  return (
    <>
      <div>
        <input onChange={inputMudou} placeholder="O que tenho para fzer..." />
        <button onClick={cliqueiNoBotao}>Adicionar</button>

        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.task}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App