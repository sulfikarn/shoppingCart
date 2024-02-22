import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Food from '../../assets/food.jpg'
import './ProductList.css'
import CartButton from '../CartButton/CartButton';
function ProductList() {
  return (
        <Fragment>
            <Container>
                <div className='row justify-content-md-center mt-4'>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-column'>
                            <h5 className='text-primary'>Cart</h5>
                            <p className='text-white'>SAR 7.95</p>
                            <p className='text-white'>Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette </p>
                            <div className="btn-continer bg-success">
                                <button className="button bg-success">-</button>
                                    <span className="count">0</span>
                                <button className="button bg-success">+</button>
                            </div>
                            <p className='text-danger'>Customization available</p>
                        </div>
                            
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary pe-2'>Cart</h6>
                                <div className='w-25'>
                                    <img src={Food} alt='food' className='img-fluid'/>
                                </div>
                        </div>
                            
                    </div>
                    <hr/>

                    {/* SECOND PRODUCT */}

                    <div className='col-sm-6'>
                        <div className='d-flex flex-column'>
                            <h5 className='text-primary'>Cart</h5>
                            <p className='text-white'>SAR 7.95</p>
                            <p className='text-white'>Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette </p>
                            <div className="btn-continer bg-success">
                                <button className="button bg-success">-</button>
                                    <span className="count">0</span>
                                <button className="button bg-success">+</button>
                            </div>
                            <p className='text-danger'>Customization available</p>
                        </div>
                            
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary pe-2'>Cart</h6>
                                <div className='w-25'>
                                    <img src={Food} alt='food' className='img-fluid'/>
                                </div>
                        </div>
                            
                    </div>
                    <hr/>
                
                {/* THIRD PRODUCT */}

                <div className='col-sm-6'>
                        <div className='d-flex flex-column'>
                            <h5 className='text-primary'>Cart</h5>
                            <p className='text-white'>SAR 7.95</p>
                            <p className='text-white'>Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette </p>
                            <CartButton/>
                            <p className='text-danger'>Customization available</p>
                        </div>
                            
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary pe-2'>Cart</h6>
                                <div className='w-25'>
                                    <img src={Food} alt='food' className='img-fluid'/>
                                </div>
                        </div>
                            
                    </div>
                    <hr/>

                </div>
            </Container>
        </Fragment>
  )
}

export default ProductList
