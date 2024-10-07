import {
  Footerfb,
  Footerin,
  Footerln,
  Footerlws,
  Footertw,
} from "../../Icons/Icons";
import LatestPost from "./LatestPost";

const Footer = () => {
  const latestPosts = [
    {
      imageUrl: "blog-footer-01.jpg",
      title: "I think really important to design with...",
      link: "blog-details.html",
    },
    {
      imageUrl: "blog-footer-02.jpg",
      title: "Recognizing the need is the primary...",
      link: "blog-details.html",
    },
  ];

  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* First Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="javascript:void(0)"
                className="mb-6 inline-block max-h-[100px]"
              >
                <Footerlws></Footerlws>
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <Footerfb></Footerfb>
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <Footertw></Footertw>
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <Footerin></Footerin>
                </a>
                <a
                  href="javascript:void(0)"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <Footerln></Footerln>
                </a>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Column */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Latest Blog Section */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                {latestPosts.map((post, index) => (
                  <LatestPost
                    key={index}
                    imageUrl={post.imageUrl}
                    title={post.title}
                    link={post.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
