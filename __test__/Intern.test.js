const Intern = require("../lib/Intern")

test('creates an Inter object', () => {
    const inter = new Intern('Zohaib',1,'s.zohaibali3@gmail.com',"UoT");
  
    expect(inter.name).toBe('Zohaib');
    expect(inter.id).toEqual(1);
    expect(inter.email).toBe('s.zohaibali3@gmail.com');
    expect(inter.school).toBe('UoT');
  });

  test('creates an Inter object', () => {
    const inter = new Intern('Zohaib',1,'s.zohaibali3@gmail.com',"UoT");
  
    expect(inter.getId()).toEqual(1);
    expect(inter.getEmail()).toBe('s.zohaibali3@gmail.com');
    expect(inter.getRole()).toBe('Intern');
    expect(inter.getSchool()).toBe('UoT');
  });
  