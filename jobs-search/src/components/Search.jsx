import { Component } from "react";
import CompaniesList from "./CompaniesList"
import Details from "./Details"

class Search extends Component ()  {
  state = {
    company: [],
    selectedCompany: null,
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?title=developer`
      )
      if (response.ok) {
        let data = await response.json()
        this.setState({data})
        console.log(this.setState({data}))
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error)
    }
  }

  changeCompany = (company) => this.setState({selectedCompany: company})
  
  return (
    <>
      <Row>
        <Col md={4}>
          <CompaniesList
            selectedCompany={this.state.selectedCompany}
            changeCompany={this.changeCompany}
            company={this.state.company}
          />
        </Col>
        <Col md={8}>
          <Details
            selectedCompany={this.state.selectedCompany}
          />
        </Col>
      </Row>
      {/* <Form inline className="justify-content-center mt-5" size="sm">
        <FormControl
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </>
  )
}
export default Search
