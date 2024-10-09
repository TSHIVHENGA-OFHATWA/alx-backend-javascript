// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
    credits: number; // Number of credits
    brand: 'major';  // Unique identifier
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number; // Number of credits
    brand: 'minor';  // Unique identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major' // return with brand
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor' // return with brand
    };
}
