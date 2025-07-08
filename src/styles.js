// import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";
// import styled from "styled-components";



// export const Container = styled.div`
// background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
// width: 100vw;
// height: 100vh;
// display: flex;
// justify-content: center;
// align-items: center;

// `

// export const ToDoList = styled.div`
// background: white;
// padding: 30px 20px;

// ul{
//     padding: 0;
//     margin-top: 60px;

// }

// `
// export const Input = styled.input`
// border: 2px solid rgba(209, 211, 212, 0.4);
// border-radius: 5px;
// height: 40px;
// margin-right: 40px;
// width: 342px;

// `
// export const Button = styled.button`
// background-color: #8052EC;
// border-radius: 5px;
// font-weight: 900;
// font-size: 17px;
// line-height: 2px;
// height: 40px;
// border: none;
// color: #FFF;
// width: 130px;
// cursor: pointer;

// &:hover {
// opacity: 0.8;

// }

// &:active {
// opacity: 0.6;

// }

// `
// export const ListItem = styled.div`
// background: ${ props => props.isFinished ? "#E8FF8B" : "#E4E4E4" };
// box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
// border-radius: 5px;
// height: 60px;
// display: flex;
// align-items: center;
// justify-content: space-between;
// margin-bottom: 30px;
// padding: 0 10px;
// width: 500px;

// li {
//     list-style: none;
// }

// `

// export const Trash = styled(FcEmptyTrash)`

// cursor: pointer;

// `
// export const Check = styled(FcCheckmark)`

// cursor: pointer;


// `





import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #383838 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 5px;
    align-items: flex-start;
    padding-top: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const ToDoList = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 15px;
    min-height: 400px;
    max-height: 85vh;
  }
  
  @media (max-width: 480px) {
    padding: 20px 15px;
    border-radius: 12px;
    min-height: 350px;
    max-height: 80vh;
    margin: 10px 0;
  }
  
  .header {
    text-align: center;
    margin-bottom: 30px;
    
    h1 {
      color: #2d3748;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 10px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }
    
    .stats {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
      flex-wrap: wrap;
      
      @media (max-width: 768px) {
        gap: 10px;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
        align-items: center;
      }
      
      span {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        
        @media (max-width: 480px) {
          padding: 6px 12px;
          font-size: 0.8rem;
        }
      }
    }
  }
  
  .input-container {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    align-items: center;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
    }
    
    @media (max-width: 480px) {
      gap: 10px;
    }
  }
  
  .task-list {
    padding: 0;
    margin: 0;
    max-height: 400px;
    overflow-y: auto;
    
    @media (max-width: 768px) {
      max-height: 300px;
    }
    
    @media (max-width: 480px) {
      max-height: 250px;
    }
    
    /* Scrollbar personalizada */
    &::-webkit-scrollbar {
      width: 8px;
      
      @media (max-width: 480px) {
        width: 6px;
      }
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
    }
  }
  
  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #718096;
    
    @media (max-width: 768px) {
      padding: 40px 15px;
    }
    
    @media (max-width: 480px) {
      padding: 30px 10px;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #4a5568;
      
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
      
      @media (max-width: 480px) {
        font-size: 1.1rem;
      }
    }
    
    p {
      font-size: 1rem;
      opacity: 0.8;
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
  }
  
  .progress-container {
    margin-top: 30px;
    padding: 20px;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 15px;
    border: 1px solid rgba(102, 126, 234, 0.2);
    
    @media (max-width: 768px) {
      padding: 15px;
      margin-top: 20px;
    }
    
    @media (max-width: 480px) {
      padding: 12px;
      border-radius: 10px;
    }
    
    .progress-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      
      span {
        font-weight: 600;
        color: #4a5568;
        
        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }
    }
    
    .progress-bar {
      height: 8px;
      background: #e2e8f0;
      border-radius: 10px;
      overflow: hidden;
      
      @media (max-width: 480px) {
        height: 6px;
      }
      
      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transition: width 0.5s ease;
        border-radius: 10px;
      }
    }
  }
  
  .batch-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 8px;
    }
    
    @media (max-width: 480px) {
      gap: 6px;
    }
    
    button {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      
      @media (max-width: 768px) {
        width: 100%;
        padding: 12px;
      }
      
      @media (max-width: 480px) {
        padding: 10px;
        font-size: 0.8rem;
      }
      
      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        
        @media (max-width: 768px) {
          transform: none;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }
      }
      
      &:active {
        transform: translateY(0);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }
    }
  }
`;

export const Input = styled.input`
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  height: 50px;
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background: #f8fafc;
  
  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    background: white;
  }
  
  &::placeholder {
    color: #a0aec0;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: 45px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    height: 42px;
    padding: 0 15px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #8052EC, #667eea);
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  height: 50px;
  border: none;
  color: #FFF;
  width: 140px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(128, 82, 236, 0.3);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(128, 82, 236, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
    font-size: 0.95rem;
    
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: 0 6px 20px rgba(128, 82, 236, 0.3);
    }
  }
  
  @media (max-width: 480px) {
    height: 42px;
    font-size: 0.9rem;
    border-radius: 10px;
    
    &:hover:not(:disabled) {
      box-shadow: 0 4px 15px rgba(128, 82, 236, 0.3);
    }
  }
`;

export const ListItem = styled.div`
  background: ${props => props.isFinished ? 
    "linear-gradient(135deg, #C6F6D5, #9AE6B4)" : 
    "linear-gradient(135deg, #F7FAFC, #EDF2F7)"
  };
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0;
  width: 100%;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.isFinished ? "#9AE6B4" : "#E2E8F0"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  .task-text {
    list-style: none;
    flex: 1;
    margin: 0 20px;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${props => props.isFinished ? "#2D3748" : "#4A5568"};
    text-decoration: ${props => props.isFinished ? "line-through" : "none"};
    opacity: ${props => props.isFinished ? "0.8" : "1"};
    word-break: break-word;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    height: 60px;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
    }
    
    .task-text {
      margin: 0 15px;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0 12px;
    height: 55px;
    border-radius: 10px;
    margin-bottom: 12px;
    
    &:hover {
      transform: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .task-text {
      margin: 0 12px;
      font-size: 0.95rem;
      line-height: 1.3;
    }
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  padding: 5px;
  border-radius: 8px;
  
  &:hover {
    transform: scale(1.2);
    background: rgba(255, 69, 69, 0.1);
    box-shadow: 0 4px 12px rgba(255, 69, 69, 0.2);
  }
  
  &:active {
    transform: scale(1);
  }
  
  &:focus {
    outline: 2px solid #ff4545;
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 4px;
    
    &:hover {
      transform: scale(1.1);
      background: rgba(255, 69, 69, 0.1);
      box-shadow: 0 3px 10px rgba(255, 69, 69, 0.2);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 3px;
    
    &:hover {
      transform: scale(1.05);
      background: rgba(255, 69, 69, 0.1);
      box-shadow: 0 2px 8px rgba(255, 69, 69, 0.2);
    }
  }
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &:active {
    transform: scale(1);
  }
`;

