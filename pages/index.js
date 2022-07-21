// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first photo",
    image:
      "https://w0.peakpx.com/wallpaper/912/569/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg",
    address: "hydrabad",
    description: "Stylish star and style icon ",
  },
  {
    id: "m2",
    title: "second photo",
    image:
      "https://w0.peakpx.com/wallpaper/621/172/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg",
    address: "hydrabad",
    description: "Stylish star and style icon ",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
export async function getStaticProps(){
//   feacth data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate:10
  };
};

export default HomePage;
