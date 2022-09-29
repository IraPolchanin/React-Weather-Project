import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Kharkiv" />
        <footer>
          This project was coded by Iryna Polchaninova and is
          <a href="https://github.com/IraPolchanin/React-Weather-Project"> open-sourced on GitHub</a>
        </footer>
      </div>
    </div >
  );
}


