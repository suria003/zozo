import { MdNotificationsActive } from "react-icons/md";

export default function Notification() {
  return (
    <li className="relative">
      <MdNotificationsActive
        className="h-[35px] w-[35px] cursor-pointer transition duration-[.5s] ease-in text-[#fff] animate-vibrate"
      />
    </li>
  );
}