import React from 'react';

import './VerticalBarClock.scss';

export interface TimeProps {
    time: Date,
}

export default function VerticalBarClock(props: TimeProps) {
  let currentHours = props.time.getHours().toString();
  if (Math.ceil(Math.log10(props.time.getHours())) < 2) {
    currentHours = currentHours.padStart(2, '0');
  }
  let currentMins = props.time.getMinutes().toString();
  if (Math.ceil(Math.log10(props.time.getMinutes())) < 2) {
    currentMins = currentMins.padStart(2, '0');
  }
  let currentSecs = props.time.getSeconds().toString();
  if (Math.ceil(Math.log10(props.time.getSeconds())) < 2) {
    currentSecs = currentSecs.padStart(2, '0');
  }
  return (
    <div className="vert-clock-chart">
      <div className={"vert-clock-bar-".concat(props.time.getHours().toString())}><span>{currentHours}</span></div>
      <div className={"vert-clock-bar-".concat(props.time.getMinutes().toString())}><span>{currentMins}</span></div>
      <div className={"vert-clock-bar-".concat(props.time.getSeconds().toString())}><span>{currentSecs}</span></div>
    </div>
  );
}