'use client'
import Layout from '@/components/layout/Layout';
import NewMeetupForm from './../../components/meetups/NewMeetupForm';

export default function NewMeetupPage(){
  function addMeetupHandler(enteredMeetupData:any){ 
    console.log(enteredMeetupData);
  }
    return (
      <>
      {/* <Layout> */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      {/* </Layout> */}
      </>
    )
  }