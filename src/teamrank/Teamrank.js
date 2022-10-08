import React from "react";
import {Teamdata,Teamdatat20,Teamdatatest} from "./Teamdatabatsman";
import Teamlogic from "./Teamlogic";


function Teamrank(props) {

    function showteam(Teamdata)
    {
        return(
            <Teamlogic
            key={Teamdata.id}
            rank={Teamdata.rank}
            name={Teamdata.name}
            point={Teamdata.point}
          
            />
          )
        }
        function showteamt20(Teamdatat20)
    {
        return(
            <Teamlogic
            key={Teamdatat20.id}
            rank={Teamdatat20.rank}
            name={Teamdatat20.name}
            point={Teamdatat20.point}
          
            />
          )
        }
        function showteamtest(Teamdatatest)
    {
        return(
            <Teamlogic
            key={Teamdatatest.id}
            rank={Teamdatatest.rank}
            name={Teamdatatest.name}
            point={Teamdatatest.point}
          
            />
          )
        }

          return(
            <div className="alltr">
              <div>
                <h1>Team ODI Rank</h1>
                {Teamdata.map(showteam)}
              </div>
              <div>
              <h1>Team T20 Rank</h1>
                {Teamdatat20.map(showteamt20)}
              </div>
              <div>
              <h1>Team TEST Rank</h1>
                {Teamdatatest.map(showteamtest)}
              </div>
                
            </div>
          )
    }






export default Teamrank;