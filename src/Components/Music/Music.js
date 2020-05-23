import React from 'react';
import './Music.css';

function Music () {
    return(
      <div className='Music'>
            
      <div className='Word_Pop'>
        <h4 className='bold_word'>SPOTIFY</h4>
        <p>Browse my collection of music and artists that have a special place in my private music playlist for years - I've got some tracks you might also like or end up adding to your own</p>
        {/* <h4 className='bold_word' id='word2'>HIPHOP</h4>
        <h4 className='bold_word' id='word3'>UK RAP</h4>
        <h4 className='bold_word' id='word4'>AFRO</h4> */}
      </div>

      <iframe alt="spotify playlist" src="https://open.spotify.com/embed/playlist/3pJLGaWS1HLm2DZfUClTQ3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    </div>
    )
}

export default Music