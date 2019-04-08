import React, { Component } from 'react';
import {FormGroup, Input, Label} from "reactstrap";

export default class Step2 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		let userData = {...this.props.userData};
		userData['type'] = event.target.value;
		this.props.updateStore(userData)
	}
	render() {
		let {type} = this.props.userData;
		return (
			<div className="step step3 mt-5">
				<div className="row justify-content-md-center">
					<div className="col-lg-8">
						<form>
							<div className="form-group row justify-content-center">
								<label htmlFor="vision" className="col-sm-4 col-form-label"><h4>Loại tài khoản</h4></label>
								<div >
									<FormGroup check>
										<Label check>
											<Input type="radio" name="type" value="teacher" onChange={this.onInputChange} checked={type==='teacher'}/>
											<h5>Giáo viên</h5>
										</Label>
									</FormGroup>
									<FormGroup check disabled>
										<Label check>
											<Input type="radio" name="type" value="student" onChange={this.onInputChange} checked={type==='student'}/>
											<h5>Học viên</h5>
										</Label>
									</FormGroup>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
