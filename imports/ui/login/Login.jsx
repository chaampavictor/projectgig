import React from 'react';
import {Meteor} from 'meteor/meteor';
import Footer from '../Footer';
import Navbar from '../Navbar';

class Login extends React.Component {

  login = event => {
    event.preventDefault();
    const {target} = event;
    const password = target.password.value;
    const email = target.email.value;

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        Materialize.toast(error.reason);
      } else {
        FlowRouter.go('/profile')
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div id="login-card" className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 card-style">
                <div className="card">
                  <br/>
                  <h5 className="card-title center">Login</h5>
                  <div className="card-content">
                    <form className="col s12" onSubmit={this.login}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="text" name='email' required/>
                          <label className="label" htmlFor="email">email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="password" type="password" name='password' required/>
                          <label className=" label" htmlFor="password">Password</label>
                        </div>
                      </div>
                      <button className="btn waves-light submit-button center" type="submit" name="action">Submit</button>
                    </form>
                    <a href="/registration" className={`${this.props.registration} link`}>create an account?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Login;
