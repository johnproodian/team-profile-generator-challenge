
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Rob', '2', 'Bob@fakemail.com');

    expect(employee.name).toBe('Rob');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('Bob@fakemail.com');

})