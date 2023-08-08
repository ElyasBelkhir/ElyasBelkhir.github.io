import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/HomePage.css";
import AboutPage from "./AboutPage";
function HomePage() {
  return (
    <div
      className="flex items-center justify-center flex-col text-left pt-20
        pb-6"
    >
      <h1
        className="text 4xl md:text-4xl mb-1
            md:mb-3 font-bold title "
        style={{ marginLeft: "200px" }}
      >
        Elyas Belkhir
      </h1>

      <h2
        style={{ fontWeight: "normal", marginLeft: "200px", fontSize: "20px" }}
      >
        Software Engineer
      </h2>

      <div className="container">
        <div className="row justify-content-left align-items-center">
          <div
            className="col-md-8 text-start"
            style={{
              fontFamily: "DM Sans",
              fontSize: 30,
              padding: 20,
              marginLeft: "-125px",
              
            }}
          >
            <AboutPage />
          </div>
          
        
        </div>

        <div
          className="d-flex flex-column justify-content-end align-items-start"
          style={{
            display: "flex",
            gap: "10px",
            position: "absolute",
            bottom: "0",
            right: "0", // Change "left" to "right"
            marginRight: "20px", // Add margin to control spacing from the right edge
          }}
        >
          <a
            href="https://www.linkedin.com/in/elyasbelkhir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/elyasbelkhir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:belkhirelyas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
