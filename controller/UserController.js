const { Op } = require("sequelize");
const User = require('../models/user');

module.exports = {
    createUser: (req, res) => {
        const user = req.body;
        console.log(user)
        const newUser = User.create(user).then(
            user => {
                res.status(200).json(user)
            }
        ).catch(error => {
            res.status(500).json(error)
        });
    },
    getUser: (req, res) => {
        const id = req.params.id;
        const user = User.findByPk(id).then(user => {
            res.status(200).json(user)
        }).catch(error => {
            res.status(500).json(error)
        });
    },
    getAll: (req, res) => {
        const queryParams = req.query;
        console.log(queryParams)
        const email = req.query.email;
        console.log(email)
        const users = User.findAll({
            where: {
                email: {
                    [Op.like]: '%' + email + '%',
                }
            }
        }).then(users => {
            res.status(200).json(users)
        }).catch(error => {
            res.status(500).json(error)
        });
    }
}