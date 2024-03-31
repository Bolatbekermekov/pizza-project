import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    class="pizza-block"
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="271" rx="10" ry="10" width="285" height="30" />
    <circle cx="140" cy="135" r="125" />
    <rect x="187" y="389" rx="0" ry="0" width="24" height="0" />
    <rect x="2" y="323" rx="10" ry="10" width="280" height="88" />
    <rect x="2" y="425" rx="10" ry="10" width="95" height="30" />
    <rect x="72" y="476" rx="0" ry="0" width="0" height="1" />
    <rect x="129" y="423" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
