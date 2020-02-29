import React from 'react';

import Section from "../components/Section";


const Music = () => {
    return (
        <Section id="music">
            <div className="row">
                <div className="col text-center pb-4">
                    <h1 className="title p-2">Dance with Us</h1>
                </div>
            </div>
            <div className="row">
                <div data-aos="slide-up" className="col text-center">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/5AqGt5VY0Gw5TnsWQtF5FG"
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media" />
                </div>
            </div>
        </Section>
    )
};

export default Music