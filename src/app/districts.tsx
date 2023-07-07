'use client'

import { useState, useEffect } from "react";
import { District } from "./page";
import PocketBase from 'pocketbase';

export default function District() {
    const pb = new PocketBase('https://vienna-sausage-gang.pockethost.io');

    const [districts, setDistricts] = useState([] as District[])
    const fetchData = async () => {
        const response = await pb.collection('districts').getFullList() as District[];
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
        <div className="flex flex-column justify-between">
            {districts.map((item: District) => (
                <div key={item.id} className="flex flex-column">
                    <a href="#" className="hover:underline">{item.district}_{item.district_name}</a>
                </div>
            ))}
        </div>
    )
}