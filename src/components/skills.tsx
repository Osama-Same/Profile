import { Container } from "@mui/system";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
export function SkillsPage() {
    const arrSkills = [
        {
            id: 1,
            name: "Jave Script",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
            id: 2,
            name: "Type Script",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        },
        {
            id: 3,
            name: "React.js",
            icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        },
        {
            id: 4,
            name: "Node.js",
            icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png"
        },
        {
            id: 5,
            name: "Express.js",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAs25wzN_Wr7gO8Oto31vmpo2ojjjfHNBPcCWvVPjtDH48Db0u9poF5S5RzPFwn3Rjk8I&usqp=CAU"
        },
        {
            id: 6,
            name: "Css3",
            icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
        },
        {
            id: 7,
            name: "bootstrap",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
        },
        {
            id: 8,
            name: "Html5",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
        },
        {
            id: 9,
            name: "MySql",
            icon: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"
        },
        {
            id: 10,
            name: "MongoDB",
            icon: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        },
        {
            id: 11,
            name: "jQuery",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ71eDRzgSrT3gSAzHOafSPoPHU-2QzqA6Ew&usqp=CAU"
        },
        {
            id: 12,
            name: "GitHub",
            icon: "https://cdn-icons-png.flaticon.com/512/25/25657.png"
        },
        {
            id: 13,
            name: "Ajax",
            icon: "https://www.w3schools.com/whatis/img_ajax.jpg"
        },
        {
            id: 14,
            name: "PHP",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
        },
        {
            id: 15,
            name: "APls",
            icon: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png"
        },
        {
            id: 16,
            name: "Npm",
            icon: "https://as2.ftcdn.net/v2/jpg/00/90/67/37/1000_F_90673721_nTq4hQ0UG1RxQ1niYwMnhzp05fsdkZyN.jpg"
        },
        {
            id: 17,
            name: "Material Ui",
            icon: "https://mui.com/static/logo.png"
        },
        {
            id: 17,
            name: "C#",
            icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png"
        },
        {
            id: 18,
            name: "Algorithms",
            icon: "https://cdn-icons-png.flaticon.com/512/2961/2961130.png"
        },
        {
            id: 19,
            name: "DataStructures",
            icon: "https://cdn-icons-png.flaticon.com/512/2857/2857406.png"
        },
     
    ]
    return <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 5, mt: 10, color: "orange" }}>
            <Divider textAlign="left">Skills</Divider>
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 5 }}>Take a look at some of the technologies I know.</Typography>
        <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3">
            {arrSkills.map((e) => {
                return <div className="col-4 pt-3 pb-3" key={2}>
                    <Button color="success" startIcon={<img src={e.icon} height={30} width={30} alt={""}/>}>
                        {e.name}
                    </Button>
                </div>
            })}
        </div>
    </Container>
}