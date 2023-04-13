import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import ContactCardDetails from "../components/ContactCardDetails"

const Details = () => {

    const {id} = useParams()

    const [contact,setContact] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9999/api/v1/contacts-details` , {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify
            (
                {
                    "id":id
                }
            )
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setContact(data)
        })
    },[])


    return ( 
        <main className="h-screen flex justify-center items-center">
            <section>
            <ContactCardDetails 
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
            </section>
        </main>
     )
}
 
export default Details