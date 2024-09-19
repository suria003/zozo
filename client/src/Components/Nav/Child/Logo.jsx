import LogoImg from "../../../Assets/logo512.png";

export default function Logo() {
    return(
        <div className="relative h-[26.8px] w-auto">
            <img src={LogoImg} alt="logo" className="h-full w-auto" /><span className="absolute top-0 right-[-50px] text-[12px] text-[#FF5722]">Blogger</span>
        </div>
    );
};