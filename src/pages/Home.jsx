import React from 'react'
import { Row } from '../component/Row'
import requests from '../Request'
import { Maain } from '../component/Maain'


 const Home = () => {
  return (
    <>
        <Maain />
        <Row Rowid="1" title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row Rowid="2" title='Horror' fetchURL={requests.requestHorror} />
        <Row Rowid="3" title='Trending' fetchURL={requests.requestTrending} />
        <Row Rowid="4" title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row Rowid="5" title='Popular' fetchURL={requests.requestPopular} />
    </>
  )
}

export default Home;