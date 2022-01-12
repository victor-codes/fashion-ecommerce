import React from "react";

function Button({ primary, className }) {
  return (
    <>
      {primary ? (
        <button className={`cta_container ${className}`}>
          <div className="shop_btn"></div>
          <div className="shop">
            <span>shop now</span>
          </div>
        </button>
      ) : (
        <button className={`vid_btn ${className}`}>
          <div>
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="path"
                d="M84.0455 62.2308C79.9014 71.3336 72.7797 78.7529 63.8541 83.266C54.9284 87.779 44.7315 89.1165 34.944 87.058C25.1564 84.9994 16.3622 79.6677 10.0107 71.9415C3.65927 64.2153 0.129625 54.5558 0.00349864 44.5549C-0.122627 34.5539 3.16229 24.8084 9.31687 16.9245C15.4714 9.04065 24.1284 3.48884 33.861 1.18412C43.5935 -1.12061 53.8209 -0.0407159 62.8575 4.24582C71.8941 8.53236 79.2007 15.7697 83.573 24.7651L81.9901 25.5345C77.7926 16.8989 70.7783 9.95107 62.1032 5.83599C53.4281 1.72091 43.6098 0.684217 34.2665 2.89675C24.9233 5.10929 16.6126 10.439 10.7042 18.0076C4.7958 25.5761 1.64228 34.9318 1.76336 44.5327C1.88444 54.1336 5.2729 63.4067 11.3703 70.8239C17.4677 78.241 25.9101 83.3594 35.3062 85.3356C44.7023 87.3118 54.4913 86.0279 63.0599 81.6953C71.6285 77.3628 78.4653 70.2402 82.4436 61.5015L84.0455 62.2308Z"
                fill="white"
              />
              <path
                className="path1"
                d="M56 44L42.5 51.7942V36.2058L56 44Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="over_hidden">
            <span>watch brand video</span>
          </div>
        </button>
      )}
    </>
  );
}

export default Button;