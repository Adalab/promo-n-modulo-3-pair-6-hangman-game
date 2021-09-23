import "../styles/main.scss";
import React, { useState } from "react";

function App() {
  let [error, setError] = useState(0);
  let [lastLetter, setLastLetter] = useState([]);
  let [word, setWord] = useState('katakroker');
  let [userLetters,setUserLetters] = useState([])

  //Funcion numero de errores

  let numberOfErrors = (ev) => {
    ev.preventDefault();
    let countError = error + 1;
    setError(countError);
  };

  //funcion last letter
  let handleLastLetter = (ev) => {
    const inputLastLetter = ev.target.value;
    if (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]$/.test(inputLastLetter)) {
      setLastLetter(inputLastLetter);
      if(!userLetters.includes(inputLastLetter)){
        setUserLetters([...userLetters,inputLastLetter]);
      }
    } else {
      setLastLetter("");
    }
    
  };

  let renderSolutionLetters = () =>{
    const wordLetters = word.split('');
      return wordLetters.map((word,index) => {
        if(userLetters.includes(word)){
          return (<li className="letter" key={index}>{word}</li>)
        }else{
          return (<li className="letter" key={index}></li>)
        }
      })
  }
  
  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {renderSolutionLetters()}
              </ul>
            </div>
            <div className="feedback">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter"> 
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleLastLetter}
                value={lastLetter}
              />
              <button className="btn" onClick={numberOfErrors}>
                incrementar
              </button>
            </form>
          </section>
          <section className={`dummy error-${error}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
