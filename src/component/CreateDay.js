import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay(){
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    function addDays(){
        fetch('http://localhost:3001/days',{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({
                "day": days.length + 1
            })
        }).then(res => {
            if(res.ok){
                alert("저장완료");
                navigate("/");
            }
        });
    }
    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDays}>Day 추가</button>
        </div>
    );
}