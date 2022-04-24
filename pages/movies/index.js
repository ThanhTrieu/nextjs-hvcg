import React, { useState } from 'react';
import { Row, Col, Input, Card, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    getLoadingStateMovie,
    getDataStateMovie,
    getTotalPageStateMovie,
    getTotalResultsStateMovie
} from '../../redux/reselects/movies';
import { searchMovieByKeyword } from '../../redux/actions/movies';
import Link from 'next/link';
import slugify from 'react-slugify';

const { Search } = Input;
const { Meta }   = Card;

const SearchMovie = () => {
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const {isLoading, dataMovies, totalPage, totalItems} = useSelector(createStructuredSelector({
        isLoading: getLoadingStateMovie,
        dataMovies: getDataStateMovie,
        totalPage: getTotalPageStateMovie,
        totalItems: getTotalResultsStateMovie
    }));
    const dispatch = useDispatch();
    const searchData = (name) => {
        if(name !== ''){
            setKeyword(name);
            // bam search luon luon tim tu trang 1
            dispatch(searchMovieByKeyword(name, 1));
            // active mac dinh trang 1 dau tien
            setPage(1);
        }
    }

    const changePage = p => {
        if( p >= 1 && p <= totalPage && keyword !== ''){
            setPage(p);
            dispatch(searchMovieByKeyword(keyword, p));
        }
    }

    return (
    <>
        <Row style={{marginTop: '20px'}}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="input search text"
                    enterButton
                    onSearch={val => searchData(val)}
                    allowClear
                    loading={isLoading}
                />
            </Col>
        </Row>
        { dataMovies !== null ? (
            <Row style={{marginTop: '20px'}}>
                <Col span={20} offset={2}>
                    <Row >
                        {dataMovies.map((item,index) => (
                            <Col key={index} span={6} style={{marginBottom: '10px'}}>
                                <Link href={`movies/detail/${slugify(item.title)}/${item.id}`}>
                                    <a>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                                        >
                                            <Meta title={item.title} />
                                        </Card>
                                    </a>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    <Row style={{magin: "10px 0px"}}>
                        <Col>
                            <Pagination
                                current={page}
                                total={totalItems}
                                pageSize={20}
                                showSizeChanger={false}
                                onChange={p=> changePage(p)}
                                defaultCurrent={1}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        ) : (
            <Row style={{marginTop: '20px'}}>
                <Col span={20} offset={2}>
                    <p style={{textAlign: 'center'}}>Ban chua tim kiem phim hoac phim ban tim khong thay</p>
                </Col>
            </Row>
        )}
    </>
    )
}
export default React.memo(SearchMovie);