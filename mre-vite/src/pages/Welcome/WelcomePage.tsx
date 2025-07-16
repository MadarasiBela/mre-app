import './WelcomePage.css';

export default function WelcomePage() {
    var hasUserBeenShown: boolean = false;
    
    if (hasUserBeenShown) {
        return (
            <div className="welcome-page">
            </div>
        )
    }
    else {
        hasUserBeenShown =  true;
        return (
            <div className="welcome-page">
                <h2>Welcome to the Medical Record Editor (MRE) App!</h2>
                <p>Please select a menu item to get started.</p>
                <p>If you have already been registered select <strong>Login</strong> </p>
                <p>else select <strong>Register</strong>!</p>
            </div>
        )
    }
}