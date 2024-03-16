import * as React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";
import data from './../data.json';

export default function ResultBadge() {
    const [resultPercent, setResultPercent] = React.useState(0)
    React.useEffect(() => {
        let initialScore = 0;
        setResultPercent((data.reduce((dt, currentScore) => dt + currentScore.score, initialScore)/data.length).toFixed(0));
    }, [setResultPercent])
    return(<Box 
        w={[140, 200]}
        h={[140, 200]}
        borderRadius='50%'
        bgImage='linear-gradient(#4D21C9, #2521C900, #2521C900)'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
    >
        <Heading 
            size='4xl' 
            fontSize={['36px','72px']} 
            fontWeight='800' 
            fontFamily={'Hanken Grotesk'}
            color='white'
            marginBottom='1'
        >
            {resultPercent}
        </Heading>
        <Text 
            color='#CAC9FF'
            fontFamily='Hanken Grotesk'
            fontSize={[null, '18']}
        >
            of 100
        </Text>
    </Box>)
}