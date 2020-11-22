import React, { useEffect, useState } from 'react';
import { ReactElement } from 'react';

import greenLines from './icons/greenLines.svg';
import redLines from './icons/redLines.svg';

const LaunchAnimation = (props: { duration: number }): ReactElement => {
  const [countDown, setCountDown] = useState(8);
  useEffect(() => {
    const intervalCounting = setInterval(() => {
      if (countDown > 0) {
        const newCountDown = countDown - 1;
        setCountDown(newCountDown);
      }
    }, props.duration/8);

    return () => {
      clearInterval(intervalCounting);
    };
  }, [countDown]);

  switch (countDown) {
    case 8:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines hidden" />
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down">3</div>
            <div className="time-count-down hidden">2</div>
          </div>
        </div>
      );
    case 7:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines" />
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down">3</div>
            <div className="time-count-down hidden">2</div>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines hidden" />
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down hidden">3</div>
            <div className="time-count-down">2</div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines" />
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down hidden">1</div>
            <div className="time-count-down">2</div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines hidden" />
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down">1</div>
            <div className="time-count-down hidden">2</div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="animation">
          <img src={redLines} alt="" className="lines"/>
          <div className="lines-cover"></div>

          <div className="play-button-started">
            <div className="time-count-down">1</div>
            <div className="time-count-down hidden">0</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="animation-end">
          <img src={greenLines} alt="" className="lines-end hidden no-transition" />
          <div className="lines-cover-end"></div>

          <div className="play-button-started-end">
            <div className="time-count-down-end">Go!</div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="animation-end">
          <img src={greenLines} alt="" className="lines-end" />
          <div className="lines-cover-end"></div>

          <div className="play-button-started-end">
            <div className="time-count-down-end">Go!</div>
          </div>
        </div>
      );
    default:
      return (
        <div className="animation-end">
          
        </div>
      );
  }
};
export default LaunchAnimation;
