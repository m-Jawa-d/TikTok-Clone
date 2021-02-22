import {React,useState} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar({likes}) {
    const [like, upLike]=useState(true);
    const [no, upNo]=useState(likes)
    return (
        <div>
            {like?<FavoriteBorderIcon onClick={()=>{return(upLike(false),upNo(no+1))}} fontSize='large'/>:<FavoriteIcon onClick={()=>{return(upLike(true),upNo(no-1))}} fontSize='large'/>}
            <p>{no}</p>
            <ChatIcon fontSize='large'/>
            <p>233</p>
            <ShareIcon fontSize='large'/>
            <p>5k</p>
        </div>
    )
}

export default VideoSidebar
