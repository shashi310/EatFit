import React, { useEffect, useState } from 'react'
import "../Styles/MidContent.css";
import {
    Box,
    Button,
    Flex,
    Image,
    Select,
    SimpleGrid,
    Text,
    Input,
    useToast,
  } from "@chakra-ui/react";

const Product = () => {
    const [data,setData] = useState([])

const handleSort = async(e) =>{
    let value = e.target.value;
    if(value){
        try {
            const response = await fetch(`https://eatfitapi.onrender.com/products?_sort=price&_order=${value}`);
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const responseData = await response.json();
            setData(responseData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }else{
        fetchData()
    }
}
const handleFilter =async (e) =>{
    let value = e.target.value;
    if(value){
        try {
            const response = await fetch(`https://eatfitapi.onrender.com/products?category=${value}`);
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const responseData = await response.json();
            setData(responseData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }else{
        fetchData()
    }
}

const handleSeach= async (e)=>{
    let value = e.target.value;
    if(value){
        try {
            const response = await fetch(`https://eatfitapi.onrender.com/products?q=${value}`);
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const responseData = await response.json();
            setData(responseData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }else{
        fetchData()
    }
}

const fetchData = async () => {
    try {
      const response = await fetch('https://eatfitapi.onrender.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchFilters = async (value) => {
    try {
        const response = await fetch(`https://eatfitapi.onrender.com/products?q=${value}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }
useEffect(()=>{
      fetchData();
},[])


const toast = useToast();
const handleSubmit = (e) => {
  e.preventDefault();
  toast({
    title: "item added successfully",
    duration: 3000,
    status: "success",
    isClosable: true,
    position: "top",
  });
};


  return (
    <Box id="menu" w="88%" m="auto" mt="20px">
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      gap="15px"
      mt="30px"
      p="15px 10px"
      borderBottom="1px solid #bebebe"
      position="sticky"
      top="70px"
      bg="white"
      zIndex="99"
    >
      <Select w="32%" cursor="pointer" onChange={(e) => handleSort(e)}>
        <option value="">Sort By Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Select w="32%" cursor="pointer" onChange={(e) => handleFilter(e)}>
        <option value="">Filter By Category</option>
        <option value="Vegetarian">Veg</option>
        <option value="Non-Vegetarian">Non-Veg</option>
      </Select>
      <Input w="32%" placeholder='Search Dishes' onChange={(e)=> handleSeach(e)} />
    </Flex>

    <br />
  
    <br />

    <SimpleGrid
      w="100%"
      gap="35px"
      columns={{ base: "1", sm: "2", md: "3", lg: "3", xl: "3" }}
    >
      {data.map((ele, ind) => (
        <Box className="card_item" key={ele.des} p="20px" borderRadius="10px">
          <Box
            w="100%"
            position="relative"
            overflow="hidden"
            borderRadius="5px"
          >
            <Image
              className="card_item_image"
              w="100%"
              src={ele.image}
              alt={ele.price}
            />
            {ele.popular && (
              <Text
                className="card_item_popular"
                position="absolute"
                fontSize="13px"
                left="0"
                top="0"
                p="2px 5px"
                bg="rgb(235,12,119)"
                color="white"
              >
                Popular
              </Text>
              
            )}
            <Image
                position="absolute"
                left="5px"
                bottom="-10px"
                w="50px"
                src="https://curefoods-images.eatfit.in/image/listing-brands/HOME_PLATE/HOME_PLATE_IMAGE_production_2nd_Aug_23_10_41_04.svg"
                alt="logoIcon"
              />
            
          </Box>

          <Text fontWeight="600" m="10px 0">
            {ele.dish}
          </Text>
          <Text>Category:- {ele.category}</Text>

          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Text fontWeight="600">
              ${ele.price*0.5}{" "}
              <span
                style={{ color: "#838383", textDecoration: "line-through" }}
              >
                ₹{ele.price * 1.7}
              </span>
            </Text>
            <Button
              variant="styled"
              bg="rgb(5,36,101)"
              color="white"
              p="3px 15px"
              onClick={handleSubmit}
            >
              ADD
            </Button>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
  )
}

export default Product