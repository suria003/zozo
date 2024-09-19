import { MdNotificationsActive } from "react-icons/md";

export default function Notification() {
  return (
    <li className="relative">
      <MdNotificationsActive
        className="h-[30px] w-[30px] cursor-pointer transition duration-[.5s] ease-in text-[#000] animate-vibrate"
      />
    </li>
  );
}