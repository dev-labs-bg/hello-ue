import React, { useEffect, useState } from "react";
import useAuth from '../../hooks/useAuth'
import Navbar from "../Navbar";
import { Flex, Button } from '@chakra-ui/react';
import HeaderLogin from "../loginUI/HeaderLogin";
import AuthContext from '../../context/AuthContext';
import SalesAdsList from "./SalesAdsList";

const SalesMain = () => {
    const user = useAuth().auth;
    const [userId, setUserId] = useState(
        () => {
            return JSON.parse(localStorage.getItem("userId")) || []
        }
    );

    React.useEffect(() => {
        localStorage.setItem("userId", JSON.stringify(userId));
    }, [userId]);

    const storedUserId = localStorage.getItem("userId");
    useEffect(() => {
        if (storedUserId) {
            setUserId(storedUserId)
        }
    }, [storedUserId]);

    localStorage.setItem("userID", userId);

    async function userPayload() {
        try {
            const url = "https://prodavalnik-api.devlabs-projects.info/auth";
            const payload = {
                fn: 1234,
                name: "Gogo",
                email: "asd@asd.com",
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
            } else {
                throw new Error("Неуспешно свързване");
            }
        } catch (error) {
            console.error("Възникна грешка при изпращане на заявка:", error);
        }
    }

    React.useEffect(() => {
        userPayload();
    }, [])

    return (
        <Flex
            width="-moz-fit-content"
            height="container.xl"
            flexDir="column"
            backgroundColor="blue.100"
        >
            <>
                {!user ? <HeaderLogin /> : <Navbar />}
            </>
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