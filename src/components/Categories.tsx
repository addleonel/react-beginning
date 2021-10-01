import * as React from 'react';

// Styles
import '../assets/styles/components/Categories.scss';

interface Props {
    title?: string;
}

const Categories: React.FC<Props> = ({ children, title }) => {
    return (
        <React.Fragment>
            <h3 className="categories__title">{ title }</h3>
            { children }
        </React.Fragment>
    );
}

export default Categories;