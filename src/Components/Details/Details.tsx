import "./Details.css";
import alexImage1 from "../Assets/Images/alex1.jpeg";
import alexImage2 from "../Assets/Images/alex2.jpeg";
import alexImage3 from "../Assets/Images/alex.jpeg";

export function Details(): JSX.Element {
    // Array containing paths to the images
    const images = [alexImage1, alexImage2, alexImage3];

    // Generate a random index to select one of the images
    const randomIndex = Math.floor(Math.random() * images.length);

    // Use the randomly selected image as the src attribute
    const selectedImage = images[randomIndex];

    return (
        <div className="Details">
            <h3>Who am I?</h3>
            <p>I'm a software developer</p>
            <p>Fast Learner</p>
            <p>Always prepared for new challenges</p>
            <p>Responsible</p>
            <p>Ready to learn and committed to succeed</p>
            {/* Use the selectedImage as the src attribute */}
            <img src={selectedImage} alt="AlexImage" />
        </div>
    );
}
