import React from "react";

const Resume = () => {
  return (
    <div className="pt-20 h-screen">
      <a href="study/sample.pdf">download</a>
      <iframe
        src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&scrollbar=0"
        frameBorder="0"
        scrolling="auto"
        className="h-full w-full"
      ></iframe>
    </div>
  );
};

export default Resume;
