import Image from "next/image";
import Slack from "../assets/svg/slack.svg"
import Gmail from "../assets/svg/gmail.svg"
import Linkedin from "../assets/svg/linkedin.svg"
import Freddie from "../assets/svg/freddie.svg"
import DropBox from "../assets/svg/dropbox.svg"
import Facebook from "../assets/svg/facebook.svg"
import Onenote from "../assets/svg/onenote.svg"
import FacebookM from "../assets/svg/facebook-messenger.svg"
import Whatsapp from "../assets/svg/whatsapp.svg"
import Sendgrid from "../assets/svg/sendgrid.svg"
import Github from "../assets/svg/github.svg"
import Outlook from "../assets/svg/outlook.svg"
import Box from "../assets/svg/box.svg"
import MicrosoftTeam from "../assets/svg/microsoft-team.svg"
import MicrosoftSharepoint from "../assets/svg/microsoft-sharepoint.svg"
import Youtube from "../assets/svg/youtube.svg"
import Zeplin from "../assets/svg/zeplin.svg"
import Style from "../assets/svg/style.svg"
import MicrosoftPowerpoint from "../assets/svg/microsoft-powerpoint.svg"
import MicrosoftAccess from "../assets/svg/microsoft-access.svg"
import WordpressBlue from "../assets/svg/wordpress-blue.svg"

const Selection = () => {
    return ( 
        <> 
            <h2 className="font-normal text-4xl text-center mt-20">Integrate with your favourite tools <br /> easily in one click.</h2>

            <div className="flex justify-between h-10 mt-20 w-11/12 m-auto">
                <Image src={Slack} alt="slack icon" />
                <Image src={Gmail} alt="gmail icon" />
                <Image src={Linkedin} alt="linkedin icon" />
                <Image src={Freddie} alt="freddie icon" />
                <Image src={DropBox} alt="dropbox icon" />
                <Image src={Facebook} alt="facebook icon" />
                <Image src={Onenote} alt="onenote icon" />
                <Image src={FacebookM} alt="facebook-messenger icon" />
                <Image src={Whatsapp} alt="whatsapp icon" />
                <Image src={Sendgrid} alt="sendgrid icon" />
                <Image src={Github} alt="github icon" />
            </div>

            <div className="flex justify-between h-10 my-10 w-11/12 m-auto">
                <Image src={Outlook} alt="outlook icon" />
                <Image src={Box} alt="box icon" />
                <Image src={Onenote} alt="onenote icon" />
                <Image src={MicrosoftTeam} alt="microsoft-team icon" />
                <Image src={MicrosoftSharepoint} alt="microsoft-sharepoint icon" />
                <Image src={Youtube} alt="youtube icon" />
                <Image src={Zeplin} alt="zeplin icon" />
                <Image src={Style} alt="style icon" />
                <Image src={MicrosoftPowerpoint} alt="microsoft-powerpoint icon" />
                <Image src={MicrosoftAccess} alt="microsoft-access icon" />
                <Image src={WordpressBlue} alt="wordpress-blue icon" />
            </div>
        </>
     );
}
 
export default Selection;