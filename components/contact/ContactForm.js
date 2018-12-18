import {observer} from "mobx-react";

const ContactForm = observer(({contact, onChange, onSave}) => {
    return (
        <form>
            <h1>Contact</h1>
            <input type="text" name="name" onChange={onChange} value={contact.name} placeholder="Name" />
            <input type="email" name="email" onChange={onChange} value={contact.email} placeholder="Email" />
            <input type="submit" value="Save" onClick={onSave}/>
        </form>
    );
});

export default ContactForm;