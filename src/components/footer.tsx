import Image from "next/image";
import * as React from "react";
import '@/styles/footer.css';

export function Footer() {
  return (
    <div>
      <div className="footer-content">
        <div className="footer-upper">
          <div className="upper-first-col">
            <div className="upper-first-col-logo">
              <span>Panto</span>
            </div>
            <div className="upper-first-col-text">
              <p>
                The advantage of hiring a workspace with us is that givees you
                comfortable service and all-around facilities.
              </p>
            </div>
          </div>
          <div className="upper-second-col">
            <div className="col-title">
              <span>Services</span>
            </div>
            <div className="col-list">
              <div className="col-list-item">
                <a href="#">Email Marketing</a>
              </div>
              <div className="col-list-item">
                <a href="#">Campaigns</a>
              </div>
              <div className="col-list-item">
                <a href="#">Branding</a>
              </div>
            </div>
          </div>
          <div className="upper-third-col">
            <div className="col-title">
              <span>Furniture</span>
            </div>
            <div className="col-list">
              <div className="col-list-item">
                <a href="#">Beds</a>
              </div>
              <div className="col-list-item">
                <a href="#">Chair</a>
              </div>
              <div className="col-list-item">
                <a href="#">All</a>
              </div>
            </div>
          </div>
          <div className="upper-fourth-col">
            <div className="col-title">
              <span>Follow Us</span>
            </div>
            <div className="col-list">
              <div className="col-list-item">
                <div className="col-list-image">
                  <Image
                    src="/assets/icons/facebook.svg"
                    width={20}
                    height={20}
                    alt="facebook"
                  />
                </div>
                <a href="#">Facebook</a>
              </div>
              <div className="col-list-item">
                <div className="col-list-image">
                  <Image
                    src="/assets/icons/twitter.svg"
                    width={20}
                    height={20}
                    alt="twitter"
                  />
                </div>
                <a href="#">Twitter</a>
              </div>
              <div className="col-list-item">
                <div className="col-list-image">
                  <Image
                    src="/assets/icons/instagram.svg"
                    width={20}
                    height={20}
                    alt="instagram"
                  />
                </div>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="lower-first-col">
            <span>Copyright © 2021</span>
          </div>
          <div className="lower-second-col">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
