import { SimpleGrid } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Results, Summary } from './sections';

const theme = extendTheme({
	colors: {
		summary: {
			red: {
				light: 'hsla(0, 100%, 67%, 0.05)',
				main: '#FF5555'
			},
			yellow: {
				light: 'hsla(39, 100%, 56%, 0.05)',
				main: '#FFB21E'
			},
			green: {
				light: 'hsla(166, 100%, 37%, 0.05)',
				main: '#00BB8F'
			},
			blue: {
				light: 'hsla(234, 85%, 45%, 0.05)',
				main: '#1125D6'
			}
		},
	},
})

export default function ResultSummaryComponent() {
	return (
		<ChakraProvider theme={theme}>
			<SimpleGrid columns={{sm:1, md: 2}} fontFamily={'Hanken Grotesk'}>
				<Results />
				<Summary />
			</SimpleGrid>
		</ChakraProvider>
	);
}