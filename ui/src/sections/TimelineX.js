import React from 'react';
import moment from "moment"
import Timeline from 'react-dual-timeline';
import { StyleRoot } from 'radium'
import Section from "../components/Section";


const moments = [
    {
        time: "12/21/1991",
        text: "Michael is born.",
    },
    {
        time: "11/17/1994",
        text: "Sydney is born.",
    },
    {
        time: "03/20/2009",
        text: "Sydney and Michael start dating.",
    },
    {
        time: "11/14/2015",
        text: "Sydney and Michael get engaged.",
    },
    {
        time: "08/04/2018",
        text: "Sydney and Michael get married.",
    },
    {
        time: moment().format('MM/DD/YYYY'),
        text: "Now",
    },
    {
        time: "∞",
        text: "Sydney and Michael living happily ever after.",
    },
];

const TimelineX = () => {
    return (
        <Section id="timeline">
            <div className="row">
                <div className="col text-center pb-4">
                    <h1 className="title p-2">Timeline</h1>
                </div>
            </div>
            <StyleRoot>
                <Timeline 
                    color="white" 
                    lineColor="grey"
                    activeColor="#1f0036"
                >
                {
                        moments.map(moment => (
                            <div>
                                <time className="h3">{moment.time}</time>
                                <br/>
                                {moment.text}
                            </div>
                        ))
                    }
                </Timeline>
            </StyleRoot>
        </Section>
    )
};

export default TimelineX