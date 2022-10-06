import SliderForm from './components/SliderForm'
import quartetLogo from './assets/quartet-logo.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={quartetLogo} alt="" width="8%" />
      </header>
      <SliderForm />
    </div>
  );
}

export default App;
