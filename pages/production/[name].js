import { useRouter } from 'next/router';

export default function DetailByName(){

    const router = useRouter();
    const {name} = router.query;
    console.log(name);
    return (
        <h1> Detail page</h1>
    )
}