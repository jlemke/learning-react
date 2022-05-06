import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>Hello React ! ! !</h1>
      <h2>Blorby</h2>
      <Greeting favoriteNumber={1} name={'Bordle'} />
      <Greeting favoriteNumber={4} name='Crusticus' />
      <Greeting favoriteNumber={22} name='Great Flimby' />
    </>
  );
};

export default App;
