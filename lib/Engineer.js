const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gihub) {
        super(name,id,email);
        this.github = gihub;
    }

    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;