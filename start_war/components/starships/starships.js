'use client';
import { useState, useEffect } from "react";
import StarshipsGrid from "./starships-grid";
import { debounce } from 'lodash'; 
import { getStarships,getSearch, getPrevious, getNext } from "@/lib/apiCollection";
import classes from './starships.module.css';

export default function Starships() {
  const [starships, setStarships] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const data = await getStarships();
    setStarships(data);
  };

  const previousClick = async () => {
    setStarships(null);
    const data = await getPrevious({ url: starships.previous });
    setStarships(data);
  };

  const nextClick = async () => {
    setStarships(null);
    const data = await getNext({ url: starships.next });
    setStarships(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedHandleSearch = debounce(async (input) => {
    if (input) {
      const data = await getSearch({ name: 'starships', value: input });
      setStarships(data);
    } else {
      fetchData();
    }
  }, 500);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    debouncedHandleSearch(value);
  };

  return (
    <div>
      <div className={classes.searchDiv}>
        {searchClick ? (
          <div className={classes.inputWrapper}>
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Search...."
              className={classes.inputField}
              value={input}
            />
            <span
              onClick={() => {
                setSearchClick(false);
                setInput('');
                fetchData();
              }}
              role="button"
              tabIndex="0"
              className={classes.crossButton}
            >
              ❌
            </span>
          </div>
        ) : (
          <span
            onClick={() => setSearchClick(true)}
            role="button"
            tabIndex="0"
            className={classes.magnifier}
          >
            🔍
          </span>
        )}
      </div>
      <div className={classes.btnDiv}>
        <button
          onClick={previousClick}
          disabled={!starships?.previous}
          className={starships?.previous ? '' : classes.btnDisabled}
        >
          {`< Previous`}
        </button>
        <button
          onClick={nextClick}
          disabled={!starships?.next}
          className={starships?.next ? '' : classes.btnDisabled}
        >
          {` Next >`}
        </button>
      </div>
      
      {starships ? (
        <StarshipsGrid starships={starships.results} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}