import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'

export default class CompanySearchResults extends Component {
  state = {
    jobs: [],
  }

  componentDidMount() {
    this.getJobs()
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company_name='

  getJobs = async () => {
    const resp = await fetch(
      this.baseEndpoint + this.props.match.params.companyId
    )
    const { jobs } = await resp.json()
    
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state.jobs.map((jobData) => (
              <Job data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}
