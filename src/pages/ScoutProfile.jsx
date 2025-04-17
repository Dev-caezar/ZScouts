import "./scoutProfile.css"
import { HiPlusCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { BiSolidFileImage } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const ScoutProfile = () => {
  const navigate = useNavigate();
  const BASE_URL = "https://zscouts.onrender.com";
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/scouts/getscout/${id}`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

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
    <div className='scoutProfile-wrapper'>

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
          <button onClick={() => navigate("/scout_form")} className="scoutComplete-KYC-button">Complete KYC</button>
        </div>
      </div>

      <div className="scoutProfileImage-scoutText-wrappper">
        <div className="scoutProfileImage">
          <HiPlusCircle className="HiPlusCircle" size={30} style={{ color: "white" }} />
        </div>
        <div className="scoutText">
          <span className="scoutName">Ozofor Chioma</span>
          <p className="ScoutTilte">Scout</p>
          <p className="scoutAge">0 years</p>
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
                  <p className="PersonalInformationText">-</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.age}</p>
                  <p className="PersonalInformationText">-</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.nation}</p>
                  <p className="PersonalInformationText">-</p>
                </article>
                <article className="name-age-nationality-genderArticle">
                  <p className="name-age-nationality-gender-text">{info.gender}</p>
                  <p className="PersonalInformationText">-</p>
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
                  <p className="email-phone-addressResult">-</p>
                </article>
                <article>
                  <p className="email-phone-address-text">{info.phone}</p>
                  <p className="email-phone-addressResult">-</p>
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
                  <p className="informations3Result">-</p>
                </article>
                <article>
                  <p className="informations3-text">{info.role}</p>
                  <p className="informations3Result">-</p>
                </article>
                <article>
                  <p className="informations3-text">{info.league}</p>
                  <p className="informations3Result">-</p>
                </article>
                <article>
                  <p className="informations3-text">{info.position}</p>
                  <p className="informations3Result">-</p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="scoutPersonalCredentials">
          <span className="scoutInformationsTitles">Professional Credentials</span>
          <div className="credentials-CV-div">
            <section className="scoutCertificate">
              <BiSolidFileImage size={80} />
              <p className="scoutCertificate-text">Scout Certificate</p>
            </section>
            <FiDownload size={30} />
          </div>
        </div>

      </div>

      <div className="scout-privacy-reserved">
        <p className="scoutReserved">2025 Zscout | All rights reserved</p>
        <p className="scoutReserved">Privacy Terms</p>
      </div>

    </div>
  )
}

export default ScoutProfile;
