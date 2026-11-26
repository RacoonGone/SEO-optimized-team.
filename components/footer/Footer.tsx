import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="content-container footer-content-container">
                <div className="center-container footer-center-container">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <a className="footer-logo" href="/" aria-label="Team home">
                                team<span>.</span>
                            </a>
                            <p>Collaboration platform<br />for modern team</p>
                        </div>

                        <div className="footer-column footer-company">
                            <h2>Company</h2>
                            <ul>
                                <li><a href="#product">Product</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#support">Support</a></li>
                            </ul>
                        </div>

                        <div className="footer-column footer-features">
                            <h2>Features</h2>
                            <ul>
                                <li><a href="#screen-sharing">Screen Sharing</a></li>
                                <li><a href="#mobile-apps">iOS &amp; Android Apps</a></li>
                                <li><a href="#file-sharing">File Sharing</a></li>
                                <li><a href="#user-management">User Management</a></li>
                            </ul>
                        </div>

                        <div className="footer-column footer-contact">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><a href="mailto:info@teamapp.com">info@teamapp.com</a></li>
                                <li><a href="tel:1800200300">1-800-200-300</a></li>
                                <li>1010 Sunset Blvd.<br />Palo Alto, California</li>
                            </ul>
                        </div>

                        <div className="footer-newsletter">
                            <h2>Stay up to date</h2>
                            <span className="footer-text">Subscribe to our newsletter</span>
                            <div className="footer-email-control">
                                <input id="footer-email" type="email" placeholder="Email" />
                                <button type="button" aria-label="Subscribe">
                                    <img src="/arrow-right.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <small>© Copyright Team Inc.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
