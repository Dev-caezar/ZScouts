import "./scoutformregister.css"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"

const ScoutFormRegister = () => {
  const id = useParams()
  const [scoutForm, setScoutform] = useState({
    nationality: "",
    clubName: "",
    scoutingRole: "",
    league: "",
    preferredPosition: "",
    preferredAge: "",
    socialMediaProfile: "",
    verificationDocument: "",
  })

  const [formErrors, setFormErrors] = useState({})
  const [scoutfile, setScoutFile] = useState(null)
  const navigate = useNavigate()

  const handlscoutFile = (e) => {
    const selectedFile = e.target.files[0]
    setScoutFile(selectedFile)
  }

  const validateForm = () => {
    const errors = {}

    if (!scoutForm.nationality.trim()) errors.nationality = "Nationality is required"
    if (!scoutForm.clubName.trim()) errors.clubName = "Club Name is required"
    if (!scoutForm.scoutingRole.trim()) errors.scoutingRole = "Scouting Role is required"
    if (!scoutForm.league.trim()) errors.league = "League is required"
    if (!scoutForm.preferredPosition.trim()) errors.preferredPosition = "Preferred Position is required"
    if (!scoutForm.preferredAge.trim()) errors.preferredAge = "Preferred Age is required"
    if (!scoutForm.socialMediaProfile.trim()) errors.socialMediaProfile = "Social Media Profile is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const BASE_URL = "https://zscouts.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        const formData = new FormData()
        formData.append("nationality", scoutForm.nationality)
        formData.append("clubName", scoutForm.clubName)
        formData.append("scoutingRole", scoutForm.scoutingRole)
        formData.append("league", scoutForm.league)
        formData.append("preferredPosition", scoutForm.preferredPosition)
        formData.append("preferredAge", scoutForm.preferredAge)
        formData.append("socialMediaProfile", scoutForm.socialMediaProfile)
        formData.append("verificationDocument", scoutfile)

        const response = await axios.post(`${BASE_URL}/api/v1/playerkyc/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        toast.success("Form submitted successfully!")
        console.log("Form data sent:", response.data)
      } catch (error) {
        console.error("Error submitting form", error)
        toast.error("Failed to submit form. Try again.")
      }
    } else {
      console.log("Form validation failed")
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
          <button style={{cursor: "not-allowed", background: "gray"}} className="scoutComplete-KYC-button">Complete KYC</button>
        </div>
      </div>

      <div className="scoutConfirmationSectionForm">
        <div className="scoutPersonalInformationForm">
          <span className="scoutInformationsTitlesFormTitile">Personal Information</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Nationality*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Enter Nationality"
                value={scoutForm.nationality} onChange={(e) => setScoutform({ ...scoutForm, nationality: e.target.value })}
              />
              {formErrors.nationality && <small className="error-text">{formErrors.nationality}</small>}
            </article>
          </div>
        </div>

        <div className="scoutContactInformationForm">
          <span className="scoutInformationsTitlesFormTitile">Contact Information</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Club Name*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Club Name"
                value={scoutForm.clubName} onChange={(e) => setScoutform({ ...scoutForm, clubName: e.target.value })}
              />
              {formErrors.clubName && <small className="error-text">{formErrors.clubName}</small>}
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Scouting Role*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Role"
                value={scoutForm.scoutingRole} onChange={(e) => setScoutform({ ...scoutForm, scoutingRole: e.target.value })}
              />
              {formErrors.scoutingRole && <small className="error-text">{formErrors.scoutingRole}</small>}
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">League/Region*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input League"
                value={scoutForm.league} onChange={(e) => setScoutform({ ...scoutForm, league: e.target.value })}
              />
              {formErrors.league && <small className="error-text">{formErrors.league}</small>}
            </article>
          </div>
        </div>

        <div className="scoutInformationsForm">
          <span className="scoutInformationsTitlesFormTitile">Scouting Details</span>
          <div className="scoutInformationsTitlesForminput-holder">
            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Preferred Position*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Positions"
                value={scoutForm.preferredPosition} onChange={(e) => setScoutform({ ...scoutForm, preferredPosition: e.target.value })}
              />
              {formErrors.preferredPosition && <small className="error-text">{formErrors.preferredPosition}</small>}
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Preferred Age*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Preferred Age"
                value={scoutForm.preferredAge} onChange={(e) => setScoutform({ ...scoutForm, preferredAge: e.target.value })}
              />
              {formErrors.preferredAge && <small className="error-text">{formErrors.preferredAge}</small>}
            </article>

            <article className="scoutInformationFormArticle">
              <p className="scoutInformationLabel-text">Social Media Profile*</p>
              <input className="scoutpersonalINformatiom-input" type="text" placeholder="Profile link"
                value={scoutForm.socialMediaProfile} onChange={(e) => setScoutform({ ...scoutForm, socialMediaProfile: e.target.value })}
              />
              {formErrors.socialMediaProfile && <small className="error-text">{formErrors.socialMediaProfile}</small>}
            </article>
          </div>
        </div>

        <div className="scoutPersonalCredentialsForm">
          <span className="scoutInformationsTitlesFormTitile">Credentials</span>
          <p className="scoutInformationLabel-text">Upload Verification Document*</p>
          <div className="credentials-Certificate-Upload">
            <article style={{fontSize: "15px"}} className="Upload-Certificate">
              Verification Document Upload
              <label className="custom-upload">
                Upload
                <input type="file" className="scoutFile-upload" onChange={handlscoutFile} />
              </label>
            </article>
          </div>
        </div>
      </div>

      <button style={{cursor: "pointer"}} className="ScoutSubmitFormButton" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ScoutFormRegister
