import ComposedComponent from './components/ComposedComponent';
import Header from './components/Header';

const App = () => {
  return (
    <div className='App'>
      <Header darkMode={true} title='test title' />
      <ComposedComponent></ComposedComponent>
    </div>
  );
};

export default App;
