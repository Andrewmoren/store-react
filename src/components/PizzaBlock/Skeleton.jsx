import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="137" r="137" />
    <rect x="0" y="297" rx="10" ry="10" width="280" height="23" />
    <rect x="116" y="312" rx="0" ry="0" width="24" height="2" />
    <rect x="0" y="500" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="343" rx="5" ry="5" width="280" height="88" />
    <rect x="7" y="459" rx="0" ry="0" width="11" height="1" />
    <rect x="0" y="454" rx="10" ry="10" width="95" height="30" />
    <rect x="124" y="447" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
