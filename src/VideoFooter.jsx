import React from 'react';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
function VideoFooter() {
    return (
        <div>
            <p>@jawad0307</p>
            <p>#love #topidrama #forYouPage</p>
            <p>#Passion #topidrama #forYouPage</p>
            <div className="ticker">
                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <h1>Chal to mera puttar 6uti kar</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className='music_icon'>
                <MusicNoteIcon />
                <span className='rotating_circle'><i class="fas  fa-2x fa-compact-disc"></i>
                </span>
            </div>
        </div>
    )
}

export default VideoFooter
