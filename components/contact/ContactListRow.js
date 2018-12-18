const ContactListRow = ({contact}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
        </tr>
    );
};

export default ContactListRow;