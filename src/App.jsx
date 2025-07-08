// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";
// import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from "./styles";




// function App() {

//   const [list, setList] = useState([])
//   const [inputTask, setInputTask] = useState("")

//   function inputMudou(event) {
//     setInputTask(event.target.value);
//   }

//   function cliqueiNoBotao() {
//     if (inputTask) {
//       setList([...list, { id: uuid(), task: inputTask, finished: false }]);
//     }
//   }

//   function finalizarTarefa(id) {

//     const newList = list.map(item =>
//       item.id === id ? { ...item, finished: !item.finished } : item
//     )
//     setList(newList)
//   }

//   function deletarItem(id) {

//     const newList = list.filter(item =>
//       item.id !== id)

//     setList(newList)
//   }

//   return (

//     <Container>
//       <ToDoList>
//         <Input onChange={inputMudou} placeholder="O que tenho para fzer..." />
//         <Button onClick={cliqueiNoBotao}>Adicionar</Button>

//         <ul>
//           {
//             list.length > 0 ? (
//               list.map((item) => (
//                 <ListItem isFinished={item.finished} key={item.id}>
//                   <Check onClick={() => finalizarTarefa(item.id)} />
//                   <li >{item.task}</li>
//                   <Trash onClick={() => deletarItem(item.id)} />
//                 </ListItem>
//               ))
//             ) : (
//               <h3> Não há itens na lista</h3>
//             )
//           }
//         </ul>
//       </ToDoList>
//     </Container>

//   )
// }

// export default App




import React, { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  // Função otimizada com useCallback para evitar re-renders desnecessários
  const handleInputChange = useCallback((event) => {
    setInputTask(event.target.value);
  }, []);

  // Função melhorada para adicionar tarefas
  const handleAddTask = useCallback(() => {
    const trimmedTask = inputTask.trim();
    
    if (trimmedTask) {
      const newTask = {
        id: uuid(),
        task: trimmedTask,
        finished: false,
        createdAt: new Date().toISOString()
      };
      
      setList(prevList => [...prevList, newTask]);
      setInputTask(""); // Limpa o input após adicionar
    }
  }, [inputTask]);

  // Função para adicionar tarefa com Enter
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }, [handleAddTask]);

  // Função otimizada para finalizar tarefas
  const handleToggleTask = useCallback((id) => {
    setList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, finished: !item.finished } : item
      )
    );
  }, []);

  // Função otimizada para deletar tarefas com confirmação
  const handleDeleteTask = useCallback((id) => {
    const taskToDelete = list.find(item => item.id === id);
    
    if (window.confirm(`Tem certeza que deseja excluir a tarefa "${taskToDelete.task}"?`)) {
      setList(prevList => prevList.filter(item => item.id !== id));
    }
  }, [list]);

  // Estatísticas das tarefas
  const totalTasks = list.length;
  const completedTasks = list.filter(item => item.finished).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <Container>
      <ToDoList>
        {/* Header com estatísticas */}
        <div className="header">
          <h1>Lista de Tarefas</h1>
          {totalTasks > 0 && (
            <div className="stats">
              <span>Total: {totalTasks}</span>
              <span>Completas: {completedTasks}</span>
              <span>Pendentes: {pendingTasks}</span>
            </div>
          )}
        </div>

        {/* Input melhorado */}
        <div className="input-container">
          <Input
            value={inputTask}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="O que tenho para fazer..."
            maxLength={100}
          />
          <Button 
            onClick={handleAddTask}
            disabled={!inputTask.trim()}
          >
            Adicionar
          </Button>
        </div>

        {/* Lista de tarefas */}
        <ul className="task-list">
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem 
                isFinished={item.finished} 
                key={item.id}
                role="listitem"
              >
                <Check 
                  onClick={() => handleToggleTask(item.id)}
                  title={item.finished ? "Marcar como pendente" : "Marcar como completa"}
                  role="button"
                  tabIndex={0}
                />
                <li className="task-text">{item.task}</li>
                <Trash 
                  onClick={() => handleDeleteTask(item.id)}
                  title={`Excluir tarefa: ${item.task}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleDeleteTask(item.id);
                    }
                  }}
                />
              </ListItem>
            ))
          ) : (
            <div className="empty-state">
              <h3>Nenhuma tarefa adicionada</h3>
              <p>Adicione uma tarefa para começar a organizar seu dia!</p>
            </div>
          )}
        </ul>

        {/* Barra de progresso */}
        {totalTasks > 0 && (
          <div className="progress-container">
            <div className="progress-info">
              <span>Progresso: {Math.round((completedTasks / totalTasks) * 100)}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Ações em lote */}
        {totalTasks > 0 && (
          <div className="batch-actions">
            <button 
              onClick={() => setList(prevList => 
                prevList.map(item => ({ ...item, finished: true }))
              )}
              disabled={completedTasks === totalTasks}
            >
              Marcar todas como completas
            </button>
            <button 
              onClick={() => setList(prevList => 
                prevList.filter(item => !item.finished)
              )}
              disabled={completedTasks === 0}
            >
              Remover completas
            </button>
          </div>
        )}
      </ToDoList>
    </Container>
  );
}

export default App;