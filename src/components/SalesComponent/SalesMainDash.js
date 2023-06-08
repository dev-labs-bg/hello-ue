import React from "react";
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { Flex, Tab, Tabs, TabList } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const SalesMain = () => {
    //we need to pull fn, name and email
    const user = useAuth().auth;

    const setProdavalnikAuth = useProdavalnikAuth().setProdavalnikAuth;
    const prodavalnikAuth = useProdavalnikAuth().prodavalnikAuth;

    async function userPayload() {
        try {
            const url = "https://prodavalnik-api.devlabs-projects.info/auth";
            const payload = {
                //due to BE constraints FN should be a number but some FNs have leading zeros so we parse the FN to int
                fn: parseInt(user.data.faculty_number),
                name: user.data.firstName + user.data.lastName,
                email: user.data.email,
            };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                setProdavalnikAuth(result.user);
            } else {
                throw new Error("Неуспешно свързване");
            }
        } catch (error) {
            console.error("Възникна грешка при изпращане на заявка:", error);
        }
    }

    React.useEffect(() => {
        if (!prodavalnikAuth && user)
            userPayload();
    }, [user])

    const body = {
        width: "full",
        minHeight: "100vh",
        display: "flex",
        flexDir: "column",
        bgGradient: [
            'linear(to-b,cyan.200, cyan.100)',
            'linear(to-t,blue.200,teal.500)',
            'linear(to-tr,cyan.300,green.100)',
        ]
    }

    const tabsContainer = {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: "14px",
    }

    const buttons = {
        shadow: "xl",
        border: "none",
        textAlign: "center",
        paddingInline: "2rem",
        fontSize: { sm: '14px', md: '16px', lg: '18px' },
    }

    return (
        <Flex sx={body}>
            <Tabs>
                <TabList sx={tabsContainer}>
                    <Tab sx={buttons}><Link to="/sales/list">Обяви</Link></Tab>
                    <Tab sx={buttons}><Link to="/sales/">Съобщения</Link></Tab>
                    <Tab sx={buttons}><Link to="/sales/my">Моите обяви</Link></Tab>
                </TabList>
            </Tabs>
            <Outlet />
        </Flex >
    )
}

export default SalesMain;