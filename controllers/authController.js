const authRepository = require('../repository/user.repository');

module.exports = {
    signUp: async (req, res) => {
        const result = await authRepository.signUp(req.body);
        res.send(result);
    }
};
