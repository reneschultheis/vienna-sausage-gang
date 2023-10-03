import PocketBase from 'pocketbase';
import { HotdogStand } from '../page';

export default async function Page({ params }: { params: { hotdogstand: string } }) {

    const pb = new PocketBase('https://vienna-sausage-gang.pockethost.io');

    const stand = await pb.collection('hotdog_stands').getOne(params.hotdogstand) as HotdogStand;

    // return a card with the hotdog stand details
    return (
        <div className="block p-4 w-full bg-vermilion-100 shadow-lg rounded-lg">
            <div className='flex flex-1 justify-center w-full h-auto relative rounded-md'>
                <img
                    alt=''
                    src="/wienerwurstelstand.jpg"
                    className='w-full max-h-44 rounded-md object-cover'
                />
            </div>
            <div className='my-4'>
                <div className="flex flex-row space-x-2 mt-4">
                    <div className='flex flex-1 flex-row mb-2 justify-between'>
                        <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{stand.name}</h5>
                        <div className='flex flex-row space-x-2'>
                            {stand.gluten_free_options && <div className="rounded-full bg-lime-600 p-2"><img

                                src="/icons/wheat.svg"
                                height={18}
                                width={18}
                                alt="Glutenfree options available"
                            /></div>}
                            {stand.vegan_options && <div className="rounded-full bg-lime-600 p-2"><img
                                src="/icons/vegan.svg"
                                height={18}
                                width={18}
                                alt="Vegan options available"
                            /></div>}
                        </div>
                    </div>
                </div>

                <p className="font-normal">Location: {stand.location}</p>
                <p className="font-normal">Review: {stand.review}</p>
            </div>
        </div>
    )
}