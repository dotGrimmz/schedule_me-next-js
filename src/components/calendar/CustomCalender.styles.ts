import styled from "styled-components";

export const CalenderContainer = styled.div`
  .react-calendar {
    width: 500px;
    max-width: 100%;
    background: radial-gradient(#228b22, green);
    border: 1px solid #a0a096;
    border-radius: 5px;
    border: 1.5px solid black;
    font-family: Comic Sans MS, Comic Sans, cursive;
    padding: 6px;
    line-height: 1.125em;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.76);
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: 20px;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    text-underline-position: none;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    text-decoration: none;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: grey;
  }
  .react-calendar__month-view__days__day--weekend:hover {
    color: grey;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: grey;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    border-radius: 14px;
    transition: transform 0.2s;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover {
    transform: scale(1.2);
    outline: 1px solid black;
    background-color: teal;
    color: white;
  }
  .react-calendar__tile:enabled:focus {
  }
  .react-calendar__tile--now {
    color: white;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: teal;
  }
  .react-calendar__tile--hasActive {
    background: teal;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
  }
  .react-calendar__tile--active {
    background: teal;
    color: black;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: teal;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
