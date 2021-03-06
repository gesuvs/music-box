// o comando as serve para colocar um apelido para o componente
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddMusic from "../pages/AddMusic";
import Music from "../pages/Music";
import Inicio from "../pages/Inicio";
import NotFound from "../pages/NotFound";
import NavBar from "../components/Nav";

export default function Rotas() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/add-music" component={AddMusic} />
        <Route exact path="/list-musics" component={Music} />
        <Route exact path="/editar-musica/:id" component={AddMusic} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
