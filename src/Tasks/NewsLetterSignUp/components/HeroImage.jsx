import { Flex } from "@chakra-ui/react";

export const HeroImage = () => {
    return <Flex justifyContent={'center'}>
        <picture>
            <source media="(max-width: 1023px)" srcSet={`${process.env.PUBLIC_URL}/images/illustration-sign-up-mobile.png`} />
            <source media="(min-width: 1024px)" srcSet={`${process.env.PUBLIC_URL}/images/illustration-sign-up-desktop.png 1.25x`} />
            <img src={`${process.env.PUBLIC_URL}/images/illustration-sign-up-mobile.png`} alt="computer in an orange background" />
        </picture>
    </Flex>
}