import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Four404 from './Four04.jsx'

let URL = "http://localhost:3002/Products";
let URL2 = "/iphones.json";

function Productspages() {
  const [product, setProduct] = useState([]);
  // console.log(useParams);
  const { productID } = useParams();

  useEffect(() => {
    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        // console.log(productList);
        const singleproduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleproduct);
      })
      .catch(() => console.log("Error: unable to fetch"));
  }, [productID]);
  console.log(product);


  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            <br />
            <br />
            {product.map((product) => {
              return (
                <div key={product.product_id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wraper font-weight-bold">
                        {product.product_name}
                      </div>

                      <div className="brief-description">
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting_price">
                        {`Starting at ${product.starting_price}`}
                      </div>

                      <div className="monthly-price">{product.price_range}</div>

                      <div className="product_details">
                        {product.product_description}
                      </div>
                    </div>

                    <div className={`col-sm-12  col-md-6`}>
                      <div className="product_image">
                        <img src={product.product_img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four404 />;
  }
}

export default Productspages;