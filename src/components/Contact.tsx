import location from "../images/location.png";
import call from "../images/call.png";
import mail from "../images/mail.png";
import Header from "./Header";

const Contact = () => {
  return (
        <div>
            <Header/>
          <div className="contactUs pt-[120px] md:pl-[150px] pl-[20px] text-white w-full h-[800px] bg-[#22073F]">
            <div>
              <p className="text-[52px]">Get In Touch</p>
              <div>
                <p className="contact-descrip text-[18px] mt-[20px]">
                  Contact us at Xittoo Sewa for expert digital solutions and
                  personalized support tailored to your needs.
                </p>
                <div className="mx-[50px] mt-[50px]">
                  <div className="flex">
                    <div>
                      <img
                        src={location}
                        className="h-[60px] w-auto rounded-[5px]"
                        alt=""
                      />
                    </div>
                    <div className="my-[10px] text-[18px] mx-[20px]">
                      <p>Chardobato, Banepa</p>
                      <p>Kavre, Nepal </p>
                    </div>
                  </div>
                  <div className="flex mt-[20px]">
                    <div>
                      <img
                        src={mail}
                        className="h-[60px] w-auto rounded-[5px]"
                        alt=""
                      />
                    </div>
                    <div className="my-[10px] text-[18px] mx-[20px]">
                      <p>info@xittoosewa.com</p>
                    </div>
                  </div>

                  <div className="flex mt-[20px]">
                    <div>
                      <img
                        src={call}
                        className="h-[60px] w-auto rounded-[5px]"
                        alt=""
                      />
                    </div>
                    <div className="my-[10px] text-[18px] mx-[20px]">
                      <p>011-663099</p>
                      <p>9801362962</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
  )
}

export default Contact
