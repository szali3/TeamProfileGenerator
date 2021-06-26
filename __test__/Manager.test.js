const Manager = require("../lib/Manager")

test('creates an Manager object', () => {
    const manager = new Manager('Zohaib',1,'s.zohaibali3@gmail.com',11);
  
    expect(manager.name).toBe('Zohaib');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('s.zohaibali3@gmail.com');
    expect(manager.officeNumber).toEqual(11);
  });

  test('creates an Manager object', () => {
    const manager = new Manager('Zohaib',1,'s.zohaibali3@gmail.com',11);
  
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('s.zohaibali3@gmail.com');
    expect(manager.getRole()).toBe('Manager');
  });
  
  
  