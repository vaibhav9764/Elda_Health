import React from 'react'
import Navbar from './Navbar'
import product_img from '../Images/product.jpg'
import { Link } from 'react-router-dom';

function Product() {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <div className="container justify-content-start mx-4">
                    <div className="d-flex flex-column " >
                        <h2>Yoga for Mind</h2>
                        <div><img src={product_img} alt="Not found" /></div>
                        <div>
                            <h2>What is Yoga for Mind ?</h2>
                            <p>The yoga for mind session involve minimal physical movement and relies on techniques such as Pranayam and meditation suited for women who cannot
                                perform more physical forms of yoga and are looking for relief from concern such as stress, anxiety, low mode etc
                            </p> </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="d-flex flex-column " >
                        <h2>Choose your Package</h2>
                        <div className="d-flex flex-column border border-dark border-3 rounded p-3 my-2">
                            <div className="d-flex justify-content-between ">
                                <b>6 Month</b>
                                <p>918/Month</p>
                            </div>
                            <div className="d-flex justify-content-between ">
                                <b>Rs 5499</b>
                                <Link to="/batch" className="btn btn-danger">
                                    Buy Now
                                </Link>

                            </div>
                        </div>
                        <div className="d-flex flex-column border border-dark border-3 rounded p-3 my-2">
                            <div className="d-flex justify-content-between ">
                                <b>3 Month</b>
                                <p>999/Month</p>
                            </div>
                            <div className="d-flex justify-content-between ">
                                <b>Rs 5499</b>
                                <Link to="/batch" className="btn btn-danger">
                                    Buy Now
                                </Link>

                            </div>
                        </div>
                        <div className="d-flex flex-column border border-dark border-3 rounded p-3 my-2">
                            <div className="d-flex justify-content-between ">
                                <b>1 Month</b>
                                <p>1199/Month</p>
                            </div>
                            <div className="d-flex justify-content-between ">
                                <b>Rs 1199</b>
                                <Link to="/batch" className="btn btn-danger">
                                    Buy Now
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
