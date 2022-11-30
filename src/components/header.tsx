import {
  Avatar,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SchoolIcon from "@mui/icons-material/School";
import Typewriter from "typewriter-effect";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import DownloadIcon from "@mui/icons-material/Download";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
export function Header() {
  return (
    <header
      style={{
        minHeight: "30vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "silver",
        backgroundImage:
          "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://www.fay3.com/ioDOAntNwc4/download')",
      }}
    >
      <nav className="navbar  navbar-expand-lg navbar-dark p-4">
        <div className="container">
          <Button
            style={{
              color: "orange",
              fontStyle: "italic",
              fontSize: "15px",
            }}
            href={"/About"}
            onClick={() => {}}
          >
            Full Satck Developer
          </Button>
          <Button
            className="navbar-toggler text-center "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div
            className="collapse navbar-collapse  "
            id="navbarNavDarkDropdown"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 "></ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    color="inherit"
                    size="small"
                    startIcon={<InfoTwoToneIcon />}
                    href={"#About"}
                  >
                    About
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    size="small"
                    color="inherit"
                    startIcon={<ContactPhoneIcon />}
                    href={"#Contact"}
                  >
                    Contact US
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    size="small"
                    color="inherit"
                    startIcon={<DesignServicesIcon />}
                    href={"#Services"}
                  >
                    Services
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    size="small"
                    color="inherit"
                    startIcon={<SnowboardingIcon />}
                    onClick={() => {}}
                    href={"#Skills"}
                  >
                    Skills
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    size="small"
                    color="inherit"
                    startIcon={<AccountTreeIcon />}
                    onClick={() => {}}
                    href={"#Projects"}
                  >
                    Projects
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    sx={{ ml: 2 }}
                    size="small"
                    color="inherit"
                    startIcon={<SchoolIcon />}
                    onClick={() => {}}
                    href={"#Education"}
                  >
                    Education
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-5 text-center">
        <Typography variant="h5" sx={{ mt: 5, mb: 1 }}>
          Mr. Osama Salem
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, mb: 4 }}>
          A i am web Developer who builds a fully websites with beautiful
          interactive interface desgins
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            mb: 5,
            color: "orange",
            fontStyle: "italic",
            fontSize: "40px",
          }}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "React Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography variant="body2" sx={{ mt: 5, mb: 5 }}>
          <Stack
            direction="row"
            spacing={5}
            justifyContent="center"
            sx={{ mt: 1, mb: 6 }}
          >
            <Button
              startIcon={<DownloadIcon />}
              variant="outlined"
              href={require("./files/OsamaCv.pdf")}
              download
            >
              Download Cv
            </Button>
            <Button
              href={`mailto:${"osama.moh.salem@gmail.com"}?subject=${""}&body=${""}`}
              startIcon={
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                />
              }
            />
            <Button
              startIcon={
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                />
              }
            />
            <Button
              href="https://github.com/Osama-Same"
              startIcon={
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                />
              }
            />
          </Stack>
        </Typography>
      </div>
    </header>
  );
}
