import axios from 'axios';

export default function Covid(props){
    console.log(props.data);
    return (
        <h1> Covid data </h1>
    )
}

export async function getServerSideProps() {
     
    //const res = await fetch(`https://api.covid19api.com/summary`);
    //const data = await res.json()

    const res  = await axios.get('https://api.covid19api.com/summary'); 
    const data = await res.status === 200 ? await res.data : {};

    // Pass data to the page via props
    return { props: { data } }
}