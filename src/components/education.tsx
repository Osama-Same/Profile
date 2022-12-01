import { Container } from "@mui/system";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button/Button";
export function EducationPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
        <Divider textAlign="left">Education</Divider>
      </Typography>
      <div className="row">
        <div className="col-md-5 pt-3 pb-3">
          <Typography variant="h6" sx={{ mb: 2, ml: -1 }}>
            <Button
              color="success"
              startIcon={
                <img
                  src={
                    "https://media-exp1.licdn.com/dms/image/C4E0BAQFhLk1hH86-dA/company-logo_200_200/0/1615602634198?e=1677715200&v=beta&t=v3FphNxMJPfA9vdla7f0f9wKaYWFAfAZZzAcc_6_BdU"
                  }
                  height={30}
                  width={30}
                  alt={""}
                />
              }
            />
            Meraki Academy JO
          </Typography>

          <Typography variant="button" color={"red"} sx={{ mb: 2 }}>
            Immersive Full-Stack Developer | 2021
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Over 220 hours.</li>
              <li className="list-group-item">
                I worked with as a team at Meraki Academy
              </li>
              <li className="list-group-item">
                Built various full stack real world projects
              </li>
              <li className="list-group-item">
                How to write code correctly and professionally
              </li>
              <li className="list-group-item">Timely delivery</li>
              <li className="list-group-item">
                Back End (RESTful APls, Node.js, MySQL ,Express.js,MongoDB).
              </li>
              <li className="list-group-item">
                Front End (Html , CSS , React.js ,JavaScript).
              </li>
              <li className="list-group-item">
                GitHub, Data Structures & Algorithms & oop
              </li>
            </ul>
          </Typography>
        </div>
        <div className="col-md-2">
          <Typography variant="h5" sx={{ mb: 5, mt: 5, color: "orange" }}>
            <Divider textAlign="center">OR</Divider>
          </Typography>
        </div>
        <div className="col pt-3 pb-3">
          <Typography variant="h6" sx={{ mb: 2, ml: -1 }}>
            <Button
              color="success"
              startIcon={
                <img
                  src={
                    "https://pbs.twimg.com/profile_images/819112533340602368/ugZ_8YZM_400x400.jpg"
                  }
                  height={30}
                  width={30}
                />
              }
            />
            Al-Zaytoonah University
          </Typography>
          <Typography variant="button" color={"red"} sx={{ mb: 2 }}>
            CIS Computer information system | Dec 2014 - Dec 2019
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Bachelor's degree in Computer Information System.
              </li>
              <li className="list-group-item">I learned Java and C++</li>
              <li className="list-group-item">
                I learned HTML, CSS, JavaScrip
              </li>
              <li className="list-group-item">Systems Analysis</li>
            </ul>
          </Typography>
        </div>
      </div>
    </Container>
  );
}
