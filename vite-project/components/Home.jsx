import { useState } from "react"
import axios from 'axios'
import { API } from "./Students"


export function Home() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')


    const sendData = async () => {
        try {
            if (name === '' || age === '' || city === '') {
                alert('Заполните все поля!')
                return
            }

            const response = await axios.post(
                API,
                {
                    name,
                    age,
                    city
                }
            )
            console.log(response.data)
        } catch (error) {
            console.error('Ошибка: ', error)

        }

        setAge('')
        setCity('')
        setName('')
    }

    return (
        <>
            <div className="page">
                <div className='style-form'>
                    <h1 className="form-title">Добавление пользователя</h1>
                    <div className="input-box">
                        <input id="name" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name">Введите ваше имя...</label>
                    </div>
                    <div className="input-box">
                        <input id="name" placeholder=" " value={age} onChange={(e) => setAge(e.target.value)} />
                        <label htmlFor="name">Введите ваш возраст...</label>
                    </div>

                    <div className="input-box">
                        <input id="name" placeholder=" " value={city} onChange={(e) => setCity(e.target.value)} />
                        <label htmlFor="name">Введите ваш город...</label>
                    </div>

                    <button onClick={sendData} className='btn-add-student'>
                        Добавить пользователя
                    </button>

                    <p></p>
                </div>
            </div>

            <footer>
                <h3>Created by Magomed © 2026</h3>
            </footer>

        </>
    )
}