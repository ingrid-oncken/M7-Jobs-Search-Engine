import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { withRouter } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { connect } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../actions'

const mapStateToProps = (state) => ({
  favoriteLength: state.favCompanies.companies.length,
  firstName: state.user.firstName,
})

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => dispatch(setUsernameAction(name)),
})

const FavCounter = ({
  favoriteLength,
  firstName,
  setUsername,
  history,
  location,
  match,
}) => {
  const [name, setName] = useState('')

  return (
    <div className="ml-auto mt-2">
      {firstName ? (
        <Button color="primary" onClick={() => history.push('/favorite')}>
          <FaRegHeart />
          <span className="ml-2">{favoriteLength}</span>
        </Button>
      ) : (
        <FormControl
          placeholder="Insert your name"
          aria-label="Username"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          onKeyDown={(e) => {
            console.log(e)
            if (e.key === 'Enter') {
              setUsername(name)
            }
          }}
        />
      )}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavCounter))
