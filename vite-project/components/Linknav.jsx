import { Link } from "react-router-dom";

export function Nav(){
    return (
        <>
        <header>
            <nav>
                <h1><Link to={'/'}>Главная</Link></h1>
                <h1><Link to={'/students'}>Пользователи</Link></h1>
            </nav>
        </header>
        </>
    )
}