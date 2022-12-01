import { Container } from "@mui/system";
import {
  Avatar,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Card,

} from "@mui/material";
import Typography from "@mui/material/Typography";

export function ContactUSPage() {

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
        <Divider textAlign="left">Contact Me</Divider>
      </Typography>
      <Container maxWidth="sm">
        <Card sx={{ mb: 2, mt: 2 }}>
          <CardActionArea
            href={`mailto:${"osama.moh.salem@gmail.com"}?subject=${""}&body=${""}`}
          >
            <CardContent sx={{ padding: 0 }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  />
                }
                title={"osama.moh.salem@gmail.com"}
              />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ mb: 2, mt: 2 }}>
          <CardActionArea href="tel:0799895632">
            <CardContent sx={{ padding: 0 }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  />
                }
                title={"(+962)799895632"}
              />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ mb: 2, mt: 2 }}>
          <CardActionArea href="https://www.linkedin.com/in/osamasalemos/">
            <CardContent sx={{ padding: 0 }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                  />
                }
                title={"LinkedIn"}
              />
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ mb: 2, mt: 2 }}>
          <CardActionArea href="https://github.com/Osama-Same">
            <CardContent sx={{ padding: 0 }}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                  />
                }
                title={"GitHub"}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Container>
  );
}
