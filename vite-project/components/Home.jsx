import { useState } from "react"
import axios from 'axios'


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
                'https://users-app-9lvx.onrender.com',
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
                    <h1>Добавление пользователья</h1>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Введите ваше имя...' />

                    <input type="text" value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder='Введите ваш возраст...' />


                    <input type="text" value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='Введите ваш город...' />

                    <button onClick={sendData} className='btn-add-student'>
                        Добавить пользователья
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