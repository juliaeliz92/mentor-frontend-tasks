import { Flex, Heading } from "@chakra-ui/react";
import { MainText, SignUpList , Form} from "../components";

export const SignUpForm = () => {
    return <Flex flexDirection='column' alignContent='center' padding='0 24px'>
        <Heading size='lg' fontSize={{base: '40px', lg: '56px'}} marginBottom='15px'>Stay updated!</Heading>
        <MainText marginBottom='20px'>Join 60,000+ product managers receiving monthly updates on:</MainText>
        <SignUpList items={[
            'Product discovery and building what matters',
            'Measuring to ensure updates are a success',
            'And much more!'
        ]} />
        <Form/>
    </Flex>
}