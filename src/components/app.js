import React from 'react';
import AboutMenu from './about-menu';
import { Route, Link } from 'react-router-dom';

export default function App(props) {
    return (
        <div className="app">
            <Link
                to={'/about'}
            >
                <AboutMenu />
            </Link>
        </div>
    );
}
