import './App.css';
import Dictionary from './Dictionary.js';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        Hello!
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Chrissy Mickler</small>
          </footer>
      </div>
    </div>
  );
}
