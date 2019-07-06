function parse(tasks) {
  let strings = tasks.split(",");

  let task = {
    description: strings[0],
    owner: strings[1].trim(),
    dueDate: strings[2].trim(),
  };

  return task;
}

module.exports = {
  parse
}