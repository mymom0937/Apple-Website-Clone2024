import React from 'react'
import FirstThreeSection from "./FirstThreeSection.jsx";
import SectionFour from "./SectionFour.jsx";
import SectionFive from "./SectionFive.jsx";
import SectionSix from "./SectionSix.jsx";
import Alert from "./Alert.jsx";

function Mains() {
  return (
    <>
      <Alert />
      <FirstThreeSection
        wrapperName="first-hightlight-wrapper"
        title="iPad Pro"
        ipodCaption="iPad Pro available starting 3.25"
        magic="Magic Keyboard coming in May"
        New
        Order
      />
      <FirstThreeSection
        wrapperName="second-hightlight-wrapper"
        title="MacBook Air"
        description
        price
        New
        Buy
      />
      <FirstThreeSection
        wrapperName="third-hightlight-wrapper"
        titleTwo="iPhone 11 Pro"
        descriptionTwo
        priceTwo
        Buy
      />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}

export default Mains