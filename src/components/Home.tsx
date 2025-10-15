import MultiStepForm from './MultiStepForm'
import Header from "./Header";
import itech from "../images/itech.jpg";
const Home = () => {
  return (

    <div>
      <Header />
      <div>
        <img className="w-full md:mt-[80px] mt-[100px]" src={itech} alt="" />
      </div>

      <div className="flex bg-[#22073F] items-center justify-center min-h-screen">
        <MultiStepForm />
      </div>


    </div>
  )
}

export default Home
