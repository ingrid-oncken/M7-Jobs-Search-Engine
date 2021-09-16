import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Job = ({ data }) => {
  return () => (
    <>
      <Row>
        <Col>{data.title}</Col>
        <Col>
          <Link to={`/${data._id}`}>{data.company_name}</Link>
        </Col>
      </Row>
    </>
  )
}
export default Job
