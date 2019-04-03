import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': props.getStore().email,
      'gender': props.getStore().gender
    };
    // this flag enables onBlur validation as user fills forms
    this._validateOnDemand = true;

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  isValidated() {
    // grab user entered vals
    const userInput = this._grabUserInput(),
      // run the new input against the validator
      validateNewInput = this._validateData(userInput);
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewInput).every(k => validateNewInput[k] === true)
    ) {
      if (
        this.props.getStore().email !== userInput.email ||
        this.props.getStore().gender !== userInput.gender
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userInput,
          // use this to notify step4 that some changes took place and prompt the user to save again
          'savedToCloud': false
        });
        // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State
      this.setState(
        Object.assign(
          userInput,
          validateNewInput,
          this._validationErrors(validateNewInput)
        )
      );
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand) {
      return;
    }

    // grab user entered vals
    const userInput = this._grabUserInput(),
      // run the new input against the validator
      validateNewInput = this._validateData(userInput);

    this.setState(
      Object.assign(
        userInput,
        validateNewInput,
        this._validationErrors(validateNewInput)
      )
    );
  }

  _validateData(data) {
    return {
      // required: regex w3c uses in html5
      'emailVal': (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(
        data.email
      ),
      // required: anything besides N/A
      'genderVal': data.gender !== ''

    };
  }

  _validationErrors(val) {
    const errMsgs = {
      'emailValMsg': val.emailVal ? '' : 'A valid email is required',
      'genderValMsg': val.genderVal ? '' : 'A gender selection is required'

    };

    return errMsgs;
  }

  _grabUserInput() {
    return {
      // 'email': this.refs.email.value,
      'email': this.email.value,
      'gender': this.gender.value
    };
  }

  render() {
    // explicit class assigning based on validation
    const notValidClasses = {};

    if (typeof this.state.genderVal === 'undefined' || this.state.genderVal) {
      notValidClasses.genderCls = 'form-control';
    } else {
      notValidClasses.genderCls = 'is-invalid form-control';
      notValidClasses.genderValGrpCls = 'text-danger';
    }

    if (typeof this.state.emailVal === 'undefined' || this.state.emailVal) {
      notValidClasses.emailCls = 'form-control';
    } else {
      notValidClasses.emailCls = 'is-invalid form-control';
      notValidClasses.emailValGrpCls = 'text-danger';
    }

    return (
      <div className="step step1 mt-5 ">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="">
              <h4>Welcome, Please Enter your info</h4>
              <form id="Form" className="form-horizontal mt-2">
                <div className="form-group content form-block-holder">
                  <label className="control-label">Gender</label>
                  <div>
                    <select
                      //ref="gender"
                      ref={(e) => { this.gender = e; }}
                      autoComplete="off"
                      className={notValidClasses.genderCls}
                      required
                      defaultValue={this.state.gender}
                      onBlur={this.validationCheck}
                    >
                      <option defaultValue="">Please select</option>
                      <option defaultValue="Male">Male</option>
                      <option defaultValue="Female">Female</option>
                      <option defaultValue="Other">Other</option>
                    </select>
                    <div className={notValidClasses.genderValGrpCls}>
                      {this.state.genderValMsg}
                    </div>
                  </div>
                </div>
                <div className="form-group content form-block-holder">
                  <label className="control-label ">Email</label>
                  <div>
                    <input
                      //ref="email"
                      ref={(f) => { this.email = f; }}
                      autoComplete="off"
                      type="email"
                      placeholder="john.smith@example.com"
                      className={notValidClasses.emailCls}
                      required
                      defaultValue={this.state.email}
                      onBlur={this.validationCheck}
                    />
                    <div className={notValidClasses.emailValGrpCls}>
                      {this.state.emailValMsg}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
