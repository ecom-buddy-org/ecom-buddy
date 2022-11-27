import React from 'react'
import ProductStyle from "./productstyle.module.css"
import Navbar from '../../Component/navbar/Navbar'
import Rating from '@mui/material/Rating';
import { useLocation } from "react-router-dom";
import { Shimmer } from 'react-shimmer'
import axios from 'axios';

function Product() {
  const [productData, setProductData] = React.useState({
    productURL: "",
    imageURL: "",
    title: "",
    asin: "",
    category: "",
    price: "",
    manufacturer: "",
    rating: "",
    ratings_total: ""
  });
  const { state } = useLocation();

  React.useEffect(() => {
    axios.get('https://api.rainforestapi.com/request?api_key=demo&amazon_domain=amazon.com&type=product&asin=B073JYC4XM').then(({ data }) =>
      setProductData({
        productURL: data.product.link,
        imageURL: data.product.images_flat,
        title: data.product.title,
        asin: data.product.asin,
        category: data.product.categories_flat,
        price: data.newer_model.price.value,
        manufacturer: data.product.manufacturer,
        rating: data.product.rating,
        ratings_total: data.product.ratings_total,
        model:data.product.model_number
      })
    );
  }, []); // <-- Have to pass in [] here!

  return (
    <>
      <Navbar />
      <div className={ProductStyle.Main_header}>
        <div className={ProductStyle.top_head}>
          <div><p>Product</p></div>
          <div>Category BSR</div>
          <div>Price</div>
          <div>Manufacturer</div>
          <div>Product rating</div>
        </div>

        <div className={ProductStyle.top_head1}>
          {productData.imageURL !== "" ? <div className={ProductStyle.section}><div className={ProductStyle.Pics}>
            <img
              className={ProductStyle.image1}
              src={productData.imageURL}
              alt="product"
            />
          </div>
            <div className={ProductStyle.sub_item_head}>{productData.title}<div className={ProductStyle.sub_item}>{productData.asin}</div></div></div> : <Shimmer className={ProductStyle.section} height={50} />}
          {productData.category !== "" ? <div className={ProductStyle.section}>{productData.category}</div> : <Shimmer className={ProductStyle.section} height={50} />}
          {productData.price !== "" ? <div className={ProductStyle.section}><div className={ProductStyle.text3}>${productData.price}</div></div> : <Shimmer className={ProductStyle.section} height={50} />}
          {productData.manufacturer !== "" ? <div className={ProductStyle.section}><div className={ProductStyle.text5}>{productData.manufacturer}</div></div> : <Shimmer className={ProductStyle.section} height={50} />}
          {productData.rating !== "" ? <div className={ProductStyle.section}><div className={ProductStyle.text5}><Rating name="read-only" value={productData.rating} readOnly /> ({productData.ratings_total}) reviews </div></div> : <Shimmer className={ProductStyle.section} height={50} />}
        </div>
      </div>
    </>
  )
}

export default Product