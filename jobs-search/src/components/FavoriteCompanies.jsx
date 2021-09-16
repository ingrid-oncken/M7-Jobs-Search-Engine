import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeFromFavoriteAction } from '../actions'
import { useEffect } from 'react'

const mapStateToProps = (state) => ({
  favCompanies: state.favCompanies.companies,
  firstName: state.user.firstName,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (index) => dispatch(removeFromFavoriteAction(index)),
})

const Favorite = ({ favorite, firstName, removeFromFavorite, history }) => {
  useEffect(() => {
    if (!firstName) {
      // I want to go back!
      history.push('/')
    }
  }, [])

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {favorite.map((c, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromFavorite(i)}>
                <FaTrash />
              </Button>
              {c.title}
            </li>
          ))}
        </ul>
      </Col>
      
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
