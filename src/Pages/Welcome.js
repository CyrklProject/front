import React from 'react';
import './welcome.css';
import { Button } from '../components/Button/Button';
import { Navbar } from '../components/Navbar/Navbar';

export default function Welcome() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="welcome-background">
          <div className="content-wrapper">
            <div className="title-welcome">
              <h2>BIENVENUE</h2>
            </div>

            <div className="content">
              <div className="content-left">
                <p className="sub-title">Why do we use it?</p>
                <p className="content-para">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like readable English.
                </p>
              </div>
              <div className="content-right">
                <p className="content-para-right">
                  Soyez les premiers à découvrir CYRKL, l&apos;application des professionnels de
                  haut niveau.
                </p>
                <a href="/Registration">
                  <Button
                    onClick={() => {
                      console.log('working');
                    }}
                    type="button"
                    buttonStyle="btn--primary--solid"
                    buttonSize="btn--medium">
                    S&apos;ABONNER
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
