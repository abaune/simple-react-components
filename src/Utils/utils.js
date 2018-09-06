export default {
    bindFunctions: (_this, ...methods) => {
        methods.forEach((method) => {
            if (method && _this[method]) {
                _this[method] = _this[method].bind(_this);
            } else {
                throw new Error("Could not find method to bind");
            }
        })
    },
};
