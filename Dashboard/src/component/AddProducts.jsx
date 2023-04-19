import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button,FormControl,FormLabel,Input,useDisclosure} from '@chakra-ui/react'
import { GoPlus } from "react-icons/go";
function AddProducts() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button colorScheme='teal' leftIcon={<GoPlus />}  onClick={onOpen}>Add products</Button>
    
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input ref={initialRef} placeholder='Image URL' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Name</FormLabel>
              <Input placeholder='Enter Your Product Name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Enter Your Price' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Discount</FormLabel>
              <Input placeholder='Enter Your Discount' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input placeholder='Enter Your Category' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Enter Your Description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AddProducts