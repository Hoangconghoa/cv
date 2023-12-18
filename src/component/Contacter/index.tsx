
type TContacter = {
    lable : string,
    content : string
}
const Contacter = ({ post }:{ post: TContacter}) => {
    const dotWhite = {
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'inline-block'  
    }
  return (
    <div className="flex my-3 mx-3">
            <span style={dotWhite} className="my-2 "></span>
            <div  className="px-7">
                <p>{post.lable}</p>
                <p>{post.content}</p>
            </div>
          </div>
  )
}

export default Contacter