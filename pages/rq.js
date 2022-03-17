import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const Rq = () => {
  const onSuccess = (data) => {
    console.log("data fetching successed", data);
  };
  const onError = (error) => {
    console.log("data fetching not successed", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 300000, //default cacheTime is 5 min
      // staleTime: 30000,  //default staleTime is 0 seconds
      // refetchOnMount: true,
      // refetchOnWindowFocus: true, //A  - diff between A, B and C is, A, B need user interation. C don't
      // refetchInterval: 2000, //B // refetching data every 2 seconds //wont work when loose the window focus
      // refetchIntervalInBackground: true, //C refetching data and will work wehn loose the window focus
      // enabled: false, // dont fetch super hearoes when page load
      onSuccess: onSuccess,
      onError: onError,
    }
  );

  console.log(isLoading, isFetching);

  return (
    <div>
      <h2>RQ Super Heroes</h2>
      <button onClick={refetch}>Refetch Super Heroes</button>
      {isError && <div>{error.message}</div>}
      {isLoading || (isFetching && <div>Loading.....</div>)}
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};

export default Rq;
