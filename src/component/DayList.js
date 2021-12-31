import { Link } from "react-router-dom";
import dummy from "../db/data.json"
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
//렌더링을 마치고 어떤 작업이 하고 싶을 때 사용 (API 호출 후)
export default function DayList() {
    // const [days, setDays] = useState([]);
    
    // 불필요한 호출을 막기 위해서 의존성 배열을 두 번째 매개변수에 추가
    // 렌더링 후 한번만 호출하면 되는 경우 빈 배열 전달
    // useEffect(() => {
    //     // promise 반환
    //     fetch('http://localhost:3001/days').then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // }, []); 
    const days = useFetch('http://localhost:3001/days');
    return ( 
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}