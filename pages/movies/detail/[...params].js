import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Skeleton } from 'antd';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDetail, getImagesMovie, getLoadingDetail } from '../../../redux/reselects/detail';
import { findDataMovieById } from '../../../redux/actions/movies';

const DetailMovie = () => {
    const router = useRouter();
    const query  = router.query || null;
    const params = query.params || [];
    const id = params[1] || null;
    
    const { detailData, startLoading, imagesMovie } = useSelector(createStructuredSelector({
        detailData: getDetail,
        startLoading: getLoadingDetail,
        imagesMovie: getImagesMovie
    }));
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(findDataMovieById(id));
    }, [id, dispatch]);

    if(startLoading){
        return (
            <Skeleton active />
        )
    }

    if(!detailData.hasOwnProperty('id')){
        return (
            <Row>
                <Col span={20} offset={2}>
                    <h4>Not found data</h4>
                </Col>
            </Row>
        )
    }

    return (
        <>
            <Row>
                <Col span={4}>
                    <Image
                        src={`/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg`}
                        width="100%"
                        height="100%"
                    />
                    <p> batman </p>
                </Col>
                <Col span={20}>
                    <h1>Batman</h1>
                    <p>Status: </p>
                    <p>The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it</p>
                    <p>popularity: </p>
                    <p>vote count: </p>
                    <p>vote average: </p>

                    <h4>Images</h4>
                    <Row>
                        <Col span={2}>
                            <Image
                                src={`/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg`}
                                width="100%"
                                height="100%"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(DetailMovie);

