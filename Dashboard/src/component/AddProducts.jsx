import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import axios from "axios";
function AddProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const ref = React.useRef(null);
  const finalRef = React.useRef(null);

  let formsub = (e) => {
    e.preventDefault();
    const formData = new FormData(ref.current);
    let obj = {
      category: formData.get("category"),
      title: formData.get("title"),
      img1: formData.get("img1"),
      img2: formData.get("img2"),
      img3: formData.get("img3"),
      img4: formData.get("img4"),
      colour: formData.get("colour"),
      price1: formData.get("price1"),
      price2: formData.get("price2"),
      discount: formData.get("discount"),
      site: formData.get("site"),
    };
    fetchdata();
    async function fetchdata() {
      axios.post("https://backend-faballey.vercel.app/faballey/product", {obj:obj})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      // let res=await axios.post("https://backend-faballey.vercel.app/faballey/product",obj)
      // let res=await axios.post("https://backend-faballey.vercel.app/faballey/product",obj)

      // let data = await res.json();
      // console.log("data: ", data);
    }
  };
  return (
    <>
      <Button colorScheme="teal" leftIcon={<GoPlus />} onClick={onOpen}>
        Add products
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <form onSubmit={formsub} ref={ref}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Products</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Your Description"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input
                  name="category"
                  type="text"
                  placeholder="Enter Your Category"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Colour</FormLabel>
                <Input
                  name="colour"
                  type="text"
                  placeholder="Enter Your Product Name"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price1</FormLabel>
                <Input
                  name="price1"
                  type="text"
                  placeholder="Enter Your Price"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Price2</FormLabel>
                <Input
                  name="price2"
                  type="text"
                  placeholder="Enter Your Price"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Discount</FormLabel>
                <Input
                  name="discount"
                  type="text"
                  placeholder="Enter Your Discount"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Site</FormLabel>
                <Input
                  name="site"
                  type="text"
                  ref={initialRef}
                  placeholder="Site"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Image URL1</FormLabel>
                <Input
                  name="img1"
                  type="text"
                  ref={initialRef}
                  placeholder="Image URL"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL2</FormLabel>
                <Input
                  name="img2"
                  type="text"
                  ref={initialRef}
                  placeholder="Image URL"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL3</FormLabel>
                <Input
                  name="img3"
                  type="text"
                  ref={initialRef}
                  placeholder="Image URL"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image URL4</FormLabel>
                <Input
                  name="img4"
                  type="text"
                  ref={initialRef}
                  placeholder="Image URL"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={formsub} colorScheme="blue" mr={3}>
                Post
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default AddProducts;
