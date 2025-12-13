import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';
import Card from './component/Card';

function App() {
  const [data, setData] = useState([
    
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/5000/3333"
  },
  {
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "download_url": "https://picsum.photos/id/1/5000/3333"
  },
  {
    "id": "2",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/N7XodRrbzS0",
    "download_url": "https://picsum.photos/id/2/5000/3333"
  },
  {
    "id": "3",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/Dl6jeyfihLk",
    "download_url": "https://picsum.photos/id/3/5000/3333"
  },
  {
    "id": "4",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/y83Je1OC6Wc",
    "download_url": "https://picsum.photos/id/4/5000/3333"
  },
  {
    "id": "5",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3334,
    "url": "https://unsplash.com/photos/LF8gK8-HGSg",
    "download_url": "https://picsum.photos/id/5/5000/3334"
  },
  {
    "id": "6",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/tAKXap853rY",
    "download_url": "https://picsum.photos/id/6/5000/3333"
  },
  {
    "id": "7",
    "author": "Alejandro Escamilla",
    "width": 4728,
    "height": 3168,
    "url": "https://unsplash.com/photos/BbQLHCpVUqA",
    "download_url": "https://picsum.photos/id/7/4728/3168"
  },
  {
    "id": "8",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/xII7efH1G6o",
    "download_url": "https://picsum.photos/id/8/5000/3333"
  },
  {
    "id": "9",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3269,
    "url": "https://unsplash.com/photos/ABDTiLqDhJA",
    "download_url": "https://picsum.photos/id/9/5000/3269"
  },
  {
    "id": "10",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/6J--NXulQCs",
    "download_url": "https://picsum.photos/id/10/2500/1667"
  },
  {
    "id": "11",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/Cm7oKel-X2Q",
    "download_url": "https://picsum.photos/id/11/2500/1667"
  }

  ]);

  const [page, setPage] = useState(2);

  async function fetchData() {
    let res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    let d = await res.json();

    setData(prev => [...prev, ...d]);
    setPage(prev => prev + 1);
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        if hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Layout>
          {data.map(e =><Card data={e}></Card>)}
        </Layout>
      </InfiniteScroll>
    </>
  );
}

export default App;
