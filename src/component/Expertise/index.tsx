
type TExpertise = {
    lable : string,
    quatity : number
}
const Expertise = ({postE} : {postE: TExpertise}) => {
      const dotYellow = {
        width: 10,
        height: 10,
        backgroundColor: '#f0ca0a',
        borderRadius: 10,
        display: 'inline-block'
    }
    const dotWhite = {
        width: 10,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'inline-block'  
    }
    const stars = [1,2,3,4,5]
  return (
    <div className='flex gap-16 mx-2 '>
        <div className="w-20"> {postE.lable}</div>
        <div className="">
            {
                stars.map((star)=>{
                    if(star> postE.quatity){
                        return <span className="mx-1" style={dotWhite}></span>
                    }
                    else{
                        return <span className="mx-1" style={dotYellow}></span>
                    }
                })
            }
        </div>
    </div>
  )
}

export default Expertise