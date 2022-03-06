import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';



const App = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/video/:videoId' component={Home} />
                <Route path='/upload' component={Upload} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
