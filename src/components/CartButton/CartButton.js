import React, { Fragment } from 'react'

const CartButton = () => {
    return (
        <Fragment>
            <div className="btn-continer bg-success">
                <button className="button bg-success">-</button>
                <span className="count">0</span>
                <button className="button bg-success">+</button>
            </div>
        </Fragment>
    )
}

export default CartButton
