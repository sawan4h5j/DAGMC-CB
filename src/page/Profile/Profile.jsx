import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UserTabs from "../../components/UserTabs";
// import UserTabs from "../../components/UserTabs";

const Profile = () => {

    const { user } = useContext(AuthContext)
    const [userName, setUserName] = useState(user?.displayName)


    const handleProfileUpdate = (e) => {
        e.preventDefault()
    }

    // const isAdmin = true

    return (
        <section className="mt-24">
            {/* <UserTabs isAdmin={isAdmin}></UserTabs> */}

            <div className="max-w-xl mx-auto mt-8" >


                <div className="flex md:flex-col lg:flex-row  gap-4 items-center">
                    <div>
                        <div className=" p-2 rounded-xl relative  max-w-[120px]">
                            <img className="rounded-lg w-full h-full mb-1" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/wC75hKV/user.png'} />
                            {/* <EditAbleImage link={image} setLink={setImage} /> */}
                            {/* <label >
                                <input type="file" accept="image/*" onChange={'handleFileChange'} className="hidden" />
                                <span className="border border-gray-300 cursor-pointer rounded-lg p-2 text-center block ">Edit</span>
                            </label> */}

                        </div>
                    </div>

                    <form className="grow" onSubmit={handleProfileUpdate}>

                        {/* <label>First and Last name</label> */}
                        {/* <input onChange={e => setUserName(e.target.value)} className="p-2  px-3 w-full ring-1  ring-violet-600 mt-2 rounded-xl border hover:shadow-lg" type="text" name="name" placeholder="Your name"  required /> */}
                        <div class="container">
                            <div class="inputbox">
                                <input value={userName} onChange={e => setUserName(e.target.value)} type="text" required />
                                <span>Name</span>
                                <i></i>
                            </div>
                        </div>
                        {/* <input type="text"

                        className="block w-full mb-3 rounded-xl ring-1 ring-violet-600 border p-2 border-gray-300 "
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            placeholder="First And Last Name" name="" id=""
                        /> */}

                        {/* <label>Email</label>
                        <input type="email"
                            className="border"
                            disabled value={'sawon3030@gamilc.om'}
                            placeholder="email"
                        /> */}
                        <div class="container">
                            <div class="inputbox">

                                <input disabled value={user?.email} type="text" required />
                                {/* <span>E-mail</span> */}
                                <i></i>
                            </div>
                        </div>

                        {/* <label>Phone</label>
                        <input type="tel" placeholder="Phone Number"
                            value={phone} onChange={ev => setPhone(ev.target.value)}
                        />

                        <label>Street Address</label>
                        <input type="text" placeholder="Street Address"
                            value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)} />
                        <div className="flex gap-2 ">
                            <div>
                                <label>Postal Code</label>
                                <input type="text" placeholder="Post Code"
                                    value={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                                />
                            </div>

                            <div>
                                <label>City</label>
                                <input type="text" placeholder="City"
                                    value={city} onChange={ev => setCity(ev.target.value)}
                                />
                            </div>

                        </div>
                        <label>Country</label>
                        <input type="text" placeholder="Country"
                            value={'country'} onChange={ev => setCountry(ev.target.value)} /> */}

                        {/* <button type="submit">save</button> */}
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Profile;