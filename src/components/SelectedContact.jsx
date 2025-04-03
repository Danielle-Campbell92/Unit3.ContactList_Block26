import { useState, useEffect } from "react"

function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)

    useEffect(()=>{
        const getContact = async () => {
            const res = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
            const result = await res.json()
            setContact(result)
            console.log(contact)
        }
        getContact();
        console.log("Got contact", selectedContactId)
    })
    
    return(
        <>
        <h3>Contact Details</h3>
        {
            contact ? (
                <div>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            ) :
            (<p>Loading Contact ...</p>)
        }
        </>
    )
}
export default SelectedContact