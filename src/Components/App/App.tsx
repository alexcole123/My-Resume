import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import Skills from '../Skills/Skills';
import './App.css';

function App(): JSX.Element {
    return ( 
        <div className="App">
            <Header />
            <div className="Squares-container">
                <Details />
                <Skills />
            </div>
        </div>
    );
}

export default App;
