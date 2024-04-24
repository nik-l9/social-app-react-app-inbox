import React, { useRef, useEffect, useState } from 'react';
import '../styles/switch.css';

function Switch({ onThemeChange }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const isChecked = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setChecked(isChecked);
        updateBodyClass(isChecked);
        onThemeChange(isChecked ? 'dark' : 'light');
    }, []);

    const ref = useRef(null);

    const handleChange = () => {
        const isChecked = ref.current.checked;
        setChecked(isChecked);
        updateBodyClass(isChecked);
        onThemeChange(isChecked ? 'dark' : 'light');
    };

    const updateBodyClass = (isChecked) => {
        if (isChecked) {
            document.body.classList.remove('is-light-mode');
            document.body.classList.add('is-dark-mode');
        } else {
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    };

    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} type="checkbox" className="checkbox" checked={checked} id="checkbox" onChange={handleChange} />
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    );
}

export default Switch;
