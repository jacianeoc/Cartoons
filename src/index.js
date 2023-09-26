import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; import './styles/reset.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import registerVideo from './pages/register/Video';
import registerCategory from './pages/register/Category';


//route dom é uma forma para consumir mesmo coisa do usuario
//entao a ordem importa, com isso tem que ver direito
// uma pagina 404 no final de tudo e melhor, porque se nada 
//carregar vai ter essa lá, (tentar inventar o jogo simples)
// para colocar aqui seria uma boa, deixar de fazer algo chato
//e colocar algo legal

const Page404 = () => (<div>page 404</div>)

ReactDOM.render(
    <Router>

        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register/Video" component={registerVideo} exact />
            <Route path="/register/Category" component={registerCategory} exact />
            <Route path='*' component={Page404} />

        </Switch>
    </Router>,
    document.getElementById('root')
);

