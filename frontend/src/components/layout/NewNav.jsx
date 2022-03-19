import { Link } from "react-router-dom";
import Styles from "./Newnav.module.css";
import votebox from "../../assets/vote.png";
import mark_slim from "../../assets/mark_slim.png";

function Newnav() {

    return (
        <div >
            <div className={Styles.outbox}></div>
            <div>
                <img src={mark_slim}  alt="mark" className={Styles.mark}></img>
                <Link to="/" className={Styles.title}>POLLING</Link>
            </div>

                {/* <Link to="/login" className={Styles.hamNav1}></Link> */}
            <div>
                <button className={Styles.hamNav1}></button>
                <button className={Styles.hamNav2}></button>
                <button className={Styles.hamNav3}></button>
            </div>
            <div className={Styles.user}>
                <div className={Styles.userNav}>
                    <Link to="/" className={Styles.text}> Home&nbsp; </Link>
                    <Link to="/login" className={Styles.text}> Login&nbsp; </Link>
                    <Link to="/notice" className={Styles.text}> FAQ </Link>
                </div>
            </div>
            <div className={Styles.poll}>
                <div className={Styles.pollNav}>
                    <Link to="/polllist" className={Styles.text} style={{textDecoration: 'none'}}> POLL&nbsp; </Link>
                    <Link to="/hall" className={Styles.text} style={{textDecoration: 'none'}}> HALL&nbsp; </Link>
                    <Link to="/history" className={Styles.text} style={{textDecoration: 'none'}}> History </Link>
                </div>
            </div>


        </div>
    );
}

export default Newnav;