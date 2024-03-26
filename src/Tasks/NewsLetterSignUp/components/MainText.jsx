import { Text } from "@chakra-ui/react";

export const MainText = (props) => {
    return <Text fontSize='16px' lineHeight='24px' {...props}>{props.children}</Text>
}