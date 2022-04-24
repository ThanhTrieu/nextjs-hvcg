import React from 'react';
import ButtonAntd from '../../components/Button';

export default function CovidCorona(props) {
    console.log(props.posts);
    return (
        <>
            <h1> Corona virus</h1>
            <ButtonAntd type="primary" name="primary"> Primary </ButtonAntd>
        </>
    )
}

export async function getStaticProps() {
    const res   = await fetch('https://api.covid19api.com/summary');
    const posts = await res.json();
    return {
        props: {
          posts,
        },
    }
}