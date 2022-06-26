const validateProductName = (req, res, next) => {
    const { productName } = req.body;
    if (!productName)
        return res.status(400).json({ "message": "O campo productName é obrigatório" });
    if (productName.length < 4)
        return res.status(400).json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });
    next();
};

const validateInfos = (req, res, next) => {
    const { infos } = req.body;
    if (!infos) 
        return res.status(400).json({ "message": "O campo infos é obrigatório" });
    next();
};

const validateSaleDate = (req, res, next) => {
    const { saleDate } = req.body.infos;
    if (!saleDate)
        return res.status(400).json({ "message": "O campo saleDate é obrigatório" });
    const regexr = '\\d{2}/\\d{2}/\\d{4}';
    if (!saleDate.match(regexr))
       return res.status(400).json({ "message": "O campo saleDate não é uma data válida" });
    next();
};

const validateWarrantyPeriod = (req, res, next) => {
    const { warrantyPeriod } = req.body.infos;
    if (!warrantyPeriod)
       return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" });
    if (+warrantyPeriod > 3 || +warrantyPeriod < 1)
       return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
    next();
};

module.exports = [validateProductName, validateInfos, validateSaleDate, validateWarrantyPeriod];