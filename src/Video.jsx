import React, { useRef, useState} from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
{/* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@merrickhanna/video/6930388941518507270" data-video-id="6930388941518507270" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@merrickhanna" href="https://www.tiktok.com/@merrickhanna">@merrickhanna</a> <p>@ajani.huff  is crazy! 🤯</p> <a target="_blank" title="♬ 原聲 - Mj.无名氏" href="https://www.tiktok.com/music/原聲-6650702085941627654">♬ 原聲 - Mj.无名氏</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> */ }
function Video({source,likes}) {
    const [playing, upPlaing] = useState(true);
    const thisVid = useRef(null);

    const play_pauseThis = () => {
        if (playing) {
            thisVid.current.play();
            upPlaing(false)
        } else {
            thisVid.current.pause();
            upPlaing(true)
        }
    }

    return (
        <>
            <div className='video'>
                <video ref={thisVid} onClick={play_pauseThis} className='circle' loop src={source}></video>
                <div className='VideoFooter'>
                <VideoFooter/>
                </div>
                <div className="VideoSidebar">
                <VideoSidebar likes={likes}/>
                </div>
            </div>
        </>
    )
}

export default Video
