import '../styles/Form.css'

const Form = () => {

    return (
        <form>
            <ul>
                {/* <li>
                    <label for='name'>Full Name: </label>
                    <input type="text" id='name' name='name' />
                </li>
                <li>
                    <label for='email'>Email: </label>
                    <input type="email" id='id' name='user-email' />
                </li>
                <li>
                    <label for='name'>Message: </label>
                    <textarea id='message' name='user-message' />
                </li> */}
                
                <div className="subtitle">I APPRECIATE YOUR THOUGHTS</div>

                <input type="text" className="contact-name-input" />
                <input type="text" className="contact-mail-input" />
                <input type="text" className="contact-project-input" />

                Hello,

                My name is <div></div>.
                The best email to 





            </ul>
        </form>
    )
}

export default Form