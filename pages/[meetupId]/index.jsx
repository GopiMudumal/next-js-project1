import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://w0.peakpx.com/wallpaper/621/172/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg"
      title="A first meet up"
      address="Some city some place"
      description="new to this"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // feacth data for single
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://w0.peakpx.com/wallpaper/621/172/HD-wallpaper-allu-arjun-allu-arjun-thumbnail.jpg",
        id: meetupId,
        title: "A first meet up",
        address: "Some city some place",
        description: "new to this but this is brand",
      },
    },
  };
}

export default MeetupDetails;
