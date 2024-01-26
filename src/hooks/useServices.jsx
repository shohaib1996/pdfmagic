import React from 'react';
import useAxiosPubic from './useAxiosPubic';
import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const axiosPublic = useAxiosPubic();
    const { data: services = []} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get("/services")
            const data = await res.data;
            return data;
        }
    })
    return [services]
};

export default useServices;