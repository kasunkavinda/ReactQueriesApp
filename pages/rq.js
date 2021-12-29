import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const Rq = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 300000, //default cacheTime is 5 min
      // staleTime: 30000,  //default staleTime is 0 seconds
      refetchOnMount: true,
      refetchOnWindowFocus: true, //A  - diff between A, B and C is, A, B need user interation. C don't
      // refetchInterval: 2000, //B
      refetchIntervalInBackground: true, //C
    }
  );

  console.log(isLoading, isFetching);

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
