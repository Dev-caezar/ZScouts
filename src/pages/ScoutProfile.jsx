import "./scoutProfile.css"
import { HiPlusCircle } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { BiSolidFileImage } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const ScoutProfile = () => {
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.user.user);

  const [user, setUser] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      uploadImage(file);
    }
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
          <button onClick={() => navigate(`/scout_form/${user?.data?.id}`)} className="scoutComplete-KYC-button">Complete KYC</button>
        </div>
      </div>

      <div className="scoutProfileImage-scoutText-wrappper">
      <div className="scoutProfileImage">
        <img
          src={imagePreview || user?.data?.profileImage || "/placeholder.png"}
          alt="Scout Profile"
          className="profileImage"
        />
        
        <label htmlFor="profileImageUpload" className="uploadIcon">
          <HiPlusCircle className="HiPlusCircle" size={30} style={{ color: "white", cursor: "pointer" }} />
        </label>

        <input
          type="file"
          id="profileImageUpload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>


        <div className="scoutText">
          <span className="scoutName">{userdata?.data?.fullname}</span>
          <p className="ScoutTilte">{userdata?.data?.role}</p>
          <p className="scoutAge">0 years</p>
          <div className="starRating">
            <CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} /><CiStar size={20} />
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
