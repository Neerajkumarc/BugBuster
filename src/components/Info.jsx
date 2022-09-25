import React from "react";
import section from "../assets/section.jpg";


const Info = () => {
  return (
    <div className="w-full flex flex-col justify-between p-8 md:mt-10">
      <div className="flex flex-col-reverse md:flex-row max-w[1240px] gap-10">
        <div>
          <img
            className=" rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] h-[80%] w-auto md:h-[70vh] md:w-[70vw]"
            src={section}
            alt="section"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-7xl font-bold">Fast And <span className="text-gradient">Robust</span></h1>
          <p className="mt-8 w-[90%] ">
            BugBuster Scans the target in couple of minutes to scan the basic
            vulnerabilities. It is also capable to detect top 10 OWASP
            vulnerabilities.
            <ol className="list-disc text-2xl px-8">
              <li className="mt-8">Unlimited Scans</li>
              <li className="mt-8">Accurate Results</li>
              <li className="mt-8">Fast and Secure</li>
              <li className="mt-8">Detailed Report</li>
              <li className="mt-8">Faster Scans</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
