import React from "react";
import Playerranks from "./playerranks.js";
import {mensodi,menst20,menstest} from "./batsmanrank";
import './playerrank.css'
import { Link } from "react-router-dom";

function Playerrank(props) {
  function show(mensodi) {
    return (
      <Playerranks
        key={mensodi.id}
        rank={mensodi.rank}
        pname={mensodi.pname}
        tname={mensodi.tname}
        point={mensodi.point}

      />
    )
  }
  function showt20(menst20) {
    return (
      <Playerranks
        key={menst20.id}
        rank={menst20.rank}
        pname={menst20.pname}
        tname={menst20.tname}
        point={menst20.point}

      />
    )
  }
  function showtest(menstest) {
    return (
      <Playerranks
        key={menstest.id}
        rank={menstest.rank}
        pname={menstest.pname}
        tname={menstest.tname}
        point={menstest.point}

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
          {mensodi.map(show)}
        </div>
        <div className="scr">
          <h1> Men's T20 Player Rank</h1>
          {menst20.map(showt20)}
        </div>
        <div className="scr">
          <h1> Men's TEST Player Rank</h1>
          {menstest.map(showtest)}
        </div>



        {/* <Playerranks
        //image={mensodi[0].image}
        rank={mensodi[0].rank}
        pname={mensodi[0].pname}
        tname={mensodi[0].tname}
        point={mensodi[0].point}
      />     

      <Playerranks
      //image={mensodi[1].image}
      rank={mensodi[1].rank}
      pname={mensodi[1].pname}
      tname={mensodi[1].tname}
      point={mensodi[1].point}
    />
    <Playerranks
       // image={mensodi[2].image}
        rank={mensodi[2].rank}
        pname={mensodi[2].pname}
        tname={mensodi[2].tname}
        point={mensodi[2].point}
        />*/}

      </div>
    </div>
  )
}

export default Playerrank;