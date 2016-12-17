import {connect} from 'react-redux'
import {TOGGLE_NICE} from '../actions'
import Nice from '../components/Nice'

function mapStateToProps (state, ownProps) {
  return {
    isNice: state.nice
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    toggleNice: () => dispatch({type: TOGGLE_NICE})
  }
}

const NiceContainer = connect(mapStateToProps, mapDispatchToProps)(Nice)

export default NiceContainer
