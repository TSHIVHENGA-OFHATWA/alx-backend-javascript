// task_4/js/subjects/Cpp.ts

namespace Subjects {
    // Merging with the existing Teacher interface to add an optional property
    export interface Teacher {
        experienceTeachingC?: number; // Optional attribute
    }

    // Cpp class extending the Subject class
    export class Cpp extends Subject {
        // Method to return the requirements for Cpp
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        // Method to return available teacher information
        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
