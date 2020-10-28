import React from 'react';
import './css/NavBox.scss';
import { locaCtrl } from '../../../event/loca-ctrl';
import { FontSizes } from 'office-ui-fabric-react/lib/Styling';


interface INavBoxProps {
    items: Array<{
        title: string,
        content: string,
        url: string
    }>;
    width?: string;
    titleSize?: string;
}

export const NavBox: React.FC<INavBoxProps> = props => {
    return (
        <div id='footer-nav-container'>
            {props.items.map((item, i) => (
                <div className='foot-nav-item' key={i}
                    style={{
                        width: props.width || '25%',
                    }}>
                    <div className="nav-item-wraper"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.3s',
                            animationName: 'fadeIn',
                        }}>
                        <div className="fancybox-overlay">
                            <div className="fancy-box-img"></div>
                        </div>
                        <div className="fancybox-body">
                            <div className="fancybox-item">
                                <div className="item-icon" style={{
                                    width: '50px'
                                }}>
                                    {/* <img src=".././svg/ch1.svg" alt="" /> */}
                                </div>
                                <div className="item-title"
                                    style={ 
                                        {
                                            fontSize:props.titleSize || '2.1em'
                                        }
                                    }>
                                    <div>
                                        {item.title}
                                    </div></div>
                                <div className="item-content">
                                    <p>{item.content}</p>
                                </div>
                                <div className="item-foot">
                                    <a className="btn-default-alt" onClick={() => locaCtrl.navTo(item.url)}>Go to Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};