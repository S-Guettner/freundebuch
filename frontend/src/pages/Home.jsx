import { useState,useEffect} from "react"
import ContactCard from "../components/ContactCard"
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"

const Home = () => {

    const [contacts,setContacts] = useState([])
    const [renderTrigger,setRenderTrigger] = useState(false)

    const [sort,setSort] = useState("ascending")
    const [sortBy,setSortBy] = useState("salary")


    useEffect(() => {
        fetch('https://freundebuch.vercel.app/api/v1/contacts')
        .then(res => res.json())
        .then(data => {
            
                if(sortBy === "salary" && sort === "ascending") {
                  data.sort((a,b) => {
                    if (a.salary < b.salary) return -1
                    if (a.salary > b.salary) return 1
                    return 0
                })
                } else if(sortBy === "salary" && sort === "descending"){
                    data.sort((a,b) => {
                    if (a.salary < b.salary) return 1
                    if (a.salary > b.salary) return -1
                    return 0
                })
                }else if(sortBy === "firstName" && sort === "ascending"){
                    data.sort((a,b) => {
                    if (a.firstName < b.firstName) return -1
                    if (a.firstName > b.firstName) return 1
                    return 0
                })
                }else if(sortBy === "firstName" && sort === "descending"){
                    data.sort((a,b) => {
                    if (a.firstName < b.firstName) return 1
                    if (a.firstName > b.firstName) return -1
                    return 0
                })
                }else if(sortBy === "lastName" && sort === "ascending"){
                    data.sort((a,b) => {
                    if (a.lastName < b.lastName) return -1
                    if (a.lastName > b.lastName) return 1
                    return 0
                })
                }else if(sortBy === "lastName" && sort === "descending"){
                    data.sort((a,b) => {
                    if (a.lastName < b.lastName) return 1
                    if (a.lastName > b.lastName) return -1
                    return 0
                })
                }
            
            setContacts(data)
        })
    },[renderTrigger,sortBy,sort])


    return ( 
        <main>
            <h1 className="text-center text-4xl m-4">Contacts</h1>
            <div>
                <p className="m-2">Sort:</p>
                <div className="mb-4">
                    <div className="m-2">
                    <label className="mr-2" htmlFor="ascending">Ascending</label>
                    <input onChange={(e) => setSort(e.target.value)} type="radio" name="sort" id="ascending" value="ascending" defaultChecked />
                    </div>

                    <div className="m-2 inline">
                    <label className="mr-2" htmlFor="descending">Descending</label>
                    <input onChange={(e) => setSort(e.target.value)} type="radio" name="sort" id="descending" value="descending" />
                    </div>

                </div>

                <p className="m-2">Sort by:</p>
                <div>
                    <div className="m-2">
                    <label className="mr-2" htmlFor="salary">salary</label>
                    <input onChange={(e) => setSortBy(e.target.value)} type="radio" name="sortItem" id="salary" value="salary" defaultChecked />
                    </div>

                    <div className="m-2 block">
                    <label className="mr-2" htmlFor="firstName">First Name</label>
                    <input onChange={(e) => setSortBy(e.target.value)} type="radio" name="sortItem" id="firstName" value="firstName" />
                    </div>
                    
                    <div className="m-2">
                    <label className="mr-2" htmlFor="lastName">Last Name</label>
                    <input onChange={(e) => setSortBy(e.target.value)} type="radio" name="sortItem" id="lastName" value="lastName" />
                    </div>
                    
                </div>

            </div>
            <section className="flex justify-center gap-5 flex-wrap mb-28">
                {contacts?.map((contact) => {
            
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
                <Link className="text-center block border-2 mx-96 p-2 rounded-xl hover:bg-cyan-950 hover:text-white" to={'/new-contact'}>
                    <div className="flex items-center justify-center">
                    <p className="inline mx-10">New Contact</p>
                    <svg className="" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                    </div>
                </Link>
        </main>
     )
}

export default Home