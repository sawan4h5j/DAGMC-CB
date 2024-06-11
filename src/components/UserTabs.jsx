
// import Link from "next/link";
import { Link, useLocation } from "react-router-dom";
// import { usePathname } from "next/navigation";


const UserTabs = ({ isAdmin }) => {
    const path = useLocation()
    const { pathname } = location;
    return (
        <div className="flex  mx-auto gap-2 tabs justify-center" >
            <Link
                className={path === '/profile' ? 'active' : ''}
                to="/profile">Profile</Link>
            {isAdmin && (
                <>
                    <Link
                        className={pathname === '/categories' ? 'active' : ''}
                        to={'/profile/uploadImage'}>Upload Image
                    </Link>
                    {/* <Link
                        className={pathname.includes('menu-items') ? 'active' : ''}
                        href={'/menu-items'}>Menu Items
                    </Link>
                    <Link
                        className={pathname === '/users' ? 'active' : ''}
                        href={'/users'}>Users
                    </Link> */}
                </>
            )}
        </div>
    );
};

export default UserTabs;