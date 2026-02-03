import { fetchWithAuth } from '@/lib/fetchWraper';
import Navbar from './Navbar';
import { INotification } from '@/types';

const NavbarWraper = async () => {
    const res = await fetchWithAuth(`/notifications/my-notifications?page=1&limit=6`);
    const data = await res.json();
    const notifications: INotification[] = data?.data?.notifications || [];

    return (
        <div>
            <Navbar notifications={notifications} />
        </div>
    );
};

export default NavbarWraper;