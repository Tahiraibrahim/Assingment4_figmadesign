import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div>
      <section>
        <div className="mydiv">
          <h1 className="myh1">Hi, I am John,</h1>
          <h1 className="myh2">Creative Technologist</h1>
          <div>
            <Image
              className="myimage"
              src={"/image.png"}
              alt={"image"}
              width={270}
              height={100}
            />
          </div>

          <p className="myp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Ducimus blanditiis nobis soluta quia doloribus,
            <br /> ipsa iste beatae iure error, veniam quos excepturi mollitia!
            <br />
            Exercitationem itaque eos, enim tempora repellendus earum?
          </p>
          <button className="button ">Download Resume</button>
        </div>
      </section>
    </div>
  );
}

export default Header;