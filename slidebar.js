import calender from "./Images/google-calendar.png"
import map from "./Images/google-maps.png"
import keep from "./Images/keeps.png"
import complete from "./Images/checked.png"
import user from "./Images/user.png"
import plus from "./Images/plus.png"
function Slidebar(){
    return(
        <div className="google-apps">
           <div><a href="https://calendar.google.com/calendar/u/0/r"><img src={calender} width="26px"/></a></div>
           <div><a href="https://www.google.com/keep/"><img src={keep} width="30px"/></a></div>
           <div><a href="https://tasksboard.com/"><img src={complete} width="25px"/></a></div>
           <div><a href="https://contacts.google.com/"><img src={user} width="30px"/></a></div>
           <div><a href="https://www.google.co.in/maps"><img src={map} width="25px"/></a></div>
           <div><a href=""><img src={plus} width="20px"/></a></div>
        </div>
    )
}
export default Slidebar;