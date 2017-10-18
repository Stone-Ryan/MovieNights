import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    const { formType } = this.props;

    return (
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {formType}
          </label>
          <input onChange={this.update('username')}
                 type='text'
                 value={this.state.username}/>

               <br>
               </br>

          <label>
            Password
          </label>
          <input onChange={this.update('password')}
                 type='password'
                 value = {this.state.password}/>

          <input type='submit' value = 'Submit' />
        </form>

      </div>
    )
  }
};

export default withRouter(SessionForm);
