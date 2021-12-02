import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/app.css'

import RenderEmails from './emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchTerm, setSearchterm] = useState("");
  console.log(searchTerm);

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  // const handleSearch = (e) => {
  //   let searchEmails = emails;
  //   let search = e.target.value;
  //   let searchLength = e.target.value.length;
  //   let inSearchEmails = [];
  //   console.log(search)
  //   searchEmails.map(email => {
  //     for (let i = 0; i < email.title.length; i++) {
  //       if (search === (email.title).toLowerCase().slice(i, searchLength) && searchLength > 0) {
  //         email.inSearch = 1;
  //         console.log(email);
  //         inSearchEmails.push(email);
  //       } if (searchLength === 0) {
  //         inSearchEmails = initialEmails;
  //       }
  //     }
  //   })
  //   setEmails(inSearchEmails);
  // }

  const handleSearch = e => {
    const searchString = e.target.value;
    emails.filter(email => {
      return email.title.contain()
    })
  }

  

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" onChange={e => setSearchterm(e.target.value)}/>
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
      <RenderEmails filteredEmails={filteredEmails} setEmails={setEmails} searchTerm={searchTerm}/>
      </main>
    </div>
  )
}

export default App
