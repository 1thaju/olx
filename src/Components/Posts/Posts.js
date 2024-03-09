import React, { useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import Heart from '../../assets/Heart';
import './Post.css';
import { getDocs, collection } from 'firebase/firestore';
import  { ProductDetails } from '../ProductDetails'

function Posts() {
  const [products, setProducts] = useState([]);
  const{ object,setObject } = useContext(ProductDetails)
  const navigate = useNavigate()
    useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollection);

      const productsData = [];

      querySnapshot.forEach((doc) => {
        productsData.push(doc.data());
      });

      setProducts(productsData);
    };

    fetchData();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((item) => (
            <div className="card" key={item.id} onClick={()=>{
              setObject(item)
              navigate('/view')
            }}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {item.price.price.toString()}</p>
                <span className="kilometer">{item.category.category.toString()}</span>
                <p className="name">{item.name.name.toString()}</p>
              
              </div>
              <div className="date">
                <span>{item.createdat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {item.price.price.toString()}</p>
                <span className="kilometer">{item.category.category.toString()}</span>
                <p className="name">{item.name.name.toString()}</p>
              
              </div>
              <div className="date">
                <span>{item.createdat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
