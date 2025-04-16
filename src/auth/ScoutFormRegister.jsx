import { useParams } from "react-router"
import "./scoutformregister.css"
import { useState } from "react"
const ScoutFormRegister = () => {
    const [scoutForm, setScoutform]=useState({
      fullname:"",
      nationality:"",
      email:"",
      phoneNumber:"",
      homeaddress:"",
      clubname:"",
      scoutingrole:"",
      leagues:"",
      playerposition:"",
      age:""
    })
    console.log(scoutForm)
const {id} = useParams();
    
    // const [ ]
    const [scoutfile,setScoutFile]=useState(null);
    const handlscoutFile = (e) => {
      const selectedFile = e.target.files[0];
      setScoutFile(selectedFile);
    }

    // const formData = new formData();
    // formData.append("fullname", fullname )
    // formData.append("nationality",  nationality )
    // formData.append("phoneNumber",   phoneNumber)
    // formData.append("clubName", clubname )
    // formData.append("scoutingRole",   scoutingrole )
    // formData.append("league", leagues )
    // formData.append("preferredPosition",  playerposition )
    // formData.append("preferredAge", age )
    // formData.append("socialMediaProfile", fullname )
    // formData.append("verificationDocument", fullname )
  
    
  return (
    <div className='scoutFormWrapper'>
         <div className="scoutHeaderForm">
      <div className="scoutHeaderForm1">
        <div className="scoutPercentage">0%</div>
        <div className="scoutVerifyYourIdentity-wrapper">
        <span className="scoutVerifyText">Verify your identity to start scouting.</span>
        <p className="scoutCompleteKYCTecxt">Complete your KYC to connect with verified talent. It only takes a <br />
         few minutes.</p>
        </div>
      </div>

      <div className="scoutHeaderForm2">
        <button onClick={()=>navigate("/scout_form")} className="scoutComplete-KYC-button">Complete KYC</button>
      </div>
    </div>


    <div className="scoutConfirmationSectionForm">

      <div className="scoutPersonalInformationForm">
      <span className="scoutInformationsTitlesFormTitile">Personal Information</span>
      <div className="scoutInformationsTitlesForminput-holder">
           <article className="scoutInformationFormArticle">
            <p className="scoutInformationLabel-text">Full name*</p>
            <input className="scoutpersonalINformatiom-input" type="text" placeholder="Full name" 
            value={scoutForm.fullname} onChange={(e)=>setScoutform({...scoutForm, fullname:e.target.value})}
            />
           </article>
           <article className="scoutInformationFormArticle">
            <p className="scoutInformationLabel-text">Age*</p>
            {/* <section className="month-date-year">
            <select className="month-date-year-Select">
              <option className="month-date-year-Option">Month</option>
            </select>
            <select className="month-date-year-Select">
            <option className="month-date-year-Option">Day</option>
            </select>
            <select className="month-date-year-Select">
            <option className="month-date-year-Option">Year</option>
            </select>
            </section> */}
            <input className="scoutpersonalINformatiom-input"  type="text" placeholder="Age"
            value={scoutForm.age} onChange={(e)=>setScoutform({...scoutForm, age:e.target.value})}/>
           </article>
           <article className="scoutInformationFormArticle">
           <p className="scoutInformationLabel-text">Nationality*</p>
           <input className="scoutpersonalINformatiom-input" type="text" placeholder="Enter Nationality"
           value={scoutForm.nationality} onChange={(e)=>setScoutform({...scoutForm, nationality:e.target.value })}/>
           </article>
           <article className="scoutInformationFormArticle">
           <p className="scoutInformationLabel-text">Gender*</p>
           <select className="scoutGenderInput">
         <option className="month-date-year-Option">Gender</option>
         <option value="">Male</option>
         <option value="">Female</option>
           </select>
           </article>
         </div>
         </div>



      <div className="scoutContactInformationForm">
      <span className="scoutInformationsTitlesFormTitile">Contact Information</span>
      <div className="scoutInformationsTitlesForminput-holder">
        <article className="scoutInformationFormArticle">
        <p className="scoutInformationLabel-text">Email address*</p>
        <input className="scoutpersonalINformatiom-input" type="email" placeholder="Enter email"
        value={scoutForm.email} onChange={(e)=>setScoutform({...scoutForm, email:e.target.value})}/>
        </article>
        <article className="scoutInformationFormArticle">
        <p className="scoutInformationLabel-text">Phone number*</p>
        <div className="scout-phoneNumber">
        <select className="scout-DigitSection">
         <option className="scout-DigitSection-Option">+234</option>
           </select>
           <input className="scout-DigitSection-Input" type="Phonenumber" placeholder="Phone number (E.g 905 9461 351)"
           value={scoutForm.phoneNumber} onChange={(e)=>setScoutform({...scoutForm, phoneNumber:e.target.value})}/>
        </div>
        </article>
        <article className="scoutInformationFormArticle">
        <p className="scoutInformationLabel-text">Home address*</p>
        <input className="scoutpersonalINformatiom-input" type="text" placeholder="Enter Nationality" 
        value={scoutForm.homeaddress} onChange={(e)=>setScoutform({...scoutForm, homeaddress:e.target.value})}/>
        </article>
      </div>
      </div>




      <div className="scoutInformationsForm">
      <span className="scoutInformationsTitlesFormTitile">Scouting Information</span>
        <div className="scoutInformationsTitlesForminput-holder">
          <article className="scoutInformationFormArticle">
          <p className="scoutInformationLabel-text">Organization/Club Name*</p>
          <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Position"
          value={scoutForm.clubname} onChange={(e)=>setScoutform({...scoutForm, clubname:e.target.value})}/>
          </article >
          <article className="scoutInformationFormArticle">
          <p className="scoutInformationLabel-text">Scouting Role*</p>
          <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Role"
          value={scoutForm.scoutingrole} onChange={(e)=>setScoutform({...scoutForm, scoutingrole:e.target.value})}/>
          </article>
          <article className="scoutInformationFormArticle">
          <p className="scoutInformationLabel-text">Leagues/Regions Covered*</p>
          <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Number"
          value={scoutForm.leagues} onChange={(e)=>setScoutform({...scoutForm, leagues:e.target.value})}/>
          </article>
          <article className="scoutInformationFormArticle">
          <p className="scoutInformationLabel-text">Preferred Player Positions*</p>
          <input className="scoutpersonalINformatiom-input" type="text" placeholder="Input Position"
          value={scoutForm.playerposition} onChange={(e)=>setScoutform({...scoutForm, playerposition:e.target.value })}/>
          </article>
        </div>
      </div>



      <div className="scoutPersonalCredentialsForm">
      <span className="scoutInformationsTitlesFormTitile">Professional Credentials</span>
      <p className="scoutInformationLabel-text">Scouting License/Certification*</p>
      <div className="credentials-Certificate-Upload">
        <article className="Upload-Certificate">
         {scoutfile} Certificate Upload
      <label className="custom-upload">
      Upload
      <input type="file" class="scoutFile-upload" onChange={handlscoutFile}/>
      </label>
        </article>
      </div>
      </div>
    </div>


     <button className="ScoutSubmitFormButton">Submit</button>

    </div>
  )
}

export default ScoutFormRegister
