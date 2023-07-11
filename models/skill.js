const skills = [
    {id: 125223, skills: 'Problem Solving', done: true},
    {id: 127904, skills: 'Resourceful', done: false},
    {id: 139608, skills: 'Positive Attitude', done: false}
  ];

  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);

    return skills.find(skill => skill.id === id);
  }