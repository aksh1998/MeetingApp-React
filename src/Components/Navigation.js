import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

const Navigation = ({ user, logOutUser }) => {

    return (
        <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
            <div className="container-fluid">
                <Link to="/MeetingApp-react" className="navbar-brand">
                    <FaUsers className="mr-1" /> Meeting Log
          </Link>
                <div className="navbar-nav ml-auto">
                    {user && (
                        <Link className="nav-item nav-link" to="/MeetingApp-react/meetings">
                            meetings
                        </Link>
                    )}
                    {!user && (
                        <Link className="nav-item nav-link" to="/MeetingApp-react/login">
                            log in
                        </Link>
                    )}
                    {!user && (
                        <Link className="nav-item nav-link" to="/MeetingApp-react/register">
                            register
                        </Link>
                    )}
                    {user && (
                        <Link className="nav-item nav-link" to="/MeetingApp-react/login"
                            onClick={e => logOutUser(e)}>
                            log out
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}


export default Navigation;