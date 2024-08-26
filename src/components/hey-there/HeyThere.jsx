import React, { useState } from 'react'
import "./HeyThere.scss"
import { Container } from '../../utils/Utils'
import products from "../../db/data.json"
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const HeyThere = () => {
    const [openProducts, setOpenProducts] = useState(false)
    
    

    const handleOpenProducts = (name)=>{
        if(openProducts !== name){
            setOpenProducts(name)                      
        }
        else{
            setOpenProducts(false)
        }
    }


  return (
    <div className='hey-there__main'>
        <Container>
            <div className="hey-there__title">
                <h2>Hey There!</h2>
            </div>
        </Container>
        <div className="hr-line"></div>
        <Container>
            <div className="hey-there__products">
                <h2>What can we help you find today?</h2>
                <div className="hey-there__cards">
                    {
                        products?.["categories"]?.map((product, index)=>
                            <div className="card" key={index} onClick={()=>{handleOpenProducts(product.title)}}>
                                <div className="card-img">
                                    <img src={product?.img} alt={product.title} />
                                </div>
                                <div className="card-text">
                                    <p>{product.text}</p>
                                </div>
                            </div>                            
                        )
                    }
                    {
                        openProducts != false && products?.allProducts.filter((product)=>product.category === openProducts).map((product, index)=>
                            <div className="hidden__product" key={index}>
                                <img src={product?.img?.[index]} alt="product image"/> {/* we should give one index to photo's src */}
                                <p>{product.title}</p>
                                <div className="hidden__product-buttons">
                                    <Link to={`/single-page/${product.id}`}>Learn</Link>
                                    <button type='button'>Shop <FaChevronRight/></button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="fresh-look">
                    <h3>Fresh look. Fresh printable ideas</h3>
                    <p>Discover, create, and learn with our collection of free HP Printables.<Link to={"/"}><span><FaChevronRight/></span>Explore</Link></p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeyThere