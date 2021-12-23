import React, { useState, useEffect } from "react";
import axios from "axios";

const Traditional = () => {
  const [currentValue, setCurrentValue] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then(function (response) {
        // handle success
        // const names = response.data.name;
        setCurrentValue(response.data); // setCurrentState(response.data[0].name);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading....</div>}
      {currentValue.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default Traditional;
