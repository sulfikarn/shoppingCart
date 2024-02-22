import React from 'react';
import { Container } from 'react-bootstrap';

const CategoryTabs = ({ categories }) => {

    const handleClick = (category) => {
        console.log(category)
    };

    return (
        <Container>
            <ul className="nav nav-tabs border-0">
                {categories?.map((category, index) => (
                    <li className="nav-item border-bottom border-danger" key={index}>
                        <button
                            className="nav-link border-0"
                            onClick={() => handleClick(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </Container>

    );
};

export default CategoryTabs;
