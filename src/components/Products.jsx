import React, { useEffect } from "react";
import AddProduct from '../components/AddProduct';
import axios from "axios";
import {Flex,Grid} from '@chakra-ui/react';
import Product from '../components/Product';
import Pagination from "./Pagination";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const[data,setData]=React.useState([]);
  const[page,setPage]=React.useState(1);
  const[limit,setLimit]=React.useState(3);
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((data)=>{setData(data.data)});
    
  },[page,limit]);

  const handlePage=(e)=>{
    let {value}=e.target;
    console.log(value,page);
    if( value === 1){

    }else if( value ===2 ){
      page--;
      setPage(page);
    }else if ( value === 3){

    }else if( value === 4){

    }else if ( value === 5){
      page++;
      setPage(page);
    }else if ( value === 6 ){
      
    }else {

    }
    console.log(page);
  }

  return (
    <Flex>
      <AddProduct/>
      <Grid>{data.map((elem)=>(
        <Product key={elem.id} data={elem}/>
      ))}</Grid>
      <Pagination handlePage={handlePage}/>
    </Flex>
  );
};

export default Products;
