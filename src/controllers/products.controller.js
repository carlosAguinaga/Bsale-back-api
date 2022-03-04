

const getAllProducts = (req, res) => {
    res.json({ msg: 'todos los productos' });
}

const getOneProduct = (req, res) => {
    const id = req.params.id
    res.json({ msg: `retorno producto ${id}` });
}


module.exports = {
    getAllProducts,
    getOneProduct
}