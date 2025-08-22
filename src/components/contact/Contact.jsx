import './Contact.css';
import { LocationIcon } from '../../assets/customSvg/contact';
import { MailIcon } from '../../assets/customSvg/hero';

export const Contact = () => {

    const contactData = [{
        key: 'Email',
        value: 'divyapant369@gmail.com',
        icon: <MailIcon />
    }, {
        key: 'Location',
        value: 'Gurugram, India',
        icon: <LocationIcon />
    }];
  return (
    <section className="main-container">
        <div className='contact-container'>
            <h2 className="section-heading text-2xl">
        Let's <span className="section-highlight-secondary">Connect</span>
      </h2>
      <p className="section-subheading text-md">
       Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>
      <div className='contact-content'>
        <div className='contact-form-container'>
            <div className='form-wrapper'>
            <h3 className='text-lg'>Send me a message</h3>
            <form className='contact-form text-sm' type="submit">
                <input type="text" placeholder="Your Name" required className='contact-input' name='name'/>
                <input type="email" placeholder="Your Email" required className='contact-input' name='email'/>
                <input type="text" placeholder="Subject" className='contact-input full-width' name='subject'/>
                <textarea rows='6' placeholder="Your Message" required className='contact-textarea full-width' name='message'></textarea>
                <button type='submit' className='btn btn-primary full-width send-btn'>Send Message</button>
            </form></div>
        </div>
        <div className='contact-info-container'>
            <div className='info-header'>
            <h3 className='text-lg'>Get in touch</h3>
            <div className='info-description'>
                I'm always interested in new opportunities and exciting projects. Whether you're a company looking to hire, or you're a fellow developer who wants to collaborate, feel free to reach out!
            </div>
            <div className='info-details'>
                {
                    contactData.map((item, index) => (
                        <div className='info-item' key={index}>
                            <div className='info-icon'>{item.icon}</div>
                            <div className='info-text'>
                                <span className='info-key'>{item.key}</span>
                                <span className='info-value'>{item.value}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* To do : Resume download option */}
            <div className='info-footer'>
                <text>            <b>Available for freelance work or full-time positions. </b>
                <br/><em>Let's create something amazing together!</em></text>    
            </div></div>
        </div>
      </div>
        </div>
    </section>
  )
}

export default Contact;