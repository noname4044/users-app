import Database from 'better-sqlite3'

const db = new Database('database.db')

db.prepare(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        city TEXT NOT NULL
    )
`).run()

console.log('База данных готова')

export default db