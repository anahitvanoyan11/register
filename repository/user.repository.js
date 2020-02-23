const User = require('../models/mongo/user');

module.exports = {
    signUp: async (data) => {
        try {
            const result = await User.create(
                {
                    firstName: data.firstname,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                });
            return result;
        } catch (e) {
            return e;
        }
    },
};
