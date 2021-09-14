import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import "./App.css"
import MainNavbar from "./components/MainNavbar"
import Search from "./components/Search"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import Details from "./components/Details"

function App() {
  return (
    <Router>
      <MainNavbar />
      <Container>
        <Search />
        <Route path="/" exact component={Details} />
      </Container>
    </Router>
  )
}

export default App
