import logo from './logo.svg';
import './App.css';

function App() {
  let questions =[
  {
    statement : "What is capital of Pakistan?",
    Option : ["Lahore", "Karachi", "Islamabad", "Peshawer"],
    ans : "Islamabad"
  },

  {
    statement : "What is capital of India?",
    Option : ["Lahore", "Karachi", "Islamabad", "New Dehli"],
    ans : "New Dehli"
  },

  {
    statement : "What is capital of China?",
    Option : ["Lahore", "Bejing", "Islamabad", "Peshawer"],
    ans : "Bejing"
  },
  {
    statement : "What is capital of India?",
    Option : ["Lahore", "Karachi", "Islamabad", "New Dehli"],
    ans : "New Dehli"
  },
  {
    statement : "What is capital of India?",
    Option : ["Lahore", "Karachi", "Islamabad", "New Dehli"],
    ans : "New Dehli"
  }
]
  return (

    <div className="container my-5">
    <h1>Welcome to my online test</h1>
      <ol>
        {
          questions.map(q => {
            return(
              <div>
                <li className='text-primary'>{q.statement}</li>
              <ul>{
                q.Option.map(Op=> <li className='bg-secondary'>{Op}</li>)                
                }
                

              </ul>

              </div>
              
            )
          })
        }
        
      </ol>    
    </div>
  );
  }

export default App;
