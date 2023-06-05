import React, { useEffect, useState } from "react";
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { Flex, Button } from '@chakra-ui/react';
import SalesAdsList from "./SalesAdsList";

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
                console.log("Успешно свързване");
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
        if(!prodavalnikAuth && user)
            userPayload();
    }, [user])

    return (
        <Flex
            width="-moz-fit-content"
            height="container.xl"
            flexDir="column"
            backgroundColor="blue.100"
        >
            <Flex
                justifyContent="center"
                alignItems="center"
                marginBlock="2.5"
                gap="20"
            >
                {<Button width="20"> Обяви
                    <SalesAdsList />
                </Button>}
                <Button>Съобщения</Button>
                <Button>Моите обяви</Button>
            </Flex>
        </Flex >
    )
}

export default SalesMain;