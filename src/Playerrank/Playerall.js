import React from "react";
import Playerranks from "./playerranks.js";
import {allodi,allt20,alltest} from "./allrunderrank";
import './playerrank.css'
import { Link } from "react-router-dom";

function Playerall(props) {
  function show(allodi) {
    return (
      <Playerranks
        key={allodi.id}
        rank={allodi.rank}
        pname={allodi.pname}
        tname={allodi.tname}
        point={allodi.point}

      />
    )
  }
  function showt20(allt20) {
    return (
      <Playerranks
        key={allt20.id}
        rank={allt20.rank}
        pname={allt20.pname}
        tname={allt20.tname}
        point={allt20.point}

      />
    )
  }
  function showtest(alltest) {
    return (
      <Playerranks
        key={alltest.id}
        rank={alltest.rank}
        pname={alltest.pname}
        tname={alltest.tname}
        point={alltest.point}

      />
    )
  }


  return (
    <div>
      <div className="buttonshow">
        <Link className="links" to="/playerrank/batsman">BATSMAN</Link>
        <Link className="links" to="/playerrank/bowler">BOWLER</Link>
        <Link className="links" to="/playerrank/allrounder">ALL ROUNDER</Link>
      </div>
      <div className="allr">

        <div className="scr">
          <h1> Men's ODI Player Rank</h1>
          {allodi.map(show)}
        </div>
        <div className="scr">
          <h1> Men's T20 Player Rank</h1>
          {allt20.map(showt20)}
        </div>
        <div className="scr">
          <h1> Men's TEST Player Rank</h1>
          {alltest.map(showtest)}
        </div>



        {/* <Playerranks
        //image={allodi[0].image}
        rank={allodi[0].rank}
        pname={allodi[0].pname}
        tname={allodi[0].tname}
        point={allodi[0].point}
      />     

      <Playerranks
      //image={allodi[1].image}
      rank={allodi[1].rank}
      pname={allodi[1].pname}
      tname={allodi[1].tname}
      point={allodi[1].point}
    />
    <Playerranks
       // image={allodi[2].image}
        rank={allodi[2].rank}
        pname={allodi[2].pname}
        tname={allodi[2].tname}
        point={allodi[2].point}
        />*/}

      </div>
    </div>
  )
}

export default Playerall;