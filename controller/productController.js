const mysql = require('mysql');

//Mysql
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
    table: 'product'
})

// get all users
module.exports.all = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM product', (err, rows) => {
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

        connection.query('SELECT * FROM product WHERE ID = ?', [req.params.id], (err, rows) => {
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

        connection.query('DELETE FROM product WHERE ID = ?', [req.params.id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`product with the Record ID: ${[req.params.id]} has been removed`)
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


        connection.query('INSERT INTO product SET ?', params, (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`product with the Record name: ${[params.name]} has been added`)
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


        connection.query('UPDATE product SET name = ?  WHERE id = ? ', [ name, id], (err, rows) => {
            connection.release()

            if (!err) {
                res.send(`product with the Record name: ${name} has been updated`)
            } else {
                console.log(err)
            }
        })
        console.log(req.body)
    }) 
}
