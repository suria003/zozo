import LogoImg from "../../../Assets/logo512.png";

export default function Logo() {
    return(
        <div className="relative h-[50px] w-auto">
            <img src={LogoImg} alt="logo" className="h-full w-auto" /><span className="absolute top-0 right-[-70px] text-lg text-[#FF5722]">Blogger</span>
        </div>
    );
};