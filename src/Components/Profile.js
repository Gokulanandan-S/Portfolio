import '../App.css';
import img from '../img.jpeg';
const Profile=()=>{
    return(
    
        <section id="profile" className="section profile-section">
        <div className="profile-content">
          <img className="profile-image" src={img} alt="Profile" />
          <div className="profile-text">
            <h2>Hello, I'm Gokulanandan </h2>
            <p>Passionate about creating elegant web experiences.</p>

            
          </div>
        </div>
        </section>
    );
}
export default Profile;