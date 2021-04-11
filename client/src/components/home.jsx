import React from "react";
import Tests from "./common/tests";
import TestOneSegment from "./TestOneSegment";
import TestTwoSegment from "./TestTwoSegment";
import TestOne from "./TestOne";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
} from "./Data";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Home(history) {
  const classes = useStyles();
  return (
    <div>
      {" "}
      {/* <Tests />{" "} */}
      <TestOneSegment history={history} {...homeObjOne} />
      <TestTwoSegment history={history} {...homeObjTwo} />
      <TestOneSegment history={history} {...homeObjThree} />
      <TestTwoSegment history={history} {...homeObjFour} />
      <TestOneSegment history={history} {...homeObjFive} />
      <TestTwoSegment history={history} {...homeObjSix} />
      <TestOneSegment history={history} {...homeObjSeven} />
      <Fab
        onClick={() => window.scrollTo(0, 0)}
        color="#6CA6CD"
        //aria-label="add"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
          color: "#6CA6CD",
        }}
      >
        <NavigationIcon />
      </Fab>
      {/* <TestOne {...homeObjOne} />{" "} */}
    </div>
  );
}
