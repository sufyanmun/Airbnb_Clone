import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-grey-100 text-grey-800">
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Cancellation options</p>
        <p>Investors</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Visit our community forum</p>
        <p>Combating discrimination</p>
        <p>Careers</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">HOST</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>How to host responsibly</p>
      </div>
      <div className="space-y-4 text-xs text-grey-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Newsroom</p>
      </div>
    </div>
  );
}

export default Footer;
