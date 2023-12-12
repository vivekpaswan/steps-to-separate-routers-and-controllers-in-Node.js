// newTea function for post tea route
const newTea = (req, res, next) => {
    res.json({message: "App is running"}); // dummy function for now
};

module.exports = {newTea};