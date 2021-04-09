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

export default function Home(history) {
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
      {/* <TestOne {...homeObjOne} />{" "} */}
    </div>
  );
}
