import { Button, Stack, Typography } from "@mui/material";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from '@mui/icons-material/School';
import Typewriter from 'typewriter-effect';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';

export function Header() {
  return <header style={{
    minHeight: "60vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "silver",
    backgroundImage:
      "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('https://www.fay3.com/ioDOAntNwc4/download')",
  }}>
    <nav className="navbar  navbar-expand-lg navbar-dark p-4">

      <div className="container">

        <Button
          style={{
            color: "orange",
            fontStyle: "italic",
            fontSize: "15px",
          }}
          href={"/About"}
          onClick={() => {

          }}
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
                  startIcon={<SnowboardingIcon />}
                  onClick={() => {
                  }}
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
                  startIcon={<SchoolIcon />}
                  onClick={() => {
                  }}
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
      <img
        className="rounded-circle pt-3 pb-3"
        src={'https://res.cloudinary.com/marki/image/upload/v1669665355/CRUD/User/rlutg4c1wmjhjp6ly1qo.jpg'}
        width="250"
        height="236"
        alt={"https://res.cloudinary.com/marki/image/upload/v1669665355/CRUD/User/rlutg4c1wmjhjp6ly1qo.jpg"}
      />
      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        Osama Salem
      </Typography>
      <Typography variant="body2" sx={{
        mt: 2, mb: 5, color: "orange",
        fontStyle: "italic",
        fontSize: "18px",
      }}>
        <Typewriter options={{
          strings: ['Full Stack Developer', 'React Developer'],
          autoStart: true,
          loop: true,
        }} />
      </Typography>
      <Typography variant="body2" sx={{ mt: 5, mb: 5 }}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          sx={{ mt: 1, mb: 6 }}
        >
          <FacebookRoundedIcon color="primary" sx={{ fontSize: 40 }} />
          <TwitterIcon color="primary" sx={{ fontSize: 40 }} />
          <InstagramIcon color="secondary" sx={{ fontSize: 40 }} />
          <WhatsAppIcon color="success" sx={{ fontSize: 40 }} />
          <LinkedInIcon color="primary" sx={{ fontSize: 40 }} />
        </Stack>
      </Typography>
    </div>

  </header>
}
