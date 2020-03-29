import React from 'react';

import Section from "../components/Section";


import adri from "../static/adri.jpg"
import norelle from "../static/norelle.jpg"
import jennifer from "../static/jennifer.jpg"
import aysia from "../static/aysia.jpg"
import christianne from "../static/christianne.jpeg"
import peter from "../static/peter.jpg"
import trustin from "../static/trustin.jpg"
import kevin from "../static/kevin.png"
import jeff from "../static/jeff.jpeg"
import kevinp from "../static/kevinp.jpg"

const bridal = [
    {
        image: adri,
        name: "Adriana DeCastro",
        position: "Bridesmaid"
    },
    {
        image: jennifer,
        name: "Jennifer Nguyen",
        position: "Bridesmaid"
    },
    {
        image: aysia,
        name: "Aysia Ferrer",
        position: "Bridesmaid"
    },
    {
        image: christianne,
        name: "Christianne Laroya",
        position: "Bridesmaid"
    },
    {
        image: norelle,
        name: "Anne Norelle Quila",
        position: "Maid of Honor"
    },
]

const groomsmen = [
    {
        image: peter,
        name: "Peter Luu",
        position: "Best Man"
    },
    {
        image: trustin,
        name: "Trustin Vo",
        position: "Groomsman"
    },
    {
        image: kevin,
        name: "Kevin Vo",
        position: "Groomsman"
    },
    {
        image: jeff,
        name: "Jeff Hua",
        position: "Groomsman"
    },
    {
        image: kevinp,
        name: "Kevin Pham",
        position: "Groomsman"
    },
]

const Person = props => {
    return (
        <div data-aos="zoom-in" className="col-sm text-center py-4">
            <img src={props.image} className="img-fluid img-thumbnail rounded-circle" alt={props.name} />
            <div className="font-weight-bold pt-2">{props.name}</div>
            <div className="font-italic">{props.position}</div>
        </div>
    )
}

const Party = props => {
    return (
        <Section id="wedding" className="">
            <div className="row">
                <div className="col text-center pb-4">
                    <h1 className="title p-2">Wedding Party</h1>
                </div>
            </div>
            <div className="row">
                {
                    bridal.map(
                        person => (
                            <Person
                                image={person.image}
                                name={person.name}
                                position={person.position}
                            />
                        )
                    )
                }
            </div>
            <div className="row">
                {
                    groomsmen.map(
                        person => (
                            <Person
                                image={person.image}
                                name={person.name}
                                position={person.position}
                        />
                        )
                    )
                }
            </div>
        </Section>
    )
}

export default Party;