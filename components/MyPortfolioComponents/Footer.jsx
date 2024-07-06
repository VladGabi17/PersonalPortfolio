import { FooterEngagement, FooterSiteMap, FooterBrand } from "@components";

const Footer = () => {
  return (
    <footer className="bg-white container lg:px-36 md:px-10 sm:px-14 py-12  ">
      <FooterEngagement />
      <hr className="my-6 border-gray-200 md:my-10"></hr>
      <FooterSiteMap />
      <hr className="my-6 border-gray-200 md:my-10"></hr>
      <FooterBrand />
    </footer>
  );
};

export default Footer;