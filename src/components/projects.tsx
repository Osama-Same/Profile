import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
export function ProjectsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
        <Divider textAlign="left">Project</Divider>
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        My Work
      </Typography>
    </Container>
  );
}
