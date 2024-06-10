import React, {useState, useEffect} from 'react';
import axios from 'axios'
const SampleApi = () => {
    const [properties, setProperties] = useState([]);
    useEffect (()=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            console.log(res)
        })
   
      
    },[])
    return (
        <div>
            {properties.map((property)=>{
                <>
                Name: {property.title}
                </>
            })}
        </div>
    );
}

export default SampleApi;
