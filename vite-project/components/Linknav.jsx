import { Link } from "react-router-dom";

export function Nav(){
    return (
        <>
        <header>
            <nav>
                <Link to={'/'}>Главная</Link>
                <Link to={'/students'}>Пользователи</Link>
            </nav>
        </header>
        </>
    )
}