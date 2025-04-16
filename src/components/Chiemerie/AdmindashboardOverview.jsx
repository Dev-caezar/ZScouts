import "./adminDashboardOverview.css"
import { MdVerified } from "react-icons/md";
import Vector from "../../assets/Vector.png"
const AdmindashboardOverview = () => {
  const items =[
    {id:1, title:"Total players", description:"1,258"},
    {id:2,title:"Total scouts", description:"1,258" },
  ]

  const activity =[
    {id:1, icon:"", head:"Scout Verified", paragraph:"Ozofor Chioma was Verified by Admin "},
    {id:2, icon:"",head:"Scout Registration", paragraph:"New Scout Registered"},
    {id:3, icon:"", head:"Player Deleted", paragraph:"Inactive player account removed"},
    {id:4, icon:"",head:"Verification Request", paragraph:"# New scout awaiting verification"}
  ]
  return (
    <div className='adminDashboardOverview-wrapper'>
      <div className="adminDashboardOverview">
        <h3 className="admin-h3">Admin Dashboard</h3>
      <article className="adminDashboardOverview-article">
        {items.map((item,index)=>(
          <div key={index} className="itemswrapper">
           <div className="image-vector">
             <img className="image-Vector" src={Vector} alt="" />

            </div>
           <span className="adminSpan">{item.title}</span>
           <span className="admin-description">{item.description}</span>
          </div>
        ))}
         </article>
      </div>

      <div className="admin-recent-activity-wrapper">
        <div className="admin-recent-activity">
          <span className="admin-aside-head">Recent Activity</span>
          {activity.map((recent,index)=>(
            <div key={index} className="icon-text">
                <MdVerified size={28}/>
              <aside className="admin-aside">
                <span className="admin-aside-span">{recent.head}</span>
                <p className="admin-aside-p">{recent.paragraph}</p>
              </aside>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdmindashboardOverview
