const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, deleteUser, updateUser } = require('./userControls');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    // .delete(deleteUser)
    .put(updateUser);

module.exports = router;
