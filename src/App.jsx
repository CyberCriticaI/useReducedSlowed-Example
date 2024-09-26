import { useState, useReducer,useEffect } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 18:
      return {
        age: 18,
        isLegal: true,
        canDrink: false,
        canDrive: true,
        aarp: false,
        currentPic:
          "https://plus.unsplash.com/premium_photo-1663126482717-e96f2bca59cc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbnN8ZW58MHx8MHx8fDA%3D",
      };
      break;

    case 21:
      return {
        age: 21,
        isLegal: true,
        canDrink: true,
        canDrive: true,
        aarp: false,
        currentPic:
          "https://images.unsplash.com/photo-1519758340474-40fa8cba6584?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjBhZHVsdHxlbnwwfHwwfHx8MA%3D%3D",
      };
      break;

    case 30:
      return {
        age: 30,
        isLegal: true,
        canDrink: true,
        canDrive: true,
        aarp: true,
        currentPic:
          "https://images.unsplash.com/photo-1579618218290-24a26f63a738?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwZ3V5JTIwZnJvbSUyMHVwfGVufDB8fDB8fHww",
      };
      break;
    default:
      return {
        age: 0,
        isLegal: true,
        canDrink: true,
        canDrive: true,
        aarp: true,
        currentPic:
          "",
      };


      break;
  }
};
// -----------------[REDUCER: playbook]
function App() {
  const [state, dispatch] = useReducer(reducer, {
    age: 0,
    isLegal: false,
    canDrink: false,
    canDrive: false,
    aarp: false,
    currentPic: "",
  });
  // Establishing useResucers state and its reference to the reducer we have defined above


useEffect(()=>{
 dispatch({type: 22})
},[])

  return (
    <>
      <h1>Whats Your Age? </h1>

      <button
        onClick={() => {
          dispatch({ type: 18 });
        }}
      >
        18
      </button>

      <button
        onClick={() => {
          dispatch({ type: 21 });
        }}
      >
        21
      </button>

      <button
        onClick={() => {
          dispatch({ type: 30 });
        }}
      >
        30
      </button>

      <div className="infoBox">
        <img style={{width:"100%",height:"100%"}}src={state.currentPic} />
      </div>
    </>
  );
}

export default App;