import { useNavigate } from "react-router"
import "./nextLevel.css"

const Nextlevel = () => {
  const nav = useNavigate()
  const handleCreateProfile = ()=>{
    nav("/signup_option")
  }
  return (
    <div className="nextLevel-body">
      <div className="nextLevel_wrapper">
        <div className="inner_wrapper">
          <div className="left_inner">
            <h2>Take Your Career to the Next Level!</h2>
            <h4>Create your profile, upload your highlights, and attract scouts looking for talent like you.</h4>
          </div>
          <div className="right_inner">
            <button style={{cursor: "pointer"}} className="inner_button" onClick={handleCreateProfile}>Create Your Free Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nextlevel
