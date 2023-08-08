import React from "react";
import "../Styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from "../actions/index";
import Time from "../Images/Time.jpg"

const Main = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <div className="main-content py-3  justify-content-center align-items-center">
              <h2 className="text-center heading">WELCOME TO REDUX</h2>
              <h4 className="text-center sub-heading">Increment & Decrement</h4>
              <div className="text-center">
                <button
                  className="btn btn-danger mx-5 buttons"
                  onClick={() => dispatch(decNumber())}
                >
                  -
                </button>
                <input
                  className="text-center p-1 mt-3"
                  type="text"
                  value={myState}
                />
                <button
                  className="btn btn-success mx-5 buttons"
                  onClick={() => dispatch(incNumber())}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                <img src={Time} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
