import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    hola soy fer
                </p>

                <PrimerComponente />
                <hr/>
                <SegundoComponente />
                <TercerComponente footerText={"Pie de pagina"}/>
            </header>
        </div>
    );
}