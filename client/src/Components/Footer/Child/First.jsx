import Logo from "../../../Assets/logo512.png";

export default function First() {
    return(
        <div onClick={() => window.location.href = "/" }>
            <img src={Logo} className="h-[100px] w-auto cursor-pointer" />
        </div>
    );
};
