const db = require('../db/index.js')

const controller = {
    get: (req, res) => {
        // const dress = req.body.product_id
        //{product_id: dress}
        db.find()
        .then(data => res.status(200).send(data))
    }
}

module.exports = controller