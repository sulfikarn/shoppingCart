import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../redux/category';
import { Container } from 'react-bootstrap';

const CategoryTabs = () => {
    const categoryList = useSelector(state => state?.cart?.items[0])
    const [activeTab, setActiveTab] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (categoryList && categoryList.length > 0 && activeTab === null) {
            const catId = categoryList[1].menu_category_id
            setActiveTab(catId);
            dispatch(setActiveCategory(catId))
        }
    }, [categoryList, activeTab, dispatch]);

    const handleClick = (category) => {
        setActiveTab(category);
        dispatch(setActiveCategory(category));
    };
    return (
        <Container>
            <ul className="tabmenu ps-0 border-0 d-flex flex-wrap">
                {categoryList?.slice(1).map(category =>
                    <li className={activeTab === category.menu_category_id ? 'active' : ''} key={category.menu_category_id} onClick={() => handleClick(category.menu_category_id)}>{category.menu_category}</li>
                )}
            </ul>
        </Container>

    );
};
export default CategoryTabs;