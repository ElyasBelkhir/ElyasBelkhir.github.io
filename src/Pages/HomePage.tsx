import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function HomePage() {
  return (
    <div
      className="flex items-center justify-center flex-col text-center pt-20
        pb-6"
    >
      <h1 className="text 4xl md:text-4xl mb-1
            md:mb-3 font-bold"
      >
        Elyas Belkhir
      </h1>

      <h2
        className="text 4xl md:text-2xl mb-1
            md:mb-3 font-bold"
      >
        Software Engineer
      </h2>
      <div style={{ display: "flex", gap: "10px" }}>
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
      </div>
    </div>
  );
}

export default HomePage;
