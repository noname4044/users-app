import axios from "axios";
import { useEffect, useState } from "react";
export const API = 'https://users-app-9lvx.onrender.com'

export function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get(API)
            .then((response) => {
                setStudents(response.data)
            })
    }, [])


    const clearBd = async () => {
    try {
        await axios.delete(API, {
            headers: {
                'admin-key': '12345'
            }
        })

        const res = await axios.get(API)
        setStudents(res.data)

        alert('База очищена!')
    } catch (error) {
        console.error(error)
    }
}

    return (
        <>
            <h1 className="students-title">Пользователи</h1>
            <button onClick={clearBd}
            className="clear-bd">
                Очистить базу данных
                </button>

            <div className="students-container">
                
                {students.map((student, index) => (
                    <div key={index} className="student-card">
                        <h3 className="student-name">{student.name}</h3>
                        <div className="student-info">
                            <p>Возраст: {student.age}</p>
                            <p>Город: {student.city}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}