import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ClickSound from "../components/ClickSound";
import SparkContainer from "@kamiru/react-spark";

const Dashboard = () => {
    const [admin, setAdmin] = useState(false)
    const { pathname } = useLocation()

    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user?.email === import.meta.env.VITE_EMAIL) {
            setAdmin(true)
        }
        else {
            setAdmin(false)
        }
    }, [user])
    // console.log(pathname);
    // console.log(admin);


    return (
        <>
            <SparkContainer>
                <div className="flex flex-col  justify-center items-center mt-24">
                    {/* <ClickSound></ClickSound> */}
                    <div className="flex gap-1 tabs">
                        <NavLink
                            // className={pathname === '/dashboard/profile' ? 'active' : ''}
                            to="/">Home
                        </NavLink>
                        <NavLink
                            className={pathname === '/dashboard/profile' ? 'active' : ''}
                            to="/dashboard/profile">Profile
                        </NavLink>
                        {admin && <NavLink
                            className={pathname === '/dashboard/uploadImage' ? 'active' : ''}
                            to="/dashboard/uploadImage">UploadImage
                        </NavLink>}
                        <NavLink
                            // className={pathname === '/dashboard/uploadImage' ? 'active' : ''}
                            to="/gallery">Gallery
                        </NavLink>
                    </div>

                    <div>
                            <ClickSound></ClickSound>
                        <Outlet></Outlet>
                    </div>
                </div>
            </SparkContainer>
        </>
    );
};

export default Dashboard;