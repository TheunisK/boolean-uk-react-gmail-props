import './styles/app.css'

import RenderEmail from './email'

const RenderEmails = (props) => {
    return (
        <ul>
          {props.filteredEmails.filter((email) => {
            if (props.searchTerm == "") {
              return email
            } else if (email.title.toLowerCase().includes(props.searchTerm.toLowerCase())) {
              return email
            }
            
          }).map((email, index) => (
            <RenderEmail email={email} index={index} key={index} setEmails={props.setEmails}/>
          ))}
        </ul>
    )
}

export default RenderEmails