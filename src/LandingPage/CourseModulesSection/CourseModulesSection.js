import React, { useState } from "react";
import "./CourseModulesSection.css";
import Module from "../Module";
import { Link } from "react-router-dom";

const Accordion = ({ moduleTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const titleStyle = {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "700",
    color: isOpen ? "white" : "#1F203F", 
  };

  return (
    <div className={`customAccordion ${isOpen ? "customOpen" : ""}`}>
      <div className="customAccordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <span style={titleStyle}>
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
              <span>1 saat 10 dəq</span>
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
              <span>5 video</span>
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
          Sürücülər, sürücü olmaq istəyən şəxslər və yol hərəkətinin digər iştirakçıları, yol
hərəkəti haqqında əsas anlayışları- yol hərəkəti qaydaları, yol nişanları, nişanlanma
xətləri və s. kimi məlumatları bilməli, öyrənməli və tətbiq etməlidir. Kompleks şəkildə
geniş material toplusunu özündə cəmləşdirərək yol hərəkəti qaydalarını öyrənən və
sürücülük vəsiqəsini almağa hazırlaşan şəxslər üçün bu vacibdir.
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
              <span>1 saat 30 dəq</span>
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
              <span>5 video</span>
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
          Sürücülük vəsiqəsi - hər hansı şəxsin nəqliyyat vasitələrini idarə etmək
hüququnu təsdiq edən sənəddir. Vəsiqənin iki növü var: motosiklet, avtomobil,
tramvay və trolleybusları idarə etmək üçün; traktor və digər mexaniki nəqliyyat vasitələrini idarə
etmək üçün. Xarici dövlətlərin səlahiyyətli orqanları tərəfindən verilmiş və etibarlıq müddəti bitməmiş
sürücülük vəsiqələri ölkəmizdə etibarlıdır.
Bir qayda olaraq, hər hansı şəxsin nəql
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
              <span>1 saat 35 dəq</span>
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
              <span>5 video</span>
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
          Səki ilə, piyada zolağı ilə, yol çiyinləri ilə, bunlar olmadıqda isə velosipedçilərin hərəkətini çətinləşdirməmək şərti ilə velosiped yolu ilə hərəkət etməli və ya ayırıcı zolağı olan yollarda hərəkət hissəsinin xarici kənarı ilə getməlidir (iri əşyalar daşıyan və ya aparan piyadaların, habelə mühərriksiz əlil arabalarında gedən şəxslərin səki və ya yol qırağı ilə hərəkəti başqa piyadalar üçün maneə yaratdıqda, onlar yolun hərəkət hissəsinin kənarı ilə gedə bilərlər);
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
              <span>1 saat 40 dəq</span>
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
              <span>5 video</span>
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
          Nəqliyyat vasitəsinin onun üçün xüsusi ayrılmış müvafiq qaydada işarələnmiş yerdə durması
parklama adlanır. Ölkəmizin müxtəlif ərazilərində müşahidə kameraları dayanma və durma,
parklanma qaydalarını pozan sürücülərin qeydə alınması prosesini fasiləsiz rejimdə həyata
keçirir. Məqsəd nizam-intizamın yaradılması, rahat və təhlükəsiz hərəkətin, həmçinin ictimai
nəqliyyatın fasiləsiz hərəkətinin təmin olunmasıdır.
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
              <span>1 saat 15 dəq</span>
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
              <span>5 video</span>
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
          Bundan başqa şlaqbaumu özbaşına açmaq, qeyri-nəqliyyat vəziyyətində olan kənd təsərrüfatı,
yol, inşaat və s. nəqliyyat vastələrini dəmiryol keçidindən keçirmək, dəmiryol stansiyası rəisinin icazəsi
olmadan, sürəti saatda 8 kilometrdən aşağı olan nəqliyyat vasitələrinin, habelə traktora qoşulan yük
kirşəsinin hərəkəti qadağandır. Keçiddən hərəkət qadağan olunan hallarda sürücü stop-xəttin, uyğun
nişanın və ya işıqforun yanında, bunlar olmazsa, şlaqbauma azı 5 metr qalmış, şlaqbaum olmadıqda
isə birinci relsə azı 10 metr qalmış dayanmalıdır. 
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
