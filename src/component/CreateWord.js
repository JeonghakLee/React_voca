import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days"); // days 불러오기
    const engRef = useRef(null);    //Dom에 접근하게 해주는 훅.
    const korRef = useRef(null);
    const dayRef = useRef(null);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            }),
        }).then(res => {
            if (res.ok) {
                alert('생성이 완료 되었습니다');
                navigate(`/day/${dayRef.current.value}`);
            }
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}