import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react"
import { HeroImage } from "./components"
import { SignUpForm } from "./sections/SignUpForm"

export const NewLetterSignUp = () => {

    const theme = extendTheme({
        fontFamily: "Roboto"
    })

    return <ChakraProvider theme={theme}>
        <Flex 
            flexDirection={{base: 'column', lg: 'row-reverse'}} 
            justifyContent='center' 
            alignItems='center' 
            gap='20px'
            h={{lg: '100vh'}}
        >
            <HeroImage />
            <SignUpForm />
        </Flex>
    </ChakraProvider>
}