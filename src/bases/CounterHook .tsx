import { useEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";



export const CounterHook = ({ initialValue=5}) => {

const {counter,counterElement,handleClick} = useCounter();

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
