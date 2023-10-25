import { Fragment } from "react";
import MeetupDetail from './../../components/meetups/MeetupDetail';
function MeetupDetails() {
    return (
        <Fragment>
            <MeetupDetail image='https://imgmedia.lbb.in/media/2021/01/5ff8340dc1f2d04cd480de45_1610101773142.jpg' title="My first tour" address="White Field, Bangalore, Karnataka" description='My first meet' />
        </Fragment>
    );
}

export default MeetupDetails;