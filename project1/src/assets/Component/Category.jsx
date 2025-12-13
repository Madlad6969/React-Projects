import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Card from "./Card";

function Category() {
  const [datas, setDatas] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function load() {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();

      if (name === "all") {
        setDatas(data);
      } else {
        setDatas(data.filter(e => e.category === name));
      }
    }

    load();
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        {datas.map(e => (
          <Card key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
}

export default Category;
