import './footer.css';
import logo from '../../assets/logo.png'
import git from '../../assets/git.png'
import api from '../../assets/Api.png'


function Footer(){
    return(
        <div className="footer">
                <div className="footer_content">
                        <div className="footer-contacts">
                            <img className="logo_footer" src= {logo}/>
                            <p>It's all about your dreams.</p>
                        </div>

                        <div className="footer_social_media">
                            <a href="https://github.com/carlos-venancio" target="_blank" class="footer-link" >
                            <img className="git_footer" src= {git}/>Carlos
                                
                            </a>
                        </div>
                                
                        <div className="footer_social_media">
                            <a href="https://github.com/PauloBezmon1" target="_blank" class="footer-link" >
                            <img className="git_footer" src= {git}/>Paulo
                            </a>
                        </div>

                        <div className="footer_social_media">
                            <a href="https://newsdata.io/" class="footer-link" >
                            <img className="api_footer" src= {api} title='API'/>
                            </a>
                        </div>

                </div>
                        <div className="footer_copyright">
                           <p> Copyright @ 2023 | BNN | Todos os direitos reservados</p>
                        </div>
        </div>
    )
}

export default Footer;