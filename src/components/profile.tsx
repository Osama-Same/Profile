import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
export function ProfilePage() {
    return <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
            <Divider textAlign="left">About Me</Divider>
        </Typography>

        <Typography variant="body1" >
            I am a full stack developer, analytical and hardworking who enjoys solving
            problems and coming up with interesting insights about what I do. Being
            a fast-learner is one of my core skills that I'm proud of.
        </Typography>
        <Typography variant="body1" sx={{mt: 5 , mb: 5}}>
            I combine my passion for usability and user experience with
            technical knowledge to create great digital experiences. It
            includes two programming languages and tools such as HTML,
            CSS, ReactJs, jQuery, Bootstrap, Data Structures and Algorithms,
            MongoDB, MySQL, JavaScript, NodeJs, ExpressJs, and Github,
            database.
        </Typography>

    </Container>
}