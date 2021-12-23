import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroess");
};

const Rq = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  return (
    <div>
      <h2>RQ Super Heroes</h2>
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading.....</div>}
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};

export default Rq;
