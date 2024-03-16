import { VStack } from '@chakra-ui/react'
import SummaryListItem from './SummaryListItem';
import data from './../../data.json';

export default function SummaryList() {
    const colorCodes = [
        ['summary.red.light', 'summary.red.main'],
        ['summary.yellow.light', 'summary.yellow.main'],
        ['summary.green.light', 'summary.green.main'],
        ['summary.blue.light', 'summary.blue.main']
    ]
    return(<VStack
            w='100%'
        >
        {data.map((dt, ind) => 
            <SummaryListItem 
                summary={dt}
                color={colorCodes[ind]}
            />
        )}
    </VStack>)
}