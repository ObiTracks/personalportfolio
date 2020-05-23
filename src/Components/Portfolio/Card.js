import React from 'react';
import './Card.css';
import goto_btn from '../../static/icon_continue.svg';

function Card() {
  return (
          <div className='Proj_card' id='card-1'>
            {/* <div className='.Proj_card_overlay'></div> */}
            <h4 className='Proj_card_bgtitle'>pass the plate</h4>

            <div className='Proj_card_half' id='info-1'>
              <div className='Proj_card_half_left'>
                <span className='Proj_card_half_tagcloud'>
                  <p className='tag'>HTML</p>
                  <p className='tag'>CSS</p>
                  <p className='tag'>PYTHON</p>
                  <p className='tag'>JINJA2</p>
                  <p className='tag'>GOOGLE APP ENGINE</p>
                </span>
              </div>
            </div>

            <div class='Proj_card_half' id='info-2'>
              <div className='Proj_card_half_right'>
                <div className="Proj_card_half_right_info">
                  <p className='Proj_card_half_right_info_date'>July 2019</p>
                  <h1 className='Proj_card_half_right_info_title'>Pass the Plate</h1>
                  <p className='Proj_card_half_right_info_body'>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum</p>
                </div>

                <div className='Proj_card_half_right_stats'>
                  <a href='#' class='Proj_card_half_right_stats_btn'>
                    <p id='p1'>Design Process</p>
                  </a>
                  <a href='#' class='Proj_card_half_right_stats_btn'>
                    <a id='p2'><img src={goto_btn}/></a>
                  </a>
                </div>

              </div>
            </div>
          </div>
    );
  }
  
  export default Card;