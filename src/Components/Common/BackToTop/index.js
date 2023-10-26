import React,{useState, useEffect} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './style.css';

function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.onscroll = function() {
            if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                setShowButton(true);
            }
            else{
                setShowButton(false);
            }
        }
    }, [onscroll]);

   const toTop =()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }

  return (
    <div className={showButton ? "back-to-top-true" : "back-to-top-false"} onClick={toTop}>
        <ArrowUpwardIcon/>
    </div>
  )
}

export default BackToTop;