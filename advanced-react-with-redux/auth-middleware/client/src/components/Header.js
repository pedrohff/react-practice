import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends React.Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <Fragment>
                    <Link to="/signout">Signout</Link>
                    <Link to="/feature">Feature</Link>
                </Fragment>
            )
        } else {
            return(
                <Fragment>
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>
                </Fragment>
            )
        }
    }

    render() {
        return(
            <div className="header">
                <Link to="/">Redux Auth</Link>
                {this.renderLinks()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
    }
}

export default connect(mapStateToProps)(Header);