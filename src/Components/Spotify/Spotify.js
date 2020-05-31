import React from 'react';
import './Spotify.scss';

function Spotify () {
    return(
      <div className='Music'>
            
      <div className='Half'>
      <div className="playlist">
        <h1>My Playlist</h1>
        <iframe alt="spotify playlist" src="https://open.spotify.com/embed/playlist/3pJLGaWS1HLm2DZfUClTQ3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>

      <div className='Half'>
        <div className="artists">
        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:5INjqkS1o8h1imAzPqGZBb&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0"  allowtransparency="true"></iframe>

        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>

        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3jOstUTkEu2JkjvRdBA5Gu&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>
        
        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3VNITwohbvU5Wuy5PC6dsI&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>

        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3bnpcWBcvlfq4hPFJjNPbz&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:"none", overflow:"hidden"}} allowtransparency="true"></iframe>
        </div>
      </div>

    </div>
    )
}

export default Spotify;