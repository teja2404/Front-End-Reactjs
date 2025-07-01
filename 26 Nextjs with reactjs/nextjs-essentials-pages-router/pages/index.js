import MeetupList from "@/components/meetups/MeetupList";
import { Fragment, useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
// const DUMMY_MEETUP = [
//   {
//     id: "m1",
//     title: "A first meet up",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 12345, some city ",
//   },
//   {
//     id: "m2",
//     title: "A second meet up",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Some Address 12345, some city ",
//   },
// ];

export default function HomePage(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(props.meetups);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={loadedMeetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://tejaarun93:QtTKRRNShanMaiH6@cluster0.iazqtnq.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
