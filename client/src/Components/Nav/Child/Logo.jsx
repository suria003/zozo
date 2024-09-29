import LogoImg from "../../../Assets/logo512.png";

export default function Logo() {
    return(
        <div className="relative h-[45px] w-auto"  onClick = { () => window.location.href = "/" }>
            <img src={LogoImg} alt="logo" className="h-full w-auto cursor-pointer" /><span className="absolute top-0 right-[-50px] text-[12px] text-[#FF5722]">Blogger</span>
        </div>
    );
};