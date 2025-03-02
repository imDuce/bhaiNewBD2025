import React from "react";
// import "./scroller.css";
import "./scr.scss";

import pic1 from "../../assets/ishiKidImgs/19.jpg";
import pic2 from "../../assets/ghochu101/2_1.jpg";
import pic3 from "../../assets/ishiKidImgs/15.jpg";
import pic4 from "../../assets/ghochu101/4.jpg";
import pic5 from "../../assets/ghochu101/5.jpg";
import pic6 from "../../assets/ghochu101/6.jpg";
import pic7 from "../../assets/ghochu101/7.jpg";
import pic8 from "../../assets/ghochu101/8.jpg";
import pic9 from "../../assets/ishiKidImgs/11.jpg";
import pic10 from "../../assets/ghochu101/10.jpg";
import pic11 from "../../assets/ishiKidImgs/2.jpg";

const ScrollerImagePage = () => {
  return (
    <div className="SIP">
      <div className="block-center-center">
        <main className="inline content-full">
          <section className="Hero inline gap-2">
            <div className="Wrapper block content-3">
              <div className="Visual block-center-center">
                <picture className="SecondPic">
                  <source
                    srcSet={pic11}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic11} type="image/avif" />
                  <source
                    srcSet={pic11}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic11} alt="Celebrating Life Together" />
                </picture>

                <picture className="ThirdPic">
                  <source
                    srcSet={pic10}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic10} type="image/avif" />
                  <source
                    srcSet={pic10}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic10} alt="The Art of Giving" />
                </picture>

                {/* experimentation with fourth pic  */}

                <picture className="FourthPic">
                  <source
                    srcSet={pic9}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic9} type="image/avif" />
                  <source
                    srcSet={pic9}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic9} alt="Celebrating Life Together" />
                </picture>

                <picture className="FifthPic">
                  <source
                    srcSet={pic7}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic7} type="image/avif" />
                  <source
                    srcSet={pic7}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic7} alt="Celebrating Life Together" />
                </picture>

                <picture className="SixthPic">
                  <source
                    srcSet={pic8}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic8} type="image/avif" />
                  <source
                    srcSet={pic8}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic8} alt="Celebrating Life Together" />
                </picture>

                <picture className="SeventhPic">
                  <source
                    srcSet={pic6}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic6} type="image/avif" />
                  <source
                    srcSet={pic6}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic6} alt="Celebrating Life Together" />
                </picture>

                <picture className="EighthPic">
                  <source
                    srcSet={pic5}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic5} type="image/avif" />
                  <source
                    srcSet={pic5}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic5} alt="Celebrating Life Together" />
                </picture>

                <picture className="NinethPic">
                  <source
                    srcSet={pic3}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic3} type="image/avif" />
                  <source
                    srcSet={pic3}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic3} alt="Celebrating Life Together" />
                </picture>

                <picture className="TenthPic">
                  <source
                    srcSet={pic4}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic4} type="image/avif" />
                  <source
                    srcSet={pic4}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic4} alt="Celebrating Life Together" />
                </picture>

                <picture className="EleventhPic">
                  <source
                    srcSet={pic2}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic2} type="image/avif" />
                  <source
                    srcSet={pic2}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic2} alt="Celebrating Life Together" />
                </picture>

                <picture className="TwelvethPic">
                  <source
                    srcSet={pic1}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic1} type="image/avif" />
                  <source
                    srcSet={pic1}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic1} alt="Celebrating Life Together" />
                </picture>
              </div>
            </div>

            <div className="Content block">
              <div id="Genesis" className="FirstLockup block-center-start">
                <div className="block gap-3">
                  <h3>Genesis</h3>
                  <div className="subhead">From the very first frame,</div>
                  <p>your story was destined to be legendary.</p>
                </div>
              </div>
              <div id="Behold" className="SecondLockup block-center-start">
                <div className="block gap-3">
                  <h3>Behold !</h3>
                  <div className="subhead">
                    A heart that protects, a soul that cares,
                  </div>
                  <p>A superhero in the making.</p>
                </div>
              </div>
              <div
                id="CutestTroublemaker"
                className="ThirdLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Otouto</h3>
                  <div className="subhead">
                    A brother, a best friend, a forever player in my game of
                    life
                  </div>
                  <p>simply irreplaceable !</p>
                </div>
              </div>
              {/* experimentation with fourth pic  */}

              <div id="Wanderlust" className="FourthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Virtuoso</h3>
                  <div className="subhead">Editing reality like a master,</div>
                  <p>turning moments into masterpieces.</p>
                </div>
              </div>

              <div id="Ethereal" className="FifthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Pixel Perfect</h3>
                  <div className="subhead">No errors, no bugs</div>
                  <p>—just pure perfection in the way you are.</p>
                </div>
              </div>

              <div id="Luminescense" className="SixthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Otaku Spirit</h3>
                  <div className="subhead">Born with anime in your veins,</div>
                  <p>dreaming beyond the ordinary.</p>
                </div>
              </div>

              <div id="ARTISTRY" className="SeventhLockup block-center-start">
                <div className="block gap-3">
                  <h3>Sensei</h3>
                  <div className="subhead">Evolving...</div>
                  <p>into a greater version of yourself.</p>
                </div>
              </div>

              <div id="SWEETNESS" className="EighthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Soulbound</h3>
                  <div className="subhead">More than a brother</div>
                  <p>our bond is an unbreakable co-op mode</p>
                </div>
              </div>

              <div id="GLOW" className="NinethLockup block-center-start">
                <div className="block gap-3">
                  <h3>Celestial Glow </h3>
                  <div className="subhead">
                    Eyes that sparkle like stolen candy,
                    {/* can be changed */}
                  </div>
                  <p> a heart as soft as a teddy.</p>
                </div>
              </div>

              <div id="Cynophile" className="TenthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Legacy</h3>
                  <div className="subhead">
                    Your story is still being written,
                  </div>
                  <p>and the best chapters are yet to come.</p>
                </div>
              </div>

              <div id="Wayfarer" className="EleventhLockup block-center-start">
                <div className="block gap-3">
                  <h3>Eternal Bond </h3>
                  <div className="subhead">
                  No matter the distance or time,
                  </div>
                  <p>you'll always be my greatest teammate.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScrollerImagePage;
