import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading
} from '@chakra-ui/react'
import { MainText, Button } from '.'

export const ConfirmationModal = ({isOpen, closeModal, email}) => {
    return <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent 
            h={{base: '100vh', md: 'auto'}}
            my={{base: 0, md: 'auto'}}
            borderRadius={{base: 0, md: '10px'}}
            padding='40px'
        >
            <img 
                src={`${process.env.PUBLIC_URL}/images/icon-success.svg`} 
                alt='subscribed success'
                width='64'
                height='64'
            />
            <Heading 
                fontSize='40px'
                my='20px'
            >
                Thanks for subscribing!
            </Heading>
            <MainText>
                A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.
            </MainText>

            <Button onClick={closeModal} label='Dismiss message'/>
        </ModalContent>
      </Modal>
}