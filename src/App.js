import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {

  const styles = {
    container: {
      padding: 30,
      backgroundColor: new Date().getSeconds() % 2 === 0 ? "lightblue" : "pink"
    },
    heading: {
      textTransform: 'uppercase'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello React ! ! !</h1>
      <h2>Blorby</h2>
      <Greeting favoriteNumber={1} name={'Bordle'} favoriteColors={['red', 'red', 'red', 'green', 'blue']} />
      <Greeting favoriteNumber={4} name='Crusticus' />
      <Greeting favoriteNumber={22} name='Great Flimby' />
    </div>
  );
};

export default App;
