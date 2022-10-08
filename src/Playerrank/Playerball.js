import React from "react";
import Playerranks from "./playerranks.js";
import {ballodi,ballt20,balltest} from "./ballingrank";

import './playerrank.css'
import { Link } from "react-router-dom";

function Playerball(props) {
  function show(ballodi) {
    return (
      <Playerranks
        key={ballodi.id}
        rank={ballodi.rank}
        pname={ballodi.pname}
        tname={ballodi.tname}
        point={ballodi.point}

      />
    )
  }
  function showt20(ballt20) {
    return (
      <Playerranks
        key={ballt20.id}
        rank={ballt20.rank}
        pname={ballt20.pname}
        tname={ballt20.tname}
        point={ballt20.point}

      />
    )
  }
  function showtest(balltest) {
    return (
      <Playerranks
        key={balltest.id}
        rank={balltest.rank}
        pname={balltest.pname}
        tname={balltest.tname}
        point={balltest.point}

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
          {ballodi.map(show)}
        </div>
        <div className="scr">
          <h1> Men's T20 Player Rank</h1>
          {ballt20.map(showt20)}
        </div>
        <div className="scr">
          <h1> Men's TEST Player Rank</h1>
          {balltest.map(showtest)}
        </div>



        {/* <Playerranks
        //image={ballodi[0].image}
        rank={ballodi[0].rank}
        pname={ballodi[0].pname}
        tname={ballodi[0].tname}
        point={ballodi[0].point}
      />     

      <Playerranks
      //image={ballodi[1].image}
      rank={ballodi[1].rank}
      pname={ballodi[1].pname}
      tname={ballodi[1].tname}
      point={ballodi[1].point}
    />
    <Playerranks
       // image={ballodi[2].image}
        rank={ballodi[2].rank}
        pname={ballodi[2].pname}
        tname={ballodi[2].tname}
        point={ballodi[2].point}
        />*/}

      </div>
    </div>
  )
}

export default Playerball;