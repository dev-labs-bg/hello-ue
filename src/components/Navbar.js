import {
	BellIcon,
	SettingsIcon,
	HamburgerIcon,
	ChevronDownIcon,
} from '@chakra-ui/icons'
import {
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Box,
	Button,
	Flex,
	HStack,
	Text,
	IconButton,
	useDisclosure,
	Slide,
	Heading,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import logo from '../logo.png'
import Logout from './Logout'

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure()
	const { auth } = useAuth()

	const flex = {
		bg: '#96BFC6',
		justifyContent: 'space-between',
		p: '10px',
		alignItems: 'center',
		h: '10vh',
	}

	const vr = {
		height: '40px',
		borderColor: '#44818B',
		borderWidth: '2px',
		p: '0px',
		borderRadius: '4px',
	}

	const burger = {
		w: { sm: '40vw', md: '25vw', lg: '25vw' },
		bg: '#96BFC6',
		h: '100vh',
		flexDir: 'row',
		justifyContent: 'space-between',
	}

	return (
		<Flex sx={flex}>
			<HStack
				display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
			>
				<Image src={logo} style={{ width: '40px' }} />
				<Box sx={vr}></Box>
				<Link to="dashboard">
					<Button variant="ghost">Начало</Button>
				</Link>
				<Button variant="ghost">Куестове</Button>
				<Link to="events">
					<Button variant="ghost">Събития</Button>
				</Link>
				<Link to="location">
					<Button variant="ghost">Как да стигна?</Button>
				</Link>
				<Button variant="ghost">Забавни спомени</Button>
				<Button variant="ghost">
					<Link to="schedule">Програма</Link>
				</Button>
				<Link to="sales/list">
					<Button variant="ghost">Продавалник</Button>
				</Link>
			</HStack>

			<IconButton
				display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none' }}
				color="blue.400"
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="ghost"
				onClick={onToggle}
			/>

			<Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
				<Flex
					sx={burger}
					display={{ sm: 'flex', md: 'flex', lg: 'none' }}
				>
					<Flex flexDir="column">
						<Link to="dashboard">
							<Button variant="ghost" mb="5px">
								Начало
							</Button>
						</Link>
						<Button variant="ghost" mb="5px">
							Куестове
						</Button>
						<Link to="events">
							<Button variant="ghost">Събития</Button>
						</Link>
						<Link to="location">
							<Button variant="ghost" mb="5px">
								Как да стигна?
							</Button>
						</Link>
						<Button variant="ghost" mb="5px">
							Забавни спомени
						</Button>
						<Link to="schedule">
							<Button variant="ghost" mb="5px">
								Програма
							</Button>
						</Link>
						<Link to="sales/list">
							<Button variant="ghost" mb="5px">
								Продавалник
							</Button>
						</Link>
						<Button variant="ghost" mb="5px">
							Настройки
						</Button>
					</Flex>
					<Flex justify="flex-end">
						<IconButton
							color="blue.400"
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="ghost"
							onClick={onToggle}
						/>
					</Flex>
				</Flex>
			</Slide>

			<Heading
				fontSize="18px"
				display={{ sm: 'flex', md: 'flex', lg: 'none' }}
			>
				Начало
			</Heading>

			<HStack>
				<AvatarGroup spacing="1em">
					<Avatar
						bg="none"
						border="none"
						icon={<BellIcon boxSize="6" />}
					>
						<AvatarBadge
							boxSize="1em"
							bg="#44818B"
							borderColor="#44818B"
						>
							<Text fontSize="xs" color="white">
								3
							</Text>
						</AvatarBadge>
					</Avatar>
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon />}
							bg="#96BFC6"
						>
							<HStack>
								<Avatar
									size="sm"
									border="none"
									name={auth.data.firstName}
									bg="#44818B"
								/>
								<Text
									display={{
										base: 'none',
										sm: 'none',
										md: 'none',
										lg: 'flex',
									}}
								>
									{auth.data.firstName}{' '}
									{auth.data.lastName[0]}
								</Text>
							</HStack>
						</MenuButton>
						<MenuList>
							<MenuItem>
								<Link to="../profile">Profile</Link>
							</MenuItem>
							<MenuItem>
								<Logout />
							</MenuItem>
						</MenuList>
					</Menu>

					<Avatar
						bg="none"
						border="none"
						icon={<SettingsIcon />}
						display={{
							base: 'none',
							sm: 'none',
							md: 'none',
							lg: 'flex',
						}}
					/>
				</AvatarGroup>
			</HStack>
		</Flex>
	)
}

export default Navbar
