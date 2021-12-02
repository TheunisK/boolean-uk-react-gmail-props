import './styles/app.css'

import RenderEmail from './email'

const RenderEmails = (props) => {
    return (
        <ul>
          {props.filteredEmails.map((email, index) => (
            <RenderEmail email={email} index={index} key={index} setEmails={props.setEmails}/>
          ))}
        </ul>
    )
}

export default RenderEmails