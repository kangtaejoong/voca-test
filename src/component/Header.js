import { Link } from "react-router-dom";
import CreateWord from "./CreateWord";
import CreateDay from "./CreateDay";

export default function Header(){
    return (
        <div className="header">
            <h1>
                <Link to="">토익 영단어(고급)</Link>
            </h1>
            <div className="menu">
                <Link to="create_word" className="link">
                    단어추가
                </Link>
                <Link to="create_day" className="link">
                    Day 추가
                </Link>
            </div>
        </div>
    );
}