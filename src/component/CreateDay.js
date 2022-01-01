import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const dayRef = useRef(null);
    const navigate = useNavigate();

    function addDay() {
        fetch("http://localhost:3001/days/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then(res => {
            if (res.ok) {
                navigate("/");
            }
        })
    }
    return (
        <div>
            <h3>현재일수 : {days.length}일</h3>
            <button onClick={addDay}>추가하기</button>
        </div>
    );
}