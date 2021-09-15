// import CompaniesList from './CompaniesList'
// import Details from './Details'

import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Job from './Job'

export default function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [jobs, setJobs] = useState([])
  // useEffect(() => {
  //   fetchData()
  // }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchValue}&limit=12`
      )
      if (response.ok) {
        let { data } = await response.json()
        setJobs(data)
        console.log(jobs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Form inline className="justify-content-center mt-5" size="sm">
        <FormControl
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info" onClick={() => fetchData()}>
          Search
        </Button>
      </Form>

      <Job props={jobs} />
    </Container>
  )
}

// class Search extends Component() {
//   state = {
//     company: [],
//     selectedCompany: null,
//   }

//   componentDidMount = async () => {
//     try {
//       const response = await fetch(
//         `https://strive-jobs-api.herokuapp.com/jobs?title=developer`
//       )
//       if (response.ok) {
//         let data = await response.json()
//         console.log(data)
//         // this.setState({ data })
//         // console.log(this.setState({ data }))
//       } else {
//         console.log('error')
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // changeCompany = (company) => this.setState({ selectedCompany: company })

//   render() {
//     return (
//       <Container>
//         {/* <Col md={4}>
//           <CompaniesList
//             selectedCompany={this.state.selectedCompany}
//             changeCompany={this.changeCompany}
//             company={this.state.company}
//           />
//         </Col>
//         <Col md={8}>
//           <Details selectedCompany={this.state.selectedCompany} /> }
//         </Col> */}
//       </Container>

//       /* <Form inline className="justify-content-center mt-5" size="sm">
//         <FormControl
//           type="text"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           placeholder="Search"
//           className="mr-sm-2"
//         />
//         <Button variant="outline-info">Search</Button>
//       </Form> */
//     )
//   }
// }
// export default Search
