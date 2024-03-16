import { Button } from "@chakra-ui/react";

export default function SubmitButton(props) {
    return(<Button 
        colorScheme='#303B59'
        _hover={{
            background: 'linear-gradient(#7755FF, #6943FF, #2F2CE9)'
        }}
        borderRadius='128px'
        background='#303B59'
        w='100%'
        {...props}
    >
        {props.label}
    </Button>)
}