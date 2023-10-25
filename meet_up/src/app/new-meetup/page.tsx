'use client'
import NewMeetupForm from './../../components/meetups/NewMeetupForm';

export default function NewMeetupPage(){
  function addMeetupHandler(enteredMeetupData:string){
    console.log(enteredMeetupData);
  }
    return (
      <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </>
    )
  }