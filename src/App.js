
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
  <>
   
    <Navbar name = "/"/>
    <div className = "container">
    {/*<TextForm title = "Enter the text to Analyze"/>*/}
    </div>
    <Aboutus/>
  </>
  );
}

export default App;
