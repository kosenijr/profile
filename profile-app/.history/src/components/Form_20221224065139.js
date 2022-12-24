import '../styles/Form.css'

const Form = () => {

    return (
        <form>
            <ul>
                <div className="subtitle">I APPRECIATE YOUR THOUGHTS</div>

                <input type="text" className="contact-name-input" />
                <input type="text" className="contact-mail-input" />
                <input type="text" className="contact-project-input" />

                Hello,

                My name is <div className="contact-form-input" contenteditable="true" data-target="contact-name-input"></div>.
                <br />
                The best email for your reply is <div className="contact-form-input" contenteditable="true" data-target="contact-mail-input"></div>.
                <br />
                I'd like to say that <div className="contact-form-input" contenteditable="true" data-target="contact-project-input"></div>.





            </ul>
        </form>
    )
}

export default Form