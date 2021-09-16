import React from 'react'
import { Container, Row, Col, FormControl, Form } from 'react-bootstrap'

import Job from './Job'

export default class MainSearch extends React.Component {
  state = {
    query: '',
    results: [],
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await fetch(this.baseEndpoint + this.state.query + '&limit=12')
    const results = await resp.json()

    this.setState({ results: results.data })
    console.log('this.setState({ results })', this.state.results)

    if (!resp.ok) {
      alert('ERROR FETCHING THE DATA')
      return
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormControl
                type="search"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              ></FormControl>
            </Form>
          </Col>
          <Col>
            {this.state.results.map((jobData) => (
              <Job data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}
//${searchValue}&limit=12
// candidate_required_location: 'USA Only'
// category: 'All others'
// company_name: 'pureIntegration'
// description: '<div class="h3">Company Description</div>\n<p>As a Technical Delivery Manager at pureIntegration, you will be responsible for leading technology teams through the successful planning and execution of large-scale technical programs that help to solve complex customer problems. You will act as a trusted advisor to our customers and collaborate with them and their partners to help them achieve their goals through advocacy, planning, training and, and guiding them through technical barriers.  You will understand the customer’s business objectives and regularly engage with their internal and external stakeholders.</p>\n<p>Technical Delivery Manager’s at pureIntegration have deep technical roots with hands-on experience as technical or software architects.  A successful candidate understands current trends and best practices in areas such as automation, configuration management, monitoring and observability, public cloud, and IT service management, and is not opposed to getting hands-on with engineers on the team as needed.</p>\n<p><strong><u>Location:</u></strong> Remote Role - Physical Locations, Herndon, VA</p>\n<p><strong>Work Arrangement:</strong>  FTE with Benefits</p>\n<p><strong>Work Authorization:</strong> EAD, GC, and USCIT - We Do Not Sponsor H1B Visas, or C2C</p>\n<p>You Will:</p>\n<ul>\n<li>Manage a team of Subject Matter Experts, create project plans and technical architecture to deliver the services/products/solutions that were agreed upon with your customers,</li>\n<li>Create the value for customers by partnering to define success and building a joint plan with identified objectives, stakeholders, milestones, risks and metrics needed to achieve their goals,</li>\n<li>Lead customer facing meetings both in person and through video chat,</li>\n<li>Form strategic relationships with key stakeholders to understand your customer’s business within their industry and develop a bespoke roadmap,</li>\n<li>Work cross-functionally both internally and within your customer’s organizations to provide and implement solutions,</li>\n<li>Work with customers’ partners to help deliver a joint approach to ensuring the success of a project,</li>\n<li>Work closely with Account Management and foster long term customer relationships that grow loyalty to pureIntegration.</li>\n</ul>\n<p>We’re looking for someone who has:</p>\n<ul>\n<li>Bachelor’s degree in Computer Science, Information Technology or equivalent practical experience,</li>\n<li>7+ years of software engineering, systems engineering or technical product/program management experience, in enterprise level client-facing work,</li>\n<li>Deep expertise in one or more of the following areas: Intelligent Automation, Configuration Management and DevOps, Monitoring and Observability, Cloud, ITSM,</li>\n<li>Ability to effectively present technical materials to various stakeholder groups, and engage with executives of enterprises on both technical and non-technical matters,</li>\n<li>Excellent written and verbal communication skills</li>\n<li>Ability to prioritize and respond to fluctuating, high-impact, urgent asks from multiple channels including chat, video conference, email, in-person,</li>\n<li>A professional, confident and collaborative demeanor. You are an adept client relationship manager, capable of engaging in business-level and technical conversations at multiple levels of the organization,</li>\n<li>Practiced in small to medium scale project management,</li>\n<li>Strong organization skills and a self-starting mindset,</li>\n<li>Ability to support some travel based on client needs.</li>\n</ul>\n<p> </p>\n<p><br><br></p>\n<div class="h3">Job Description</div>\n<p><br><br></p>\n<div class="h3">Qualifications</div>\n<p><br><br></p>\n<div class="h3">Additional Information</div>\n<p>All your information will be kept confidential according to EEO guidelines.</p>\n<div> </div>\n<p>Are you self-motivated, collaborative, and client-focused? Are you looking for a challenging and rewarding career? Then <strong>pureIntegration </strong>would love to hear from you! Your career journey starts here! </p>\n<p><strong>pureIntegration,</strong> a systems integration company headquartered in the DC area, serves clients in the fastest growing industries – communications, media, and entertainment. Our industry-focused offerings and collaborative client approach has resulted in a 97% client satisfaction rating. As a leading service organization, we recognize our most valuable assets are our people, both as individuals and how they come together as a whole. As such, we encourage our team members to become fearless in exploring ideas and opportunities to act on them.</p>\n<p>In over 16 years of Digital Transformation consulting and professional services, pureIntegration has successfully designed, integrated, and deployed winning solutions at scale which have resulted in measurable performance increases. Most importantly, we have done it while maintaining 97% client satisfaction for the past 15 years.  With a rich heritage in Communications, Media and Entertainment, our diverse and expanding portfolio includes Fortune 500 enterprises spanning Utilities, Manufacturing, Insurance, CPG, Healthcare, Logistics and other select verticals.</p>\n<p><strong><em>pureIntegration is an Equal Opportunity Employer (EOE), qualified applicants are considered for employment without regard to age, race, color, religion, sex, national origin, sexual orientation, disability, or veteran status.</em></strong></p>\n'
// job_type: 'full_time'
// publication_date: '2021-09-12T05:55:48.000Z'
// salary: ''
// title: 'Technical Delivery Manager'
// url: 'https://remotive.io/remote-jobs/all-others/technical-delivery-manager-890461'
