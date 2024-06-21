import "./Footer.css"
export default function Footer() {
    return(
    <div className="footer-bg">
        <div className="footer-div">
              <h1 className="text-center">LET'S BUILD SOMETHING <br /> AMAZING TOGETHER</h1>
              <div className="footer-button-div">
              <a href="#contact" className="footer-button" >Start a project</a>
              </div>
              <footer className="footer">
               <div className="footer-section">
                 <h2>NAVIGATION</h2>
                 <ul>
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#secondlines">FOR WHOM</a></li>
                  <li><a href="#works">WORKS</a></li>
                  <li><a href="#models">OUR MODELS</a></li>
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                 </ul>
               </div>
               <div className="footer-section">
                 <h2>CONTACT</h2>
                 <p>T: +998 (97) 777-01-46</p>
                 <p>F: +998 (95) 066-33-66</p>
                 <p>E: <a href="mailto:info@4dx.uz">info@4dx.uz</a></p>
               </div>
               <div className="footer-section">
                 <h2>ADDRESS</h2>
                 <p>Tashkent Yunusobod Shahriston street 3,14</p>
              </div>
             </footer>
         </div>
          <hr />
        <div className="text-center">
          <a href="https://4dx.uz/index.html" className="link-dx ">© Powered by 4DX 2024</a>
        </div>
    </div>
    )
}





