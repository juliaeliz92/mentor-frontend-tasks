import { Box } from "@chakra-ui/react";

export const Button = ({label, onClick}) => {
    return <Box
            as='button'
            height='56px'
            lineHeight='24px'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            mt='20px'
            borderRadius='8px'
            fontSize='16px'
            fontWeight='700'
            bg='#000'
            color='#fff'
            _hover={{
                bg: 'linear-gradient(#FF6A3A, #FF527B)',
                transform: 'scale(0.98)',
                boxShadow: '0px 16px 32px 0px #FF615580'
            }}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            alignContent='center'
            w='100%'
            onClick={onClick}
        >
            {label}
        </Box>
}
