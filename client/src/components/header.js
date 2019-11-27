import React from 'react';
import Container from './container.js';
import Row from './row';
import Column from './column';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <div className="col s12">
            <Container>
                <Row helper={'justify-content-around'}>
                    <Column>
                        <h1>{props.pageTitle}</h1>
                    </Column>
                </Row>
                <Row helper={'justify-content-around'}>
                    <Column md={6}>
                        <NavLink to="/search" className="btn btn-info btn-lg">
                            Search
                        </NavLink>
                    </Column>
                    <Column md={6}>
                        <NavLink to="/saved" className="btn btn-warning btn-lg">
                            Saved
                        </NavLink>
                    </Column>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
