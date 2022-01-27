const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
}

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return `https://github.com/${github}`;
    }
    
}

module.exports = Engineer;