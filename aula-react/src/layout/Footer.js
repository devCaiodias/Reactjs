import { FaAmazon, FaAmazonPay, FaCcAmazonPay, FaFacebook, FaInstagram, FaJava, FaLinkedin, FaPython, FaReadme, FaTwitch, FaTwitter } from 'react-icons/fa'
import styles from './Footer.model.css'

function Footer() {
    return (
        <footer>
            <FaFacebook class="socialMidian"/>
            <FaInstagram class="socialMidian"/>
            <FaLinkedin class="socialMidian"/>
            <FaTwitter class="socialMidian"/>
            <FaTwitch class="socialMidian"/>
            <FaPython class="socialMidian"/>
            <FaJava class="socialMidian"/>
            <FaReadme class="socialMidian"/>
            <FaAmazon class="socialMidian"/>
            <FaAmazonPay class="socialMidian"/>
            <FaCcAmazonPay class="socialMidian"/>
        </footer>
    )
}

export default Footer;