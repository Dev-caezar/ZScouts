import "./scoutformregister.css"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setPlayerKyc } from "../global/Player"

const ScoutFormRegister = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.scoutDetails.data.id)
  const [scoutForm, setScoutform] = useState({
    nationality: "",
    phoneNumber: "",
    clubName: "",
    scoutingRole: "",
    league: "",
    preferredPosition: "",
    age: "",
    socialMediaProfile: "",
    verificationDocument: null
  })

  const navigate = useNavigate()
  const BASE_URL = "https://zscouts.onrender.com"

  const handleScoutFile = (e) => {
    const selectedFile = e.target.files[0]
    setScoutform({ ...scoutForm, verificationDocument: selectedFile })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("nationality", scoutForm.nationality)
      formData.append("phoneNumber", scoutForm.phoneNumber)
      formData.append("clubName", scoutForm.clubName)
      formData.append("scoutingRole", scoutForm.scoutingRole)
      formData.append("league", scoutForm.league)
      formData.append("preferredPosition", scoutForm.preferredPosition)
      formData.append("age", scoutForm.age)
      formData.append("socialMediaProfile", scoutForm.socialMediaProfile)
      formData.append("verificationDocument", scoutForm.verificationDocument)

      const response = await axios.post(`${BASE_URL}/api/v1/scoutkyc/${user}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      dispatch(setPlayerKyc(response.data))
      toast.success("Form submitted successfully!")
      console.log("Form data sent:", response.data)
      navigate(-1)
    } catch (error) {
      console.error("Error submitting form", error)
      toast.error("Failed to submit form. Try again.")
    }
  }

  return (
    <div className='scoutFormWrapper'>
      <div className="scoutHeaderForm">
        <div className="scoutHeaderForm1">
          <div className="scoutPercentage">0%</div>
          <div className="scoutVerifyYourIdentity-wrapper">
            <span className="scoutVerifyText">Verify your identity to start scouting.</span>
            <p className="scoutCompleteKYCTecxt">Complete your KYC to connect with verified talent. It only takes a few minutes.</p>
          </div>
        </div>

        <div className="scoutHeaderForm2">
          <button onClick={() => navigate("/scout_form")} className="scoutComplete-KYC-button">Complete KYC</button>
        </div>
      </div>

      <div className="scoutConfirmationSectionForm">
        <div className="scoutPersonalInformationForm">
          <span className="scoutInformationsTitlesFormTitile">Personal Information</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Nationality*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Enter Nationality"
                value={scoutForm.nationality}
                onChange={(e) => setScoutform({ ...scoutForm, nationality: e.target.value })}
              />
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Phone Number*</p>
              <input className="scoutpersonalINformatiom-input" type="tel" placeholder="Enter Phone Number"
                value={scoutForm.phoneNumber}
                onChange={(e) => setScoutform({ ...scoutForm, phoneNumber: e.target.value })}
              />
            </article>
          </div>
        </div>

        <div className="scoutContactInformationForm">
          <span className="scoutInformationsTitlesFormTitile">Contact Information</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Club Name*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Club Name"
                value={scoutForm.clubName}
                onChange={(e) => setScoutform({ ...scoutForm, clubName: e.target.value })}
              />
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Scouting Role*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Role"
                value={scoutForm.scoutingRole}
                onChange={(e) => setScoutform({ ...scoutForm, scoutingRole: e.target.value })}
              />
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">League/Region*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input League"
                value={scoutForm.league}
                onChange={(e) => setScoutform({ ...scoutForm, league: e.target.value })}
              />
            </article>
          </div>
        </div>

        <div className="scoutInformationsForm">
          <span className="scoutInformationsTitlesFormTitile">Scouting Details</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Preferred Position*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Positions"
                value={scoutForm.preferredPosition}
                onChange={(e) => setScoutform({ ...scoutForm, preferredPosition: e.target.value })}
              />
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text"> Age*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder=" Age"
                value={scoutForm.age}
                onChange={(e) => setScoutform({ ...scoutForm, age: e.target.value })}
              />
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Social Media Profile*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Profile link"
                value={scoutForm.socialMediaProfile}
                onChange={(e) => setScoutform({ ...scoutForm, socialMediaProfile: e.target.value })}
              />
            </article>
          </div>
        </div>

        <div className="scoutPersonalCredentialsForm">
          <span className="scoutInformationsTitlesFormTitile">Credentials</span>
          <p className="scoutInformationLabel-text">Upload Verification Document*</p>
          <div className="credentials-Certificate-Upload">
            <article className="Upload-Certificate">
              Verification Document Upload
              <label className="custom-upload">
                Upload
                <input type="file" className="scoutFile-upload" onChange={handleScoutFile} />
              </label>
            </article>
          </div>
        </div>
      </div>

      <button
        className="ScoutSubmitFormButton"
        onClick={handleSubmit}
        disabled={!scoutForm.verificationDocument}
      >
        Submit
      </button>
    </div>
  )
}

export default ScoutFormRegister
