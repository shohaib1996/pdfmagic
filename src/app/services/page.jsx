"use client"

import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard/ServicesCard";
import Container from "../utils/Container";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json") // Fetch from the public directory directly
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    console.log(services)

    return (
        <div >
            <Container>
                <h1 className="text-center my-16 font-bold text-2xl">
                    Every tool you need to work with PDFs in one place
                    Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
                </h1>

                <div className="grid grid-cols-4 gap-2">
                    {
                        services.map(service => (
                            <ServicesCard
                                key={service.id}
                                image={service.image}
                                name={service.name}
                                feature={service.feature}
                                benefit={service.benefit}>
                            </ServicesCard>)
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;