import React from "react";
import t from "prop-types";

export default function Footer() {
  return (
    <footer
      className="flex p-10 justify-between mt-20"
      style={{ background: "#F4F7F6" }}
    >
      <div className="w-1/5">
        <FooterHeading>Download App</FooterHeading>
        <div className="flex" style={{gap: '1rem'}}>
          <FooterIcon
            alt="Apple Icon"
            icon={require("../assets/icons/apple.svg")}
          />
          <FooterIcon
            icon={require("../assets/icons/google-play-store.svg")}
            alt="Play Store"
          />
        </div>
      </div>
      <div className="flex-1 text-xs px-5">
        <p className="opacity-50">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        </p>
        <article class="flex w-full mt-10 text-primary justify-center">
          <span className="px-2">Lorem ipsum dolor sit amet</span>
          <span className="px-2">Lorem ipsum dolor sit amet</span>
          <span className="px-2">Lorem ipsum dolor sit amet</span>
        </article>
      </div>
      <div className="w-1/5 flex flex-col items-end">
        <FooterHeading>Connect Us</FooterHeading>
        <div className="flex" style={{gap: '1rem'}}>
          <FooterIcon
            icon={require("../assets/icons/twitter.svg")}
            alt="Twitter"
          />
          <FooterIcon
            icon={require("../assets/icons/facebook.svg")}
            alt="Facebook"
          />
          <FooterIcon
            icon={require("../assets/icons/instagram.svg")}
            alt="Facebook"
          />
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }) {
  return <span className="text-primary inline-block mb-4">{children}</span>;
}
FooterHeading.propTypes = { children: t.node.isRequired };

function FooterIcon(props) {
  return (
    <figure className="p-3 rounded-full flex justify-center items-center bg-egray">
      <img className="w-8 h-8" src={props.icon} alt={props.alt} />
    </figure>
  );
}

FooterIcon.propTypes = {
  icon: t.string.isRequired
};
