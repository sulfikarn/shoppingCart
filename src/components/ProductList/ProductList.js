import React, { Fragment, useEffect } from 'react'
import { addItem, incrementQuantity, decrementQuantity } from '../../redux/cart';
import { selectActiveCategory } from '../../redux/category';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchProducts } from '../../api/ProductApi';
import './ProductList.css'

function ProductList() {
    const activeCategory = useSelector(selectActiveCategory);
    const productsDish = useSelector(state => state?.cart?.items[0])
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const fetchData = await fetchProducts();
                let shopName = fetchData.data[0].restaurant_name
                let restaurant = [shopName];
                fetchData.data[0].table_menu_list.forEach(product => {
                    var category_dishes = product["category_dishes"]
                    category_dishes.forEach(dishList => {
                        dishList.quantity = 0;
                    });
                    restaurant.push(product)

                });
                dispatch(addItem(restaurant))

            } catch (error) {
                // Handle error, e.g., show an error message to the user
            }
        };

        fetchDataAsync();
    }, [dispatch]);

    const activeData = productsDish?.find((item) => item.menu_category_id === activeCategory);


    const handleIncrement = (categoryId, dishId) => {
        dispatch(incrementQuantity({ catId: categoryId, dishId: dishId }));
    }

    const handleDecrement = (categoryId, dishId) => {
        dispatch(decrementQuantity({ catId: categoryId, dishId: dishId }));
    }

    return (

        <Fragment>
            <Container>
                <div className='row justify-content-md-center mt-4'>
                    {activeData?.category_dishes?.map(dishitems =>
                        <>
                            <div className='col-sm-6'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex align-items-center mb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="1.5" />
                                            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
                                        </svg>
                                        <p className='dish-name ps-2'>{dishitems.dish_name} </p>
                                    </div>

                                    <p className='dish-price text-white mb-2 mt-1'>{dishitems.dish_currency}  {dishitems.dish_price}</p>
                                    <p className='dish-description mb-2'>{dishitems.dish_description}</p>
                                    <div className="btn-continer mb-2 mt-2">
                                        <div className='btn-wrapp'>
                                            <button className='border-0 text-white' onClick={() => handleDecrement(activeCategory, dishitems.dish_id)}>-</button>
                                            <span className='count-text text-white'>{dishitems.quantity}</span>
                                            <button className='border-0 text-white' onClick={() => handleIncrement(activeCategory, dishitems.dish_id)}>+</button>
                                        </div>

                                    </div>
                                    <p className='customization text-danger mb-2'>{dishitems.addonCat.length > 0 && 'Customization available'}</p>
                                </div>

                            </div>
                            <div className='col-sm-6'>
                                <div className='d-flex justify-content-end align-items-center'>
                                    <h6 className='dish-colories text-white pe-2'>{dishitems.dish_calories} Calories</h6>
                                    <div className='w-25'>
                                        <img src={dishitems.dish_image} alt='food' className='img-fluid' style={{ objectFit: 'cover', height: '100%' }} />
                                    </div>
                                </div>

                            </div>
                            <hr />
                        </>
                    )}
                </div>
            </Container>
        </Fragment>
    )
}
export default ProductList