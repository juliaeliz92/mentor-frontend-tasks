import { Box, Text } from '@chakra-ui/react';
import { SummaryList, SubmitButton } from '../components';

export default function Summary() {
    return(<Box
        height={[null, '100vh']}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        padding={['25px 35px 35px', '25px 35px 50px', '40px 70px 45px']}
    >
         <Text 
            fontSize={['18px', '24px']}
            fontFamily='Hanken Grotesk'
            marginBottom={['5', '8']}
            fontWeight='700'
        >
            Summary
        </Text>
        <SummaryList />
        <SubmitButton label='Continue' marginTop={['15px', null]}/>
    </Box>)
}