import React, { useState } from 'react';
import '../styles/header.css';
import './Switch.js';
import Switch from './Switch.js';
import SuprSendInbox from '@suprsend/react-inbox';

function Header({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <header className={`header ${theme}-theme`}>
            <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Implementing React inapp notification center.</p>
                    </div>
                    <SuprSendInbox
    workspaceKey={process.env.REACT_APP_SUPRSEND_WORKSPACE_KEY}
    subscriberId={process.env.REACT_APP_SUPRSEND_SUBSCRIBER_ID}
    distinctId={process.env.REACT_APP_SUPRSEND_DISTINCT_ID}
    themeType={theme} 
/>
                    <Switch onThemeChange={toggleTheme} />
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;
