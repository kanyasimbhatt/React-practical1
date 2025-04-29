import "./App.css";
import profile from "../public/profile.png";


function App() {
  const data ={
    login: "kanyasimbhatt",
    public_repos: 25,
    followers: 1,
    following: 2,
  }

  return (
    <div className="body">
      <div className="main-div">
        <p>Name: Kanya Bhatt</p>
        <p>
          Mail:{" "}
          <a href="mailto:kanya.bhatt@simformsolutions.com">
            kanya.bhatt@simformsolutions.com
          </a>
        </p>
        <p>
          Introduction: Hello Everybody, I am currently an intern at Simform.
        </p>
        <p>Github</p>

        <div className="github-profile">
          <div className="profile-logo-section">
            <img
              src={profile}
              className="profile-image"
              alt="Profile picture of github profile"
            ></img>
          </div>
          <div className="profile-information">
            <p>Username: {data.login}</p>
            <p>Total Repositories: {data.public_repos}</p>
            <p>Follower Count: {data.followers}</p>
            <p>Following Count: {data.following}</p>
            <p>
              {" "}
              Repository Link:{" "}
              <a href="https://github.com/kanyasimbhatt">Github Profile</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
