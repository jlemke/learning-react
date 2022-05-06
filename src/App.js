import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>Hello React ! ! !</h1>
      <h2>Blorby</h2>
      <Greeting name='Bordle' />
      <Greeting name='Crusticus' />
      <Greeting name='Great Flimby' />
    </>
  );
};

export default App;
