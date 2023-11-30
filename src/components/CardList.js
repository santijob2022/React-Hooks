import React from "react";
import Card from "./Card";

function CardList({robots}){    
  // if(true){
  //   throw new Error('Nooooo');
  // }// This is for testing ErrorBoundry

    return (
      <div>
        {
            robots.map((user, i) => {
            return (
                <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
            );
            })
        }
      </div>
    );
}

export default CardList;