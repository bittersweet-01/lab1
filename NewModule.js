class NewModule {
    _name = "";

    constructor(_name) {
        this._name = _name;
    }

    getMessage() {
        return `Hello, ${this._name}`;
    }
}

module.exports.NewModule = NewModule;