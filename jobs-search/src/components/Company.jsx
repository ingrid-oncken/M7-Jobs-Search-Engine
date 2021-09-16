import { withRouter } from 'react-router'
import { Table } from 'react-bootstrap'

const Job = ({ props }) => {
  console.log(props)
  return (
    <div>
      <Table className="mt-5">
        <tbody>
          {props.map((j) => {
            return (
              <tr key={j._id}>
                <td>{j.title}</td>
                <td>
                  <a href={j.url}>{j.company_name}</a>
                </td>
                <td>{j.category}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
export default withRouter(Job)


//  return (
//    <div>
//      <Table className="mt-5">
//        <tbody>
//          {props.map((j) => {
//            return (
//              <tr key={j._id}>
//                <td>{j.title}</td>
//                <td>
//                  <a href={j.url}>{j.company_name}</a>
//                </td>
//                <td>{j.category}</td>
//              </tr>
//            )
//          })}
//        </tbody>
//      </Table>
//    </div>
//  )