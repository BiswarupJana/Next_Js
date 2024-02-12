'use client';
import { useState, useEffect } from "react";
import PeoplesGrid from "./peoples-grid";
import { getPeoples, getPrevious, getNext } from "@/lib/apiCollection";
import classes from './peoples.module.css';

export default function Peoples() {
  const [peoples, setPeoples] = useState(null);

  const fetchData = async () => {
    const data = await getPeoples();
    setPeoples(data);
  };

  const previousClick = async () => {
    setPeoples(null);
    const data = await getPrevious({ url: peoples.previous });
    setPeoples(data);
  };

  const nextClick = async () => {
    setPeoples(null);
    const data = await getNext({ url: peoples.next });
    setPeoples(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className={classes.btnDiv}>
        <button
          onClick={previousClick}
          disabled={!peoples?.previous}
          className={peoples?.previous ? '' : classes.btnDisabled}
        >
          {`< Previous`}
        </button>
        <button
          onClick={nextClick}
          disabled={!peoples?.next}
          className={peoples?.next ? '' : classes.btnDisabled}
        >
          {` Next >`}
        </button>
      </div>
      
      {peoples ? (
        <PeoplesGrid peoples={peoples.results} />
      ) : (
        <p className={classes.loading}>Loading data...</p>
      )}
    </div>
  );
}
