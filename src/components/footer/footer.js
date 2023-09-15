import { Link } from "react-router-dom";
import './footer.css';

function Footer(){
    return(
        <div className="footer">
                <div className="footer_content">
                        <div className="footer-contacts">
                            <p>It's all about your dreams.</p>
                        </div>

                        <div className="footer_social_media">
                            <a href="https://github.com/carlos-venancio" class="footer-link" >
                                Github Carlos
                            </a>
                        </div>
                                
                        <div className="footer_social_media">
                            <a href="https://github.com/PauloBezmon1" class="footer-link" >
                                Github Paulo
                            </a>
                        </div>


                </div>

                <div className="footer_copyright">
                	<p> @2023 all rights reserve</p>
                </div>
        </div>
    )
}

export default Footer;