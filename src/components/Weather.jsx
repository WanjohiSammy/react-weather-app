import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.city &&
        props.country && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {" "}
              {props.country}, {props.city}
            </span>
          </p>
        )}
      {props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {props.temperature}</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Condition:
          <span className="weather__value"> {props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__error">Error: {props.error}</p>}
    </div>
  );
};

export default Weather;