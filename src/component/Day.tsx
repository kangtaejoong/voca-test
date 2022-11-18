import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";


export default function Day(){

    const {day} = useParams<{day:string}>();
    const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

    // const [words, setWords] = useState([]);

    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setWords(data);
    //         })
    // },[day])

    return (
        <> 
        <h2> Day {day} </h2>
        {words.length === 0 && <span>로딩중....</span>}
        <table>
            <tbody>
                {words.map(word => (
                   <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    )
}