// creating a manager object is basically taking the data from the inquirer prompts/inputs and creating a manager object of properties

// Then, it will have methods that write the html, basically

const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');
const Manager = require('../lib/Manager');

test('uses mock data for Employee', () => {
    const employee = new Employee;
    expect(employee).toEqual({
        name: 'Bob',
        id: '1',
        email: 'Bob@fakemail.com'
    });
})

// test('creates a Manager object', () => {
//     const manager = new Manager(new Employee, '101');

//     expect(Employee.name).toEqual('Bob');

//     expect(manager.name).toEqual('Bob');
//     expect(manager.id).toEqual('1');
//     expect(manager.email).toEqual('Bob@fakemail.com');
//     expect(manager.officeNumber).toBe('101');
// })
