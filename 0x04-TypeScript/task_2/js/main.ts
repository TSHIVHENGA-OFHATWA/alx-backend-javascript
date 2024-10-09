// DirectorInterface interface definition
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface interface definition
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Example function to create an employee object
function createEmployee(salary) {
    return {
        salary: salary
    };
}

// Function to check if the employee is a Director (type predicate)
function isDirector(employee) {
    return employee.salary >= 1000; // Assuming salary >= 1000 denotes a Director
}

// Function to execute work based on the type of employee
function executeWork(employee) {
    if (isDirector(employee)) {
        workDirectorTasks();
    } else {
        workTeacherTasks();
    }
}

// Example functions for specific work tasks
function workDirectorTasks() {
    console.log("Getting to director tasks");
}

function workTeacherTasks() {
    console.log("Getting to teacher tasks");
}

// Define a String literal type named Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the given argument
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // This return is never reached due to type constraint but included for completeness
    return 'Invalid subject';
}

// Function to create an employee based on the salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

const teacher = createEmployee(300);
console.log(teacher.workFromHome()); // Output: Cannot work from home
