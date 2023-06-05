import React, { useState, useEffect } from 'react';
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth';
import { Flex } from '@chakra-ui/react';

export default function SalesAdsList() {
    const { prodavalnikAuth } = useProdavalnikAuth();
    const [ads, setAds] = useState([]);

    const fetchAds = async () => {
        try {
            const response = await fetch('https://prodavalnik-api.devlabs-projects.info/ads', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "user": prodavalnikAuth,
                }
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            const filteredAds = data.ads.filter((ad) => !ad.bought);
            setAds(filteredAds);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if(prodavalnikAuth)
            fetchAds();
    }, [prodavalnikAuth]);

    const calExpirationDay = (createdAt, expiration) => {
        const today = new Date();
        const createdDate = new Date(createdAt);
        const expiredDate = new Date(createdDate.getTime() + expiration * 24 * 60 * 60 * 1000);
        const timeDifference = expiredDate - today;

        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDifference / (60 * 60 * 1000)) % 24);
        const minutes = Math.floor((timeDifference / (60 * 1000)) % 60);

        if (days > 0) {
            return `Изтича след ${days} дни`;
        } else if (hours > 0) {
            return `Изтича след ${hours} часа`;
        } else {
            return `Изтича след ${minutes} минути`;
        }
    };

    const container = {
        w: { md: '100vw', lg: '50vw' },
        flexDir: "column",
        alignItems: "center",
        marginInline: "auto",
        justifyContent: "center",
    }

    return (
            <Flex flexDir="column" justifyContent="center" alignItems="center">
                {ads.length === 0 ? (
                    <h2>Няма активни обяви</h2>
                ) : (
                    ads.map((ad) => (
                        <div key={ad._id}>
                            <h3>{ad.title}</h3>
                            <p>{ad.description}</p>
                            <p>Цена: {ad.price}</p>
                            <p>{calExpirationDay(ad.createdAt, ad.expiration)}</p>
                        </div>
                    ))
                )}
            </Flex>
    );
}
