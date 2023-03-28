import React from "react";
import "./product-item.css";

const ProductsItem = ({ productData }) => {
  return (
    <div className="col col-md-6 col-lg-4">
      <div className="card my-card">
        <img
          className="card-img-top"
          src={productData.thumbnail}
          alt={productData.title}
        />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{productData.title}</h4>
          <p className="lead">{productData.brand}</p>
          <p className="card-text mb-3">{productData.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="lead text-decoration-line-through">
              Price: <strong>{productData.price.toFixed(2)}$</strong>
            </p>
            <p className="lead">
              After Discount:
              <strong>
                {(
                  (productData.price * productData.discountPercentage) /
                  100.0
                ).toFixed(2)}
                $
              </strong>
            </p>
          </div>
          <button className="btn btn-primary my-2 mt-auto">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
