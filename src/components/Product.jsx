import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from '@chakra-ui/react';


const Product = ({data}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  console.log(data);
  return (
    <div >
    <Stack spacing="10px" direction={["column"]}  data-cy="product">
      <Image data-cy="product-image" src={data.imageSrc} />
      <Text data-cy="product-category">{data.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{data.title}</Heading>
      <Box data-cy="product-price">{data.price}</Box>
    </Stack>
    </div>
  );
};

export default Product;
