const Engineer = require("../lib/Engineer")

test('creates an Engineer object', () => {
    const engineer = new Engineer('Zohaib',1,'s.zohaibali3@gmail.com','szali3');
  
    expect(engineer.name).toBe('Zohaib');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('s.zohaibali3@gmail.com');
    expect(engineer.github).toBe('szali3');
  });

  test('Test Engineer object methods', () => {
    const engineer = new Engineer('Zohaib',1,'s.zohaibali3@gmail.com','szali3');
  
    expect(engineer.getId()).toEqual(1);
    expect(engineer.getEmail()).toBe('s.zohaibali3@gmail.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('szali3');
  });
  