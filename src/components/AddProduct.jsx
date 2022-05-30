import React from "react";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio,useDisclosure} from '@chakra-ui/react'
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const payload={
    "title": "",
    "category": "",
    "gender": "",
    "imageSrc": "",
    "price": ""
}
  const handleProduct=(e)=>{
    onClose();
    let {name,type,checked,value}=e.target;

  }

  
  return (
    <div >
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male" >Male</Radio>
            <Radio data-cy="add-product-gender-female" >Female</Radio>
            <Radio data-cy="add-product-gender-unisex" >Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" type="text" />
          <Button data-cy="add-product-submit-button"  onClick={(e)=>handleProduct()}>Create</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddProduct;
