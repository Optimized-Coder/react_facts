import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} 
       className='app-logo'
       alt='logo' />
       <h1>ReactFacts</h1>
      </header>
      <main>
        <div>
        <h2>Fun facts about React</h2>
        </div>
        <div>
        <ul>
          <li>Was released in 2013</li>
          <li>Was created by Joran Walke</li>
          <li>Has well over 100k GitHub stars</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
      </main>
      <img src={logo} 
      className='bg-img'
      alt="" />
    </div>
  );
}

export default App;
