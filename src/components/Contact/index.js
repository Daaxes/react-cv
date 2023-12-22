import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.css'

const Contact = () => {
  emailjs.init('L7sAIrpeMiwAP76ZR');
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_w3ldui9', 'template_s1zsu7v', form.current)
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <div className="contactTextZone">
          <h1>
            Kontakta mig
          </h1>
          <h2>
            Fyll i formuläret så återkommer jag snarast möjligt.
          </h2>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
