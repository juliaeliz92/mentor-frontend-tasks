import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React from 'react'

import { Button, ConfirmationModal } from '.'

export const Form = () => {
    const [email, setEmail] = React.useState('')
    const [isOpen, setOpen] = React.useState(false)
    return <FormControl my='20px'>
        <FormLabel fontSize='12px'>Email address</FormLabel>
        <Input 
            type='email'
            placeholder='email@company.com' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
            label='Subscribe to monthly newsletter'  
            onClick={() => email.length && setOpen(true)}
        />
        <ConfirmationModal 
            isOpen={isOpen} 
            closeModal={() => setOpen(false)}
            email={email}
        />
    </FormControl>
}