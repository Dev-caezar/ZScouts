import "./scoutProfile.css";
import { HiPlusCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ScoutProfile = () => {
  const [profilepic, setProfilePic] = useState();
  const navigate = useNavigate();
  const BASE_URL = "https://zscouts.onrender.com";
  const { id } = useParams();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/scouts/getscout/${id}`);
        setAuthenticated(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    if (profilepic && profilepic.file) {
      const uploadImage = async () => {
        const formData = new FormData();
        formData.append("profilepic", profilepic.file); 

        try {
          const response = await axios.post(`${BASE_URL}/api/v1/profilepic/${id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Upload success:", response.data);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

      uploadImage();
    }
  }, [profilepic, id]);

  const getImageUrl = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setProfilePic({ file, url }); 
  };

  const scoutInformation = [
    { id: 1, club: "Organisation/Club Name", role: "Scouting Role", league: "Leagues/Region Covered", position: "Preferred Player Positions" }
  ];

  const personalInformation = [
    { id: 1, name: "Full Name", age: "Age", nation: "Nationality", gender: "Gender" }
  ];

  const contactInformation = [
    { id: 1, email: "Email Address", phone: "Phone Number", home: "Home Address" }
  ];

  return (
    <div className="scoutProfile-wrapper">
      {authenticated?.data?.profileCompletion ? (
        <div></div>
      ) : (
        <div className="scoutHeader">
          <div className="scoutHeader1">
            <div className="scoutPercentage">0%</div>
            <div className="scoutVerifyYourIdentity-wrapper">
              <span className="scoutVerifyText">Verify your identity to start scouting.</span>
              <p className="scoutCompleteKYCTecxt">
                Complete your KYC to connect with verified talent. It only takes a <br /> few minutes.
              </p>
            </div>
          </div>
          <div className="scoutHeader2">
            <button onClick={() => navigate(`/scout_form/${id}`)} className="scoutComplete-KYC-button">Complete KYC</button>
          </div>
        </div>
      )}


      <div className="scoutProfileImage-scoutText-wrappper">
        <div className="scoutProfileImage">
          <img src={profilepic?.url || authenticated?.data?.profilepic} alt="" />
         <label htmlFor="l">
         <HiPlusCircle className="HiPlusCircle"  size={30} style={{ color: "white" }} />
         <input type="file" id="l" onChange={getImageUrl} hidden />
         </label>
        </div>
        <div className="scoutText">
          <span className="scoutName">{authenticated?.data?.fullname}</span>
          <p className="ScoutTilte">Scout</p>
          <p className="scoutAge">{authenticated?.data?.scoutKyc?.age} Years</p>
          <div className="starRating">
            <CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} />
          </div>
        </div>
      </div>

      <div className="scoutConfirmationSection">
        <div className="scoutPersonalInformation">
          <span className="scoutInformationsTitles">Personal information</span>
          <div className="scoutPersonalInformation-wrap">
            {personalInformation.map(info => (
              <div key={info.id} className="name-age-nationality-gender">
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.name}</p>
                  <p className="PersonalInformationText">{authenticated?.data?.fullname}</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.age}</p>
                  <p className="PersonalInformationText">{authenticated?.data?.scoutKyc?.age}</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.nation}</p>
                  <p className="PersonalInformationText">{authenticated?.data?.scoutKyc?.nationality}</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.gender}</p>
                  <p className="PersonalInformationText">{authenticated?.data?.scoutKyc?.gender}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="scoutContactInformation">
          <span className="scoutInformationsTitles">Contact information</span>
          <div className="contactInformation-wrap">
            {contactInformation.map(info => (
              <div key={info.id} className="email-phone-address">
                <article className="email-phone-addressArticle">
                  <p className="email-phone-address-text">{info.email}</p>
                  <p className="email-phone-addressResult">{authenticated?.data?.email}</p>
                </article>
                <article>
                  <p className="email-phone-address-text">{info.phone}</p>
                  <p className="email-phone-addressResult">{authenticated?.data?.scoutKyc?.phoneNumber}</p>
                </article>
                <article>
                  <p className="email-phone-address-text">{info.home}</p>
                  <p className="email-phone-addressResult">-</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="scoutInformations">
          <span className="scoutInformationsTitles">Scouting information</span>
          <div className="scoutInformations-wrap">
            {scoutInformation.map(info => (
              <div key={info.id} className="informations3">
                <article className="informations3Article">
                  <p className="informations3-text">{info.club}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.clubName}</p>
                </article>
                <article>
                  <p className="informations3-text">{info.role}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.scoutingRole}</p>
                </article>
                <article>
                  <p className="informations3-text">{info.league}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.league}</p>
                </article>
                <article>
                  <p className="informations3-text">{info.position}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.prefferedPosition}</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="scoutPersonalCredentials">
          <span className="scoutInformationsTitles">Professional Credentials</span>
          <div className="credentials-CV-div">
            <section className="scoutCertificate">
              {authenticated?.data?.scoutKyc?.verificationDocument ? (
                <div className="scoutCertificateImage">
                  <img src={authenticated.data.scoutKyc.verificationDocument} alt="Verification Document" />
                </div>
              ) : (
                <div className="noCertificate">No certificates available</div>
              )}
            </section>
          </div>
        </div>
      </div>

      <div className="scout-privacy-reserved">
        <p className="scoutReserved">2025 Zscout | All rights reserved</p>
        <p className="scoutReserved">Privacy Terms</p>
      </div>
    </div>
  );
};

export default ScoutProfile;
