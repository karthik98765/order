const mysql = require('mysql');

//Mysql
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
    table: 'outlet'
})

// get all users
module.exports.all = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM outlet', (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    }) 
}

//get by ID
module.exports.byid = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM outlet WHERE ID = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    }) 
}

//delete by ID
module.exports.delete = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM outlet WHERE ID = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`outlet with the Record ID: ${[req.params.id]} has been removed`)
            } else {
                console.log(err)
            }
        })
    }) 
}

//insert
module.exports.insert = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body


        connection.query('INSERT INTO outlet SET ?', params, (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`outlet with the Record name: ${[params.name]} has been added`)
            } else {
                console.log(err)
            }
        })
        console.log(req.body)
    }) 
}

// updated
module.exports.update = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {id, name, phoneno, manager} = req.body


        connection.query('UPDATE outlet SET name = ?  WHERE id = ? ', [ name, id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`outlet with the Record name: ${name} has been updated`)
            } else {
                console.log(err)
            }
        })
        console.log(req.body)
    }) 
}
