import { useState,useEffect} from "react"
import ContactCard from "../components/ContactCard"

const Home = () => {

    const [contacts,setContacts] = useState([])

    useEffect(() => {
        
    },[])

    return ( 
        <h1 className="text-4xl text-red-500">HOME</h1>
     )
}

export default Home