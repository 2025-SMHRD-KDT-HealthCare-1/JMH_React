import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

const Ex12 = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
        const key = "2cd22c3e93f2b6fbb5c9bba421a868a6";
        const targetDt = "20251028";

        // Case 1. fetch
        // fetch(`${url}?key=${key}&targetDt=${targetDt}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setMovieList(data.boxOfficeResult.dailyBoxOfficeList);
        //     });

        // Case 2. axios
        // 2-1. npm i axios
        //      : axios는 라이브러리이기 때문에 반드시 설치를 해야만 한다!
        // 2-2. import axios from 'axios'
        //      : axios 라이브러리를 사용하기 위해서 import가 필수!
        axios.get(url, {
            params : {
                key,
                targetDt
            }
        }).then((res) => {
            console.log(res.data);
            setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
        }).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>일간 영화 순위</h1>
            <table className='my-table'>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                    </tr>
                </thead>
                <tbody>
                    {movieList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.rank}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ex12;
