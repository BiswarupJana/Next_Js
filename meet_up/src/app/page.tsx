import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title:'A first meet up',
    image: 'https://imgmedia.lbb.in/media/2021/01/5ff8340dc1f2d04cd480de45_1610101773142.jpg',
    description: 'This is the first meet up'
  },
  {
    id: 'm2',
    title:'A second meet up',
    image: 'https://imgmedia.lbb.in/media/2021/01/5ff8340dc1f2d04cd480de45_1610101773142.jpg',
    description: 'This is the sedone meet up'
  },
  {
    id: 'm3',
    title:'A third meet up',
    image: 'https://imgmedia.lbb.in/media/2021/01/5ff8340dc1f2d04cd480de45_1610101773142.jpg',
    description: 'This is the third meet up'
  },
  {
    id: 'm4',
    title:'A fourth meet up',
    image: 'https://imgmedia.lbb.in/media/2021/01/5ff8340dc1f2d04cd480de45_1610101773142.jpg',
    description: 'This is the fourth meet up'
  },
];

export default function Page() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </>
  );
}
