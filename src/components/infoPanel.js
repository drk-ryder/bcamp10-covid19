import React from "react";
import GlobalStats from "./globalStats";
import AllCountries from "./allCountries";


export default function InfoPanel({currentScreen}) {

  if (currentScreen === 0)
  return <GlobalStats />
  else if(currentScreen===1)
  return <AllCountries />
  else return <h1>Hello World</h1>
  
}
