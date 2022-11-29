
import { Container } from "@mui/system";
import { Avatar, CardActionArea, CardContent, CardHeader, Divider, Card, TextField, DialogActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function ContactUSPage() {
    return <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
            <Divider textAlign="left">Contact Me</Divider>
        </Typography>
        <div className="row">
            <div className="col-md-4 pt-3 pb-3">
                <Card sx={{ mb: 2, mt: 2 }}>
                    <CardActionArea href={`mailto:${'osama.moh.salem@gmail.com'}?subject=${""}&body=${""}`}>
                        <CardContent sx={{ padding: 0 }}>
                            <CardHeader
                                avatar={<Avatar variant="square" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />}
                                title={"osama.moh.salem@gmail.com"}
                            />
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ mb: 2, mt: 2 }}>
                    <CardActionArea href="tel:0799895632">
                        <CardContent sx={{ padding: 0 }}>
                            <CardHeader
                                avatar={<Avatar variant="square" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/724/724664.png" />}
                                title={"(+962)799895632"}
                            />
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ mb: 2, mt: 2 }}>
                    <CardActionArea href="https://www.linkedin.com/in/osamasalemos/">
                        <CardContent sx={{ padding: 0 }}>
                            <CardHeader
                                avatar={<Avatar variant="square" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />}
                                title={"LinkedIn"}
                            />
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ mb: 2, mt: 2 }}>
                    <CardActionArea href="https://github.com/Osama-Same">
                        <CardContent sx={{ padding: 0 }}>
                            <CardHeader
                                avatar={<Avatar variant="square" alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" />}
                                title={"GitHub"}
                            />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className="col pt-3 pb-3">
                <TextField
                    margin="normal"
                    fullWidth
                    name="name"
                    label="Your Name"
                    type="email"
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="email"
                    label="Your Email"
                    type="email"
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="email"
                    label="Subject"
                    type="email"
                />
                <TextField
                    margin="normal"
                    fullWidth
                    name="message"
                    label="Message"
                    type="text"
                />
                   <DialogActions>
                   <Button variant="contained" sx={{textAlign:"center" }}>Send Message</Button>
                   </DialogActions>

            </div>
        </div>
    </Container>
}