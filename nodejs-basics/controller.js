let { people } = require("./data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please provide name",
    });
  }
  res.status(200).json({ success: true, person: name });
};

const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(id, name);
  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person found with ${id}` });
  }

  const newPeople = people.map((p) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return p;
  });

  res.status(200).json({ success: true, data: newPeople });
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person found with ${id}` });
  }

  const newPeople = people.filter((p) => p.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPeople,
  updatePeople,
  deletePeople,
};
