
import React from "react"
import Card from "../../Componants/Card/Card"
export default function () {

    const Projects = [
        {
            Title: "FizzBuzz",
            Link: "https://github.com/ieUlysses/FizzBuzz",
            Disc: "The classic, react Style",
            KeyOne: "React",
            KeyTwo: "Array",
            KeyThree: "JavaScript",
            KeyFour: "Bootstrap",



        }, {
            Title: "Countries Revisited",
            Link: "https://github.com/ieUlysses/Rest-Countries-revisited",
            Disc: "Country Database, searchable",
            KeyOne: "RestApi",
            KeyTwo: "Axios",
            KeyThree: "JavaScript",
            KeyFour: "MUI5",



        },
        , {
            Title: "KidzSpaß",
            Link: "https://github.com/AldoCasareto/kidsShare",
            Disc: "Group Project 2021 DciBerlin",
            KeyOne: "React",
            KeyTwo: "JavaScript",
            KeyThree: "Bootstrap",
            KeyFour: "FullStack",



        },
        , {
            Title: "This Project",
            Link: "https://github.com/ieUlysses/FizzBuzz",
            Disc: "Source code from this project",
            KeyOne: "React",
            KeyTwo: "JavaScript",
            KeyThree: "JS",
            KeyFour: "FullStack",


        }

    ]



    return (
        <>
            {
                Projects.map((props) => <Card
                    Title={props.Title}
                    Disc={props.Disc}
                    Link={props.Link}
                    KeyOne={props.KeyOne}
                    KeyTwo={props.KeyTwo}
                    KeyThree={props.KeyThree}
                    KeyFour={props.KeyFour}
                    key={Math.random() * 8}
                />)
            }
        </>
    )
}