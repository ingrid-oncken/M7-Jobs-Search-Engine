import './App.css'
import MainSearch from './components/MainSearch'
import { BrowserRouter, Route } from 'react-router-dom'
import CompanySearchResults from './components/CompanySearchResults'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainSearch} />
      <Route exact path="/:companyId" component={CompanySearchResults} />
    </BrowserRouter>
  )
}

export default App
