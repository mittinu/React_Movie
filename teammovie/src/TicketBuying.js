import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import './TicketBuying.css';

const SetDayTable = ({ Day = '19', Week = '일', onSelectDate }) => {
  return (
    <div
      className="date-div inner-div"
      onClick={() => onSelectDate({ day: Day, week: Week })}
    >
      {Day + ' • '}
      {Week}
    </div>
  );
};

const TicketBuying = () => {
  const today = new Date();
  const Week = ['일', '월', '화', '수', '목', '금', '토'];

  const location = useLocation();
    //   const MovieId = location.state?.id || 'DefaultMovieId';
    //   const MovieId_poster = location.state?.poster[MovieId] || 'DefaultMovieId';
  const movie = location.state;

  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSelectDate = ({ day, week }) => {
    setSelectedDate({ day, week });
  };

  //reservation = 예약
  const reservation = () => {
    const user = window.confirm('예약하시겠습니까?');

    if (user) {
      navigate(
        `/List?movieId=${movie.id}&day=${selectedDate.day}&week=${selectedDate.week}`
      ); // gpt가 알려준 코드. 선택한 영화 List.js에 넘기는 법을 몰라 chatgpt한테 물어봤습니다.
    } else {
      alert('다른 영화 또는 시간을 선택해주세요.');
    }
  };

  return (
    <div>
      <h1>Movie Title: {movie.title}</h1>
      <hr />
      <div className="outer-div">
        <SetDayTable
          Day={today.getDate()}
          Week={Week[(today.getDay() + 0) % 7]}
          onSelectDate={handleSelectDate}
        />
        <SetDayTable
          Day={today.getDate() + 1}
          Week={Week[(today.getDay() + 1) % 7]}
          onSelectDate={handleSelectDate}
        />
        <SetDayTable
          Day={today.getDate() + 2}
          Week={Week[(today.getDay() + 2) % 7]}
          onSelectDate={handleSelectDate}
        />
      </div>
      {selectedDate && (
        <div>
          <div>
            {selectedDate.week +
              ' • 15:00 ~ 17:42 : ' +
              movie.title +
              '(2D 자막)'}
            <button className="reservationColor" onClick={reservation}>
              예약
            </button>
          </div>
          <div>
            {selectedDate.week +
              ' • 18:10 ~ 20:52 : ' +
              movie.title +
              '(2D 자막)'}
            <button className="reservationColor" onClick={reservation}>
              예약
            </button>
          </div>
          <div>
            {selectedDate.week +
              ' • 21:10 ~ 23:52 : ' +
              movie.title +
              '(2D 자막)'}
            <button className="reservationColor" onClick={reservation}>
              예약
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBuying;
