import { withRouter } from 'react-router'
import { Table } from 'react-bootstrap'

const Job = ({company}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{company.title}</td>
            <td>
              <a href={company.url}>{company.company_name}</a>
              
            </td>
            <td>{company.category}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default withRouter(Job)
