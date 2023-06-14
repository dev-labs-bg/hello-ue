import useAuth from '../../hooks/useAuth';
import { Link, Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Tab, Tabs, TabList, ControlBox } from '@chakra-ui/react'


const LocationDash = () => {
    const { auth } = useAuth();


    const body = {
        width: 'full',
        minHeight: '100vh',
        display: 'flex',
        flexDir: 'column',
        bgGradient: [
            'linear(to-b,cyan.200, cyan.100)',
            'linear(to-t,blue.200,teal.500)',
            'linear(to-tr,cyan.300,green.100)',
        ],
    }

    const tabsContainer = {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginBlock: '14px',
    }

    const buttons = {
        shadow: 'xl',
        border: 'none',
        textAlign: 'center',
        paddingInline: '2rem',
        fontSize: { sm: '14px', md: '16px', lg: '18px' },
    }

    return (
        <Box>
            <Flex sx={body}>
                <Tabs>
                    <Tabs>
                        <TabList sx={tabsContainer}>
                            <Link to={'/location/corps'}>
                                <Tab sx={buttons}>Корпуси</Tab>
                            </Link>

                            <Link to={'/location/floors'}>
                                <Tab sx={buttons}>Първи корпус-етажи</Tab>
                            </Link>

                            <Link to={'/location/library'}>
                                <Tab sx={buttons}>Библиотека</Tab>
                            </Link>
                        </TabList>
                    </Tabs>

                    <Flex flexDir="column">
                        <Tab>
                            <Link target='_blank' to="https://www.google.com/maps/place/University+of+Economics+%E2%80%93+Varna/@43.2102523,27.9199391,15z/data=!4m6!3m5!1s0x40a4540939dfa6d5:0x3d401ef3c09a59bf!8m2!3d43.209057!4d27.923601!16s%2Fm%2F02qt27y?entry=ttu">
                                <Heading as="h3" size="md">Първи корпус</Heading>
                                <Heading as="h4" size="sm"></Heading>
                                <Text></Text>
                            </Link>
                        </Tab>
                        <Tab>
                            <Link target="_blank" to="https://www.google.com/maps/place/University+of+Economics,+Varna+-+Second+Corps/@43.2245167,27.9183736,17z/data=!4m6!3m5!1s0x40a45442727d276d:0xe726627002b45875!8m2!3d43.2245226!4d27.9209485!16s%2Fg%2F11b7g3mtdt?entry=ttu">
                                <Heading as="h3" size="md">Втори корпус</Heading>
                                <Heading as="h4" size="sm"></Heading>
                                <Text></Text>
                            </Link>
                        </Tab>
                        <Tab>
                            <Link target="_blank" to="https://www.google.com/maps/place/College+of+Tourism%E2%80%93+Varna/@43.2201377,27.8956212,17z/data=!4m9!1m2!2m1!1z0LjQutC-0L3QvtC80LjRh9C10YHQutC4INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JLQsNGA0L3QsA!3m5!1s0x40a45409acb2c291:0x4569fa8c265fc71c!8m2!3d43.2201379!4d27.8994021!16s%2Fg%2F121crr67?entry=ttu">
                                <Heading as="h3" size="md">Трети корпус</Heading>
                                <Heading as="h4" size="sm">бул ,,Сливница" 158</Heading>
                                <Text></Text>
                            </Link>
                        </Tab>
                        <Tab>
                            <Link target="_blank" to="https://www.google.com/maps/place/Dormitories+of+the+University+of+Economics,+Varna/@43.2183271,27.9102973,17z/data=!4m10!1m2!2m1!1z0LjQutC-0L3QvtC80LjRh9C10YHQutC4INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0JLQsNGA0L3QsA!3m6!1s0x40a4546e62ba7d83:0x6d54161611be624c!8m2!3d43.2183271!4d27.9150609!15sCjrQuNC60L7QvdC-0LzQuNGH0LXRgdC60Lgg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQktCw0YDQvdCwkgERc3R1ZGVudF9kb3JtaXRvcnngAQA!16s%2Fg%2F11g731149b?entry=ttu">
                                <Heading as="h3" size="md">Общежития</Heading>
                                <Heading as="h4" size="sm">бул ,,Сливница" 158</Heading>
                                <Text></Text>
                            </Link>
                        </Tab>
                    </Flex>
                </Tabs>
            </Flex>
            <Outlet />
        </Box>
    )
}

export default LocationDash;

/*<Box>
                <TabList>
                    <Link>
                        <Tab>
                            <Heading>Първи корпус</Heading>
                            <Text></Text>
                            <Text></Text>
                        </Tab>
                    </Link>
                    <Link>
                        <Tab>
                            <Heading>Втори корпус</Heading>
                            <Text></Text>
                            <Text></Text>
                        </Tab>
                    </Link>
                    <Link>
                        <Tab>
                            <Heading as="h2">Трети корпус</Heading>
                            <Heading as="h4">бул ,,Сливница" 158</Heading>
                            <Text></Text>
                        </Tab>
                    </Link>
                </TabList>
            </Box> */