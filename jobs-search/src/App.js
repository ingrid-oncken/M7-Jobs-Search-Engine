import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './App.css'
import MainNavbar from './components/MainNavbar'
import Search from './components/Search'
import { BrowserRouter as Router } from 'react-router-dom'
import FavCounter from './components/FavCounter'
import { Route } from 'react-router-dom'
import FavoriteCompanies from './components/FavoriteCompanies'

function App() {
  return (
    <Router>
      <MainNavbar />
      <Container>
        {/* <Search /> */}
        <FavCounter />
        <Route path="/" exact component={Search} />
        <hr />
        <Route path="/cart" exact component={FavoriteCompanies} />
      </Container>
    </Router>
  )
}

export default App
