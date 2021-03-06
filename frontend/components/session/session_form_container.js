import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login, signup } from '../../actions/sessions_actions';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
