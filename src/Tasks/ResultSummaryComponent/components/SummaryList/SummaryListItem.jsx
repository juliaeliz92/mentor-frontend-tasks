import { Image, Flex, Text } from "@chakra-ui/react"

export default function SummaryListItem({summary, color}) {
    console.log(process.env.PUBLIC_URL)
    return(<Flex
        backgroundColor={color[0]}
        color={color[1]}
        padding='3'
        borderRadius='12px'
        width='100%'
        justifyContent='space-between'
        marginBottom='1.5'
    >
        <Flex>
            <Image src={`${process.env.PUBLIC_URL}/images/${summary.icon}`} marginRight='3'/>
            {summary.category}
        </Flex>
        <Flex>
            <Text color='black'>{summary.score}&nbsp;&nbsp;</Text>
            <Text color='#303B59' opacity='0.5'>/&nbsp;100</Text>
        </Flex>
    </Flex>)
}