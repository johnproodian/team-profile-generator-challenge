// creating a manager object is basically taking the data from the inquirer prompts/inputs and creating a manager object of properties

// Then, it will have methods that write the html, basically

const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Bob', '1', 'mrmgr@fakemail.com', '101');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual('1');
    expect(manager.email).toBe('mrmgr@fakemail.com');
    expect(manager.officeNumber).toBe('101');
})
