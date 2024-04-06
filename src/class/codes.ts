export class Codes {

    // Data Members / Fields
    public languages: string[]; 
    // Constructor
    public constructor(languages: string[]) {
        this.languages = languages;
    }

    // Method to display the list of coding languages
    public display(): void {
        console.log(this.languages);
    }
}
