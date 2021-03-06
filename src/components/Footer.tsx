import * as React from 'react';

// Styles
import '../assets/styles/components/Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <a href="/">Terminos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    );
}

export default Footer;