import React from 'react'
import { useToast ,Wrap, WrapItem, Button} from '@chakra-ui/react'
function PopupToast() {
    const toast = useToast()
    const positions = [
      'top',
      
    ]
  
  return (
    <>
         <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
    </>
  )
}

export default PopupToast