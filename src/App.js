
import './App.css';
import Header from './components/Header';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Shop />
      <Question />
    </div>
  );
}

export default App;
