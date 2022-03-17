import "../../css/main.css";
import "./Footer.css";
import { footerData } from "./FooterData";

export const Footer = () => {
    return(
        <footer className="footer flex flex-justify-space-around flex-align-center pdt-2 pdb-2">
            <ul className="flex flex-column flex-gap-0-5 list-style-none m-1">
              <h5 className="title font-bold">Easy Mart</h5>
              <li><a className="links-footer" href="/">Contact Us</a></li>
              <li><a className="links-footer" href="/">About Us</a></li>
              <li><a className="links-footer" href="/">Careers</a></li>
              <li><a className="links-footer" href="/">Location</a></li>
            </ul>

            {
              footerData.map((item,index) => {
                const { title, links } = item;
                return(
                  <ul className="flex flex-column flex-gap-0-5 list-style-none m-1" key={index}>
                    <h5 className="title-footer">{title}</h5>
                      {
                        links.map((item,index) => {
                          const { link, linkText } = item;
                          return(
                            <li key={index}><a className="links-footer" href="/">{linkText}</a></li>
                          )
                        })
                      }
                  </ul>
                )
              })
            }
        </footer>
    )
}