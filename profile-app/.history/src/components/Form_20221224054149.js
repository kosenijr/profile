import '
'

const Form = () => {

    return (
        <form>
            <ul>
                <li>
                    <label for='name'>Name: </label>
                    <input type="text" id='name' name='name' />
                </li>
                <li>
                    <label for='email'>Email: </label>
                    <input type="email" id='id' name='user-email' />
                </li>
                <li>
                    <label for='name'>Message: </label>
                    <textarea id='message' name='user-message' />
                </li>
            </ul>
        </form>
    )
}

export default Form