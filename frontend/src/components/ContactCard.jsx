const ContactCard = ({id,firstName,lastName,birthDate,mobileNumber,emailAdress,job,salary,selfEmployed,customer}) => {
    
    const deleteClickHandler = (id) => {
        fetch('')
    }
    
    return ( 
        <div>
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{birthDate}</p>
                <p>{mobileNumber}</p>
                <p>{emailAdress}</p>
                <p>{job}</p>
                <p>{salary}</p>
                <p>{selfEmployed}</p>
                <p>{customer}</p>
            </div>
            <button></button>
        </div>
         )
}
 
export default ContactCard;