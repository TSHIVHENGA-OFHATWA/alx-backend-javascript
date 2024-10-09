// task_4/js/main.ts

import { Cpp } from './Cpp'; 
import { Java } from './Java';
import { React } from './React';
import { Teacher } from './Teacher';

// Exporting constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Creating a Teacher object with experienceTeachingC
export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

