import { useState,useEffect} from "react"
import ContactCard from "../components/ContactCard"
import { v4 as uuidv4 } from 'uuid'

const Home = () => {

    const [contacts,setContacts] = useState([])
    const [renderTrigger,setRenderTrigger] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9999/api/v1/contacts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setContacts(data)
        })
    },[renderTrigger])


    return ( 
        <main>
            <h1>Contacts</h1>
            <section>
                {contacts?.map((contact) => {
                    console.log(contact)
                    return(
                        <ContactCard 
                        key={uuidv4()}
                        setRenderTrigger={setRenderTrigger}
                        id={contact._id}
                        firstName={contact.firstName}
                        lastName={contact.lastName}
                        birthDate={contact.birthDate}
                        mobileNumber={contact.mobileNumber}
                        emailAdress={contact.emailAdress}
                        job={contact.job}
                        salary={contact.salary}
                        selfEmployed={contact.selfEmployed}
                        customer={contact.customer}
                        />
                    )
                })}
            </section>
        </main>
     )
}

export default Home