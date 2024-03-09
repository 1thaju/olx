import React, { Fragment, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { v4 } from 'uuid';
import { storage } from '../firebase/config'
import {
  ref,
  uploadBytes,
  getDownloadURL 
} from "firebase/storage";
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../store/Context';
import { getDoc,doc } from 'firebase/firestore';

const Create = () => {
  const [name,setName] = useState()
  const [category,setCategory] = useState()
  const [price,setPrice] = useState()
  const [image,setImage] = useState()
  const navigate = useNavigate()
  const date =new Date()
  const {userName} = useContext(AuthContext)

  
 function handleSubmit(e){
    e.preventDefault()
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log("Image uploaded successfully!", snapshot);
      getDownloadURL(imageRef).then(async(url)=>{
        await addDoc(collection(db,"products"),{
          name : {name},
          category : {category},
          price : {price},
          url : url,
          userid : userName.uid,
          createdat : date.toDateString()
        })
      })
    }).catch((error) => {
      console.error("Error uploading image:", error);
    });
    navigate("/")
 }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input onChange={(e)=>{
              e.preventDefault()
              setName(e.target.value)
            }}
              className="input"
              type="text"
              id="fname"
              name={name}
              defaultValue="Item"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input onChange={(e)=>{
              e.preventDefault()
              setCategory(e.target.value)
            }}
              className="input"
              type="text"
              id="fname"
              name={category}
              defaultValue="Type"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e)=>{
              e.preventDefault()
              setPrice(e.target.value)
            }} className="input" type="number" id="fname" name={price} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
         
            <br />
            <input onChange={(e)=>{
              e.preventDefault();
              setImage(e.target.files[0])
            }} type="file" accept='image/*' />
            <br />
            
            <button onClick = {handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
