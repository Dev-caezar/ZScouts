import "./scoutProfile.css";
import { HiPlusCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Rating } from "@mui/material";
import KoraPayment from "kora-checkout";

const ScoutProfile = () => {
  const [profilepic, setProfilePic] = useState();
  const [loading, setLoading] = useState(false)
  const [paymentLoading, setPaymentLoading] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = "https://zscouts.onrender.com";
  const user = useSelector(state => state.user.scoutDetails.data)
  const [authenticated, setAuthenticated] = useState(null);
  const [paymentError, setPaymentError] = useState(null);


  const UpgradeToPremiumpayment = () => {
    const paymentOptions = {
      key: "pk_test_VZb26Tf4s9GGHJuD9iUWdgiqEoCfQjhoHXG1nv4f",
      reference: `ref-${Date.now()}`,
      amount: 15000,
      customer: {
          name: user.fullname,
          email: user.email
      },
      onSuccess: () => {
          setPaymentSuccess(true)
          console.log('Payment successful');
      },
      onFailed: (err) => {
          console.error(err.message);
      }
  };

  const payment = new KoraPayment();
  payment.initialize(paymentOptions);
  };


  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${BASE_URL}/api/scouts/getscout/${user.id}`);
        setAuthenticated(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false)
      }
    };

    fetchUser();
  }, [user.id]);
  console.log(authenticated?.data)

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
          setLoading(false)
        } catch (error) {
          console.error("Error uploading image:", error);
        }
        finally{
          setLoading(false)
        }
      };

      uploadImage();
    }
  }, [profilepic, user.id]);

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

  const loadingIcon = <LoadingOutlined style={{ fontSize: 80, color: "#0C8F00" }} spin />

  const [value, setValue] = React.useState(0);

  if(loading){
    return(
      <div className="loader">
        <Flex>
          <Spin indicator={loadingIcon} />
        </Flex>
      </div>
    )
  }
  

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
            <button style={{cursor: "pointer"}} onClick={() => navigate("/scout_form")} className="scoutComplete-KYC-button">Complete KYC</button>
          </div>
        </div>
      )}


      <div className="scoutProfileImage-scoutText-wrappper">
        {authenticated?.data?.profileImage ? (
          <img
            src={authenticated?.data.profilePic}
            className="player-img"
          />
        ) : (
          <div className="player-img-placeholder">
            {authenticated?.data?.fullname?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="scoutText">
          <span className="scoutName">{authenticated?.data?.fullname}</span>
          <p className="ScoutTilte">Scout</p>
          <p className="scoutAge">{authenticated?.data?.scoutKyc?.age} Years</p>
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
                <article className="email-phone-addressArticle">
                  <p className="email-phone-address-text">{info.phone}</p>
                  <p className="email-phone-addressResult">{authenticated?.data?.scoutKyc?.phoneNumber}</p>
                </article>
                <article className="email-phone-addressArticle">
                  <p className="email-phone-address-text">{info.home}</p>
                  <p className="email-phone-addressResult">{authenticated?.data?.scoutKyc?.phoneNumber}</p>
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
                <article className="email-phone-addressArticle">
                  <p className="informations3-text">{info.club}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.clubName}</p>
                </article>
                <article className="email-phone-addressArticle">
                  <p className="informations3-text">{info.role}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.scoutingRole}</p>
                </article>
                <article className="email-phone-addressArticle">
                  <p className="informations3-text">{info.league}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.league}</p>
                </article>
                <article className="email-phone-addressArticle">
                  <p className="informations3-text">{info.position}</p>
                  <p className="informations3Result">{authenticated?.data?.scoutKyc?.preferredPosition}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
        {authenticated ? (
            <div className="player_contact_details">
              <div className="plan_top">
                <h4>You’re on the Free Plan</h4>
                <p>Unlock premium features and maximize your visibility to scouts. Upgrade now to optimize your account!</p>
              </div>
              <div className="plan_bottom">
                <button className='premium_cta' onClick={UpgradeToPremiumpayment} disabled={paymentLoading}>
                  {paymentLoading ? "Processing..." : "Upgrade to Premium"}
                </button>
                {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
              </div>
            </div>
          ) : null}


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
    </div>
  );
  
};

export default ScoutProfile;
