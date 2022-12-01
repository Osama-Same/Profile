import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Button, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export function ProjectsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
        <Divider textAlign="left">Project</Divider>
      </Typography>
      <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
        My Work
      </Typography>
      <div className="row pt-3 pb-3">
        <div className="col-md-6 pt-3 pb-3">
          <Typography variant="h5">
            Project :<span style={{ color: "red" }}> Shopping Online </span>
          </Typography>
          <Typography variant="body2" sx={{ mt: 4, mb: 4 }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Technologies ( HTML, CSS, React.js, Node.js, MySQL )
              </li>
              <li className="list-group-item">
                Made to make shopping easy and from home
              </li>
              <li className="list-group-item">
                Has 2 types of users (Admin, Customer)
              </li>
            </ul>
          </Typography>
          <Typography>
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<GitHubIcon />}
                color={"inherit"}
                href="https://github.com/Osama-Same/Shopping-Online"
                variant="contained"
              >
                Github
              </Button>
              <Button
                  color={"inherit"}
                startIcon={<ShoppingCartIcon />}
                variant="contained"
                href="https://shopping-online-d36fb3.netlify.app/"
              >
                Go to WebSite
              </Button>
            </Stack>
          </Typography>
        </div>
        <div className="col">
          <img
            src="https://res.cloudinary.com/marki/image/upload/v1669924386/Screenshot_2022-12-01_224937_a6wdjq.png"
            height={300}
            width={450}
            alt={""}
          />
        </div>
      </div>
    </Container>
  );
}
