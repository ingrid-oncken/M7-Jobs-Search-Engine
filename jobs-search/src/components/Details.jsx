import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addToFavoriteAction } from '../actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (fav) => dispatch(addToFavoriteAction(fav)),
})

class Details extends Component {
  state = {
    category: null,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCompany !== this.props.selectedCompany) {
      this.setState({
        company: this.props.selectedCompany,
      })
    }
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.company ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.company.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}></Col>
              <Col sm={8}>
                {/* <p>
                  <span className="font-weight-bold">Description:</span>
                  {this.state.company.description}
                </p> */}
                <Button
                  color="primary"
                  onClick={() => this.props.addToCart(this.state.company)}
                >
                  LIKE
                </Button>
                }
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Please search a company!</h3>
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
