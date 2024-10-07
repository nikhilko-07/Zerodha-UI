import React from "react";
import GOOGLESTORE from '../images/googlePlayBadge.svg';
import APPSTORE from '../images/appstoreBadge.svg';
const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appstore,
}) => {
  return <div className="container" style={{paddingTop:"5%"}}>
    <div className="row">
        <div className="col-6 p-3">
            <img src={imageURL} />
        </div>
        <div className="col-6 " style={{paddingLeft:"5%"}} >
            <h1 className="text-muted">{productName}</h1>
            <p>{productDescription}</p>
            <a href={tryDemo} style={{color:"#0D6EFD"}}>Try Demo</a>
            <a href={learnMore} style={{color:"#0D6EFD",marginLeft:"5%"}}>Learn More</a>
            <a href={googlePlay} style={{marginLeft:"10%"}}>
                <img src={GOOGLESTORE} />
            </a>
            <a href={appstore} style={{marginLeft:"5%"}}>
                <img src={APPSTORE} />
            </a>
        </div>
    </div>
  </div>;
};

export default LeftSection;
