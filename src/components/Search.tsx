import * as React from 'react';

// Styles
import '../assets/styles/components/Search.scss';

const Search: React.FC = () => {
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input" placeholder="Buscar..."/>
        </section>
    );
}

export default Search;