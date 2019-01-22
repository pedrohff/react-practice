import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

    onSubmit = formProps => {
        this.props.signup(formProps, () => { this.props.history.push('/feature') });
    }

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <div style={{color: 'red'}}>
                    {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                    {this.renderErrorMessage()}
                </fieldset>

                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <button>Signup</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export const formName = 'signup';
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: formName }),
)(Signup);