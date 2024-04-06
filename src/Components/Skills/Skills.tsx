import React from 'react';
import { Codes } from '../../class/codes';

function MyComponent(): JSX.Element {
    // Create an instance of the Codes class with coding languages
    const codes = new Codes(["Python", "SQL", "JavaScript", "TypeScript", "Regex", "React", "Flask", "Django", "CSS", "HTML"]);

    return (
        <div className="Skills">
            <h2>Coding Languages</h2>
            <ul>
                {/* Iterate over the list of coding languages and display them in a list */}
                {codes.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyComponent;
