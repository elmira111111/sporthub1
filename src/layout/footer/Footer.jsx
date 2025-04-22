import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer2'>
        <div className="footer-overlay">
          <div className='container2'>
             <div className="footer-top">
              <div className="footer-logo">Logo</div>
            <div className="footer-ads">Разместить рекламу</div>
        </div>
        </div>
      </div>

      <div className="footer-links">
         <a href="#">Главная</a>
           <a href="#">Спорт</a>
          <a href="#">Рекламы</a>
      </div>

      <div className='footer-socials'>
        <a href="https://facebook.com" target='_blank' ><i className="bi bi-facebook" ></i></a>
        <a href="https://web.telegram.org/" target='_blank'><i className="bi bi-telegram"></i></a>
        <a href="https://instagram.com" target='_blank'><i className="bi bi-instagram"></i></a>
      </div>
      <div>
        <hr className='footer-line'/>
        <p className="footer-thanks">Спасибо что выбираете нас!</p>
      </div>
      
      </div>
      
    </footer>
  )
}

export default Footer
