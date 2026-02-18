import { fetchWithAuth } from '@/lib/fetchWraper';
import Navbar from './Navbar';
import { INotification } from '@/types';
import { getCurrentUser } from '@/services/AuthService';

const NavbarWraper = async () => {
    const userData = await getCurrentUser();
    let notifications: INotification[] = [];

    console.log(userData)
    if (userData) {
        const res = await fetchWithAuth(`/notifications/my-notifications?page=1&limit=6`);
        const data = await res.json();
        notifications = data?.data?.notifications || [];
    }

    console.log(notifications)
    return (
        <div>
            <Navbar notifications={notifications} />
        </div>
    );
};

export default NavbarWraper;