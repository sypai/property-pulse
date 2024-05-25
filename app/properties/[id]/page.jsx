'use client'

import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

const PropertyPage = () => {

    const router = useRouter();
    const { id } = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const pathname = usePathname();

    return (
        <div className="">
            Hello, {name}
            <br />
            <button onClick={ () => router.push('/') } className="bg-blue-500 p-2"> 
                Go Home {id}
            </button>
            <br />
            Path : {pathname}
        </div>
    )
}

export default PropertyPage