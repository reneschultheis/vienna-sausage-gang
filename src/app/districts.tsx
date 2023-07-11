import { District, HotdogStand } from "./page";
import PocketBase from 'pocketbase';

export default async function District() {
    const pb = new PocketBase('https://vienna-sausage-gang.pockethost.io');

    const districts = await pb.collection('districts').getFullList() as District[];

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