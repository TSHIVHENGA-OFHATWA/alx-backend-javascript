// task_4/js/subjects/Java.ts

namespace Subjects {
    // Merging with the existing Teacher interface to add an optional property
    export interface Teacher {
        experienceTeachingJava?: number; // Optional attribute
    }

    // Java class extending the Subject class
    export class Java extends Subject {
        // Method to return the requirements for Java
        public getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        // Method to return available teacher information
        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
