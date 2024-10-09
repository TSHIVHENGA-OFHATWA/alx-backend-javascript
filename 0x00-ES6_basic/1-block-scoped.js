export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  var newTask;
  var newTask2;

  if (trueOrFalse) {
    newTask = true;
    newTask2 = false;
  }

  return [task, task2];
}
