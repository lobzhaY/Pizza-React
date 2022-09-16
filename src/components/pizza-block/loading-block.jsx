import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="135" cy="140" r="118" /> 
        <rect x="276" y="299" rx="0" ry="0" width="1" height="14" /> 
        <rect x="1" y="274" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="309" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="408" rx="6" ry="6" width="72" height="35" /> 
        <rect x="135" y="404" rx="20" ry="20" width="140" height="43" />
      </ContentLoader>
      )
}

export default LoadingBlock;