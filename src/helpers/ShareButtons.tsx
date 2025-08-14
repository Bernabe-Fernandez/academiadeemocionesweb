import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
} from "react-share";

import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaLinkedin,
} from "react-icons/fa";

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title } : ShareButtonsProps) {
  return (
    <div className="flex gap-3 items-center mt-4">
        <FacebookShareButton url={url} title={title}>
            <FaFacebook
            className="text-azulPrimario-800 hover:text-azulPrimario-500 hover:scale-110 transition-transform"
            size={28}
            />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title}>
            <FaTwitter
            className="text-azulPrimario-800 hover:text-azulPrimario-500 hover:scale-110 transition-transform"
            size={28}
            />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={title}>
            <FaWhatsapp
            className="text-azulPrimario-800 hover:text-azulPrimario-500 hover:scale-110 transition-transform"
            size={28}
            />
        </WhatsappShareButton>

        <LinkedinShareButton url={url} title={title}>
            <FaLinkedin
            className="text-azulPrimario-800 hover:text-azulPrimario-500 hover:scale-110 transition-transform"
            size={28}
            />
        </LinkedinShareButton>
    </div>
  )
}
