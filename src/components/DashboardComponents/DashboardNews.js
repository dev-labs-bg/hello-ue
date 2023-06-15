import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import DashboardInfoNum from './DashboardInfoNum'
import DashboardInfoText from './DashboardInfoText'

const DashboardNews = () => {
	const infoArray = [
		{
			nameOfprop: 'човека на 2ри куест',
			num: 50,
			path: '',
			//Need to add path
		},
		{
			nameOfprop: 'снимките, качени от колеги са',
			num: 36,
			path: '',
			//Need to add path
		},
		{
			nameOfprop: 'нови обяви в продавалника',
			num: 3,
			path: 'sales',
		},
		{
			nameOfprop: 'новите членове са',
			num: 28,
			path: '',
			//Need to add path
		},
		{
			nameOfprop: 'събития тази седмица',
			num: 2,
			path: '',
			//Need to add path
		},
	]

	const stack = {
		alignItems: 'center',
		w: { md: '100vw', lg: '25vw' },
		justifyContent: { md: 'center', lg: 'space-between' },
	}

	const info = infoArray.map((el, index) => {
		if (index % 2 === 0) {
			return (
				<Flex key={index} sx={stack}>
					<DashboardInfoNum num={el.num} />
					<Box w="2em" />
					<Link to={el.path}>
						<DashboardInfoText text={el.nameOfprop} />
					</Link>
				</Flex>
			)
		} else {
			return (
				<Flex key={index} sx={stack}>
					<Link to={el.path}>
						<DashboardInfoText text={el.nameOfprop} />
					</Link>
					<Box w="2em" />
					<DashboardInfoNum num={el.num} />
				</Flex>
			)
		}
	})

	return (
		<Flex
			bgColor="gray.100"
			flexDir="column"
			alignItems="center"
			w={{ lg: '40vw' }}
			pt="3em"
			pb="1em"
		>
			{info}
		</Flex>
	)
}

export default DashboardNews
