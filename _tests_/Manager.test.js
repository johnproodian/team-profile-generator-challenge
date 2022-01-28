// creating a manager object is basically taking the data from the inquirer prompts/inputs and creating a manager object of properties

// Then, it will have methods that write the html, basically

const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Bob', '1', 'Bob@fakemail.com', '101');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual('1');
    expect(manager.email).toEqual('Bob@fakemail.com');
    expect(manager.officeNumber).toBe('101');
});

test("returns manager's role--'Manager'", () => {
    const manager = new Manager('Bob', '1', 'Bob@fakemail.com', '101');

    expect(manager.getRole()).toBe('Manager');
});
