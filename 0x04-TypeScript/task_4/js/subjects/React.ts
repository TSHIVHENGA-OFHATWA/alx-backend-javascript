// task_4/js/subjects/React.ts

namespace Subjects {
    // Merging with the existing Teacher interface to add an optional property
    export interface Teacher {
        experienceTeachingReact?: number; // Optional attribute
    }

    // React class extending the Subject class
    export class React extends Subject {
        // Method to return the requirements for React
        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        // Method to return available teacher information
        public getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
