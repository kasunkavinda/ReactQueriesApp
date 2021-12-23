import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const Rq = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  return (
    <div>
      <h2>RQ Super Heroes</h2>
      {isLoading && <div>Loading.....</div>}
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};

export default Rq;
