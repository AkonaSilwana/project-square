import React, { useState, useEffect } from "react";
import axios from "axios";

interface CaseStudy {
  imageUrl: string;
  description: string;
  title: string;
}
const baseURL =
  "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/";

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setCaseStudies(response.data as CaseStudy[]);
      })

      .catch((err) => {
        console.error("Error fetching case studies:", err);
      });
  }, []);

  return (
    <div className="case-study">
      <h2 className="sub-title">Case studies</h2>
      <div className="case-study-content">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="case-study-card">
            <img src={caseStudy.imageUrl} alt={caseStudy.title} />
            <div className="case-study-description">
              <h4>{caseStudy.title}</h4>
              <p>{caseStudy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
