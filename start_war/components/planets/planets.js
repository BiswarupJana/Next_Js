"use client";

import PlanetsGrid from "./planets-grid";
import classes from "./planets.module.css";
import {
  getPlanets,
  getSearch,
  getPrevious,
  getNext,
} from "@/lib/apiCollection";
import { debounce } from "lodash";
import { useState, useEffect } from "react";

export default function Planets() {
  const [planets, setPlanets] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const data = await getPlanets();
    setPlanets(data);
  };

  const previousClick = async () => {
    setPlanets(null);
    const data = await getPrevious({ url: planets.previous });
    setPlanets(data);
  };

  const nextClick = async () => {
    setPlanets(null);
    const data = await getNext({ url: planets.next });
    setPlanets(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debouncedHandleSearch = debounce(async (input) => {
    if (input) {
      const data = await getSearch({ name: 'planets', value: input });
      setPlanets(data);
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
          disabled={!planets?.previous}
          className={planets?.previous ? "" : classes.btnDisabled}
        >
          {`< Previous`}
        </button>
        <button
          onClick={nextClick}
          disabled={!planets?.next}
          className={planets?.next ? "" : classes.btnDisabled}
        >
          {` Next >`}
        </button>
      </div>

      {planets ? (
        <PlanetsGrid planets={planets.results} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
