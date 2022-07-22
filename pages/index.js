// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "first photo",
//     image:
//       "https://w0.peakpx.com/wallpaper/912/569/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg",
//     address: "hydrabad",
//     description: "Stylish star and style icon ",
//   },
//   {
//     id: "m2",
//     title: "second photo",
//     image:
//       "https://w0.peakpx.com/wallpaper/621/172/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg",
//     address: "hydrabad",
//     description: "Stylish star and style icon ",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React+nextjs meetups </title>
        <meta
          name="description"
          content="Browse a huge list of highly activity React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// only code runs in serverside
// export const getServerProps = async (context) =>{
//     const res = context.res;
//     const req = context.req;
//feach data from api
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
// }

// this code execute only during build process and not on the server and sepecially not on the clients of visitors
export async function getStaticProps() {
  //only runs a build time
  //   feacth data from api
  const client = await MongoClient.connect(`mongodb+srv://gopimudumal:${process.env.REACT_APP_PASSWORD}@cluster0.clcjtfi.mongodb.net/meetups?retryWrites=true&w=majority`);
  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
