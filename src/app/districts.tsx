'use client'

import { useState, useEffect } from "react";
import { District, HotdogStand } from "./page";
import PocketBase from 'pocketbase';

export default function District() {
    const pb = new PocketBase('https://vienna-sausage-gang.pockethost.io');

    const [districts, setDistricts] = useState([] as District[])
    const fetchData = async () => {
        const response = await pb.collection('districts').getFullList({
            expand: 'hotdog_stands'
        }) as District[];
        return response;
    }

    useEffect(() => {
        fetchData()
            .then((res) => {
                setDistricts(res);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    return (
        <ul className='flex flex-row space-x-2 py-4'>
            {districts.filter(function (district) {
                return district.hotdog_stands.length > 0;
            }).map((district: District) => (
                <li key={district.id}>
                    <button className="button" key={district.id}>
                        {district.district}_{district.district_name}
                    </button>
                </li>
            ))}
        </ul>
    )
}