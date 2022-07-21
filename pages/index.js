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
// this code execute only during build process and not on the server and sepecially not on the clients of visitors
export const getStaticProps = async () => {
  //feacth data from api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;
