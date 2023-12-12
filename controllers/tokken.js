// newTea function for post tea route
const home = (req, res, next) => {
    res.json({message: "Tokken controller is running"}); // dummy function for now
};

const generate = (req, res, next) => {
    res.json({message: "generate function is running"}); // dummy function for now
};

module.exports = {home,generate};