import React, { useState } from "react";
import "./CourseModulesSection.css";
import Module from "../Module";
import { Link } from "react-router-dom";

const Accordion = ({ moduleTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`customAccordion ${isOpen ? "customOpen" : ""}`}>
      <div className="customAccordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "700" }}
        >
          {moduleTitle}
        </span>

        {isOpen ? (
          <img
            src={process.env.PUBLIC_URL + "/yuxari.svg"}
            alt="Yukarı"
          />
        ) : (
          <img src={process.env.PUBLIC_URL + "/asagi.svg"} alt="Aşağı" />
        )}
      </div>
      {isOpen && <div className="customAccordionContent">{children}</div>}
    </div>
  );
};

const CourseModulesSection = () => {
  return (
    <div id="what" className="customCourseModulesSection">
      <span className="spanFirst">Nələr öyrənəcəksiniz?</span>
      <div style={{ marginTop: "40px" }}>
        <Accordion moduleTitle=" Əsas Sürücülük Anlayışları">
          <div className="video-counts">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.PUBLIC_URL}/clock.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>1 saat 20 dəq</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/video.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>4 video</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/test.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>24 test</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique...
          </p>
        </Accordion>

        <Accordion moduleTitle="Sürücülük vəsiqəsi">
          <div className="video-counts">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.PUBLIC_URL}/clock.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>1 saat 20 dəq</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/video.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>4 video</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/test.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>24 test</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique...
          </p>
        </Accordion>
        <Accordion moduleTitle="Piyadaların vəzifələri">
          <div className="video-counts">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.PUBLIC_URL}/clock.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>1 saat 20 dəq</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/video.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>4 video</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/test.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>24 test</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique...
          </p>
        </Accordion>
        <Accordion moduleTitle="Dayanma və durma ">
          <div className="video-counts">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.PUBLIC_URL}/clock.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>1 saat 20 dəq</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/video.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>4 video</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/test.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>24 test</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique...
          </p>
        </Accordion>
        <Accordion moduleTitle="Dəmiryolu Keçidləri, Piyada Keçidləri və Sürücülük Təlimləri">
          <div className="video-counts">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.PUBLIC_URL}/clock.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>1 saat 20 dəq</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/video.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>4 video</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/test.svg`}
                alt="Clock Icon"
                style={{ marginRight: "8px" }}
              />
              <span>24 test</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique...
          </p>
        </Accordion>
      </div>
      <div className="customRegisterButtonDiv">
        <Link style={{ textDecoration: "none" }} to="/RegistrationForm">
          <button className="customRegisterButton">
            Daha çoxu üçün qeydiyyatdan keçin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseModulesSection;
