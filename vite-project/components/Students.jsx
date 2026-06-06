import axios from "axios";
import { useEffect, useState } from "react";

export function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('https://users-app-6bke.onrender.com')
            .then((response) => {
                setStudents(response.data)
            })
    }, [])

    return (
        <>
            <h1 className="students-title">Пользователи</h1>
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