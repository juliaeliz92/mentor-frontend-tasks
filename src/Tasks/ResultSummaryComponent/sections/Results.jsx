import { Box, Text, Heading } from '@chakra-ui/react';
import { ResultBadge } from '../components';

export default function Results() {
    return(<Box 
        bgImage='linear-gradient(#7755FF, #6943FF, #2F2CE9)'
        borderBottomRightRadius={32}
        borderTopRightRadius={[0, 32]}
        borderBottomLeftRadius={[32, 0]}
        height={[null, '100vh']}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        padding={['25px 35px 35px', '25px 35px 50px', '40px 35px 45px']}
    >
        <Text 
            fontSize={['18px', '24px']}
            color='#CAC9FF'
            fontFamily='Hanken Grotesk'
            marginBottom={['5', '8']}
            fontWeight='700'
        >
            Your Result
        </Text>
        <ResultBadge />
        <Heading
            size={['lg', 'xl']}
            color='white'
            fontFamily='Hanken Grotesk'
            margin='5'
        >
            Great
        </Heading>
        <Text
            color='#CAC9FF'
            fontFamily='Hanken Grotesk'
            fontWeight='500'
            fontSize={['16px', '18px']}
            textAlign='center'
        >
            Your performance exceed 65% of the people conducting the test here!
        </Text>
    </Box>)
}