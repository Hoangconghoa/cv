import { postContent} from "../../Data/PostContact"
import { PostExpertise } from "../../Data/PostExpertise"
import Contacter from "../Contacter"
import Expertise from "../Expertise"
import Persioner from "../Persioner"

const Contact = () => {
  return (
    <div className="bg-blue-700 p-10 text-white max-w-[400px] h-[850px] rounded-tl-3xl  shadow-lg shadow-black">
        <div style={{height:200 , width:200}} className="bg-[url('../public/images/2.jpg')] rounded-full mx-auto z-10" ></div>
        <div className="contact my-8">
          <div className="uppercase text-white">Contact</div>
          <div className="contactList">
            {
              postContent.map((post)=>{
                return <Contacter post={post}/>
              })
            }
          </div>
        </div>
        <div className="expertise">
          <div className="uppercase text-white py-5">expertise</div>
          <div className="expertiseList">
            {
              PostExpertise.map((postE)=>{
                return <Expertise postE={postE}/>
              })
            }
          </div>
           
        </div>
        <div className="persioner my-3">
          <h2>PERSONAL SKILL</h2>
          <Persioner/>
        </div>
    </div>
  )
}

export default Contact