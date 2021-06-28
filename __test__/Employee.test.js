const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee('Zohaib',1,'s.zohaibali3@gmail.com');
  
    expect(employee.name).toBe('Zohaib');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('s.zohaibali3@gmail.com');
});

  test('creates Employee object method', () => {
    const employee = new Employee('Zohaib',1,'s.zohaibali3@gmail.com');
  
    expect(employee.getName()).toBe('Zohaib');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toBe('s.zohaibali3@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});
  