import React from 'react';
import './styles.css';
import moment from 'moment';

function FooterBottom() {
    const ano = moment().year();

    return (
        <div className="footer-bottom">
            <div className="copyright">
                <span>© Copyright {ano}</span>
                <span>Design by Byte Seridó</span>
                <span>Created in React</span>
            </div>
        </div>
    );
}

export default FooterBottom;
