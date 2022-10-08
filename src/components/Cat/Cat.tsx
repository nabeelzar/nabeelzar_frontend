import React, { useState, useEffect } from "react";
// import { getCat } from "../../api/catAPI";

import axios from "axios";

import "./cat.scss";

interface CatProps {
  id: string;
  created_at: string;
  tags: [];
  url: string;
}

const Cat = () => {
  const defaultCat: CatProps = {
    id: "-1",
    created_at: "-1",
    tags: [],
    url: "/",
  };

  const [cat, setCat] = useState<CatProps>(defaultCat);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getNewCat = async () => {
    setCat(defaultCat);

    setLoading(true);

    await axios
      .get(`https://cataas.com/cat?json=true`)
      .then((res) => {
        setCat(res.data);
      })
      .catch((err) => {
        console.log("we hit an error");
        setError(err);
      });

    setLoading(false);
  };

  const callGetNewCat = () => {
    getNewCat();
  };

  useEffect(() => {
    getNewCat();
    console.log(`get cat completed ${cat.id}`);
  }, []);

  return (
    <>
      {loading || cat.id === "-1" ? (
        <Loading />
      ) : (
        <div className="catContainer">
          <div className="catCardHolder">
            <div className="catCard">
              <img src={`https://cataas.com/${cat.url}`} alt="cat image" />
            </div>

            <button onClick={callGetNewCat}>New Cat</button>
          </div>
        </div>
      )}
    </>
  );
};

export const Loading: React.FC = () => {
  console.log("loading..");
  return (
    <div className="catContainer">
      <div className="loading">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
