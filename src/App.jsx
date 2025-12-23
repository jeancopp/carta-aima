import React from 'react';
import './App.css';
import GeradorPDF from './components/GeradorPDF';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>📄 Gerador de Carta registrada para AIMA</h1>
            </header>

            <main className="container">
                <GeradorPDF/>
            </main>

            <footer className="footer">
                <p>Gerador automático • Todos os dados processados localmente</p>
            </footer>
        </div>
    );
}

export default App;