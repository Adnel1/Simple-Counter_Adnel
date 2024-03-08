//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="container bg-dark text-white text-center d-flex justify-content-center p-4">
            <div className="border border-secondary border-4 rounded p-4 m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
            </div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitSix % 10}</h1></div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitFive % 10}</h1></div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitFour % 10}</h1></div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitThree % 10}</h1></div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitTwo % 10}</h1></div>
            <div className="border border-secondary border-4 rounded p-4 m-2"><h1>{props.digitOne % 10}</h1></div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;

setInterval(function() {
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    //render your react application
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"));
}, 1000);
