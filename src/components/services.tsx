import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
export function ServicesPage() {
  const servicesMe = [
    {
      logo: "https://cdn-icons-png.flaticon.com/512/954/954574.png",
      name: "Web Developer",
      text: "JavaScript , PHP",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/4261/4261939.png",
      name: "FrontEnd Developer",
      text: " CSS , React.js ,JavaScript , bootstrap",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/5432/5432506.png",
      name: "BackEnd Developer",
      text: "Nodejs , Express.js , MySql , MongoDB",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/3240/3240846.png",
      name: "Problem Solving",
      text: "Strong analytical, problem-solving and troubleshooting skills",
    },
    {
      logo: "https://as1.ftcdn.net/v2/jpg/03/85/55/38/1000_F_385553895_55ahFxPBVYq6Ptty16CS3pILL2alA1f5.jpg",
      name: "Autonomous learning",
      text: "I combine my passion for usability and user experience with technical knowledge",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/7991/7991055.png",
      name: "Software Development",
      text: "activities dedicated to the process of creating, designing, deploying and supporting software",
    },
  ];
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
        <Divider textAlign="left">Services</Divider>
      </Typography>
      <Typography variant="h5" sx={{ mb: 3, mt: 5, textAlign: "center" }}>
        What I Do
      </Typography>
     
      <div className="row">
        {servicesMe.map((e) => {
          return (
            <div className="col-md-4 pt-3 pb-3">
              <Card>
                <CardContent sx={{ padding: 0 }}>
                  <CardHeader
                    avatar={
                      <Avatar variant="square" alt="Remy Sharp" src={e.logo} />
                    }
                    title={e.name}
                  />
                </CardContent>
                <CardContent>
                  <Typography variant="body2">{e.text}</Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
