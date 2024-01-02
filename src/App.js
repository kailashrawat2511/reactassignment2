
import './App.css';
import Counter from './components/Counter';
import Reactassignment2 from './components/Reactassignment2';

function App() {
  return (
    <>
      <Reactassignment2></Reactassignment2>
      <div style={{background:'blue',width:'500px',height:'400px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',borderRadius:'4px',margin:'0 auto'}}>
         <Counter></Counter>
      </div>
    </>
  );
}

export default App;
