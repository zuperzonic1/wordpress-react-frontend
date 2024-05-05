import logo from '../logo.svg';
import '../App.css';
import { Articles } from "../components/Articles";


function Homapage() {
  return (
    <div className="App">
      <header className="">
       <h1>Homepage</h1>
      </header>
      <Articles />
    </div>
  );
}

export default Homapage;
