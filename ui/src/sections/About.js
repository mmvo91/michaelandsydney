import React from 'react';

import Section from "../components/Section";

import michael from "../static/michael.jpg"
import sydney from "../static/sydney.jpg"

const About = () => {
    return (
        <Section id="about">
            <div className="row">
                <div className="col text-center pb-4">
                    <h1 className="title p-2">About The Couple</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={michael} data-aos="fade-right" className="mx-auto d-block img-thumbnail rounded-circle" />
                    <div className="my-2 text-justify">
                        Michael known as ``Percy`` in some circles is a quiet man, but so far has been a loving and wonderful boyfriend, fiancé, and soon-to-be husband. He's introspective and thoughtful when he speaks but often doesn't speak. When alone, he's humorous and the exact opposite of his public persona.
                        </div>
                </div>
                <div className="col-md-6">
                    <img src={sydney} data-aos="fade-left" className="mx-auto d-block img-thumbnail rounded-circle" />
                    <div className="my-2 text-justify">
                        She's short and stubborn, but everyone loves her, especially Michael. He's often having to fight off BBG for her attention. But at the end of the day, she always ends up in his arms. She's the perfect balance between motherly and wifely to balance out her man-child man. He appreciates her love and attention and when necessary her scolding.
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About