import {List, ListItem, ListIcon} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export const SignUpList = ({items}) => {
    return <List>
        {items.map((item, ind) => <ListItem key={ind}>
            <ListIcon as={CheckCircleIcon} color='orange.400'/>
            {item}
        </ListItem>)}
    </List>
}