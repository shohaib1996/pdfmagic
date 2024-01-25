"use client"

import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard/ServicesCard";
import Container from "../utils/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json") // Fetch from the public directory directly
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    // console.log(services)
    const location = usePathname()
    // console.log(location)
    return (
        <div >
            <Container>
                <h1 className={`text-center my-16 font-bold text-2xl ${location == "/" ? "hidden" : ""}`}>
                    Every tool you need to work with PDFs in one place
                    Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
                </h1>

                <div >
                    {
                        location === "/"
                            ? <div >
                                <h1 className="text-center font-bold text-3xl my-6">Our Services</h1>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-4">
                                    {
                                        services.slice(0, 6).map(service => (
                                            <Link
                                                key={service.id}
                                                href={`services/${service.id}`}
                                            >
                                                <ServicesCard
                                                    image={service.image}
                                                    name={service.name}
                                                    feature={service.feature}
                                                    benefit={service.benefit}
                                                    location={location}
                                                >
                                                </ServicesCard>
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div className="flex justify-center items-center w-full mb-4">
                                    <Link href={'/services'} >
                                        <button className="btn  text-white  bg-slate-800 dark:text-white border-none rounded-none">See All</button>
                                    </Link>
                                </div>

                            </div>
                            :
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
                                {
                                    services.map(service => (
                                        <Link
                                            key={service.id}
                                            href={`services/${service.id}`}
                                        >
                                            <ServicesCard
                                                image={service.image}
                                                name={service.name}
                                                feature={service.feature}
                                                benefit={service.benefit}>
                                            </ServicesCard>
                                        </Link>
                                    )
                                    )
                                }
                            </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;