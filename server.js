import http from 'http'
import db from './db.js'


const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS,GET,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'admin-key')

    if (req.method === 'DELETE') {

    if (req.headers['admin-key'] === '12345') {

        db.prepare('DELETE FROM students').run()

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Все удалено' }))

    } else {
        res.writeHead(403)
        res.end(JSON.stringify({ message: 'Нет доступа!' }))
    }

    return
}

    if (req.method === 'OPTIONS') {
        res.writeHead(204)
        res.end()
        return
    }

    if(req.method === 'GET'){
    const students = db
        .prepare('SELECT * FROM students')
        .all()

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(students))
    return
}

    if (req.method === 'POST') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            const data = JSON.parse(body || '{}')
            db.prepare(`
                INSERT INTO students (name, age, city)
                VALUES (?, ?, ?)
            `).run(
                data.name,
                data.age,
                data.city
            )

            console.log('Получены данные')
            console.log(data);

            res.setHeader('Content-Type', 'application/json')
            res.end(
                JSON.stringify({ message: 'Данные получены', data })
            )
        })
    }
})

const PORT = process.env.PORT || 10000;


server.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port:", PORT);
});