import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Product",
    items: [
      { name: "Desktop PC", link: "/services" },
      { name: "Laptops", link: "/services" },
      { name: "Printers", link: "/services" },
      { name: "CCTV", link: "/services" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Home", link: "/" },
      { name: "Services", link: "/services" },
      { name: "Contact", link: "/contact" },
      { name: "About us", link: "/aboutus" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding and Map */}
          <div>
            <Typography
              variant="h5"
              className="text-4xl italic text-orange-500 mb-5"
            >
              <a href="/">
                Axiom <span className="text-white">Infosys</span>
              </a>
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.2611892429823!2d73.17639890000001!3d22.3437646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8d5e2c662b3%3A0xe86a4eda06a9ab33!2sAxiom%20Infosys!5e0!3m2!1sen!2sin!4v1723300708922!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Links Section */}
          <div className="flex justify-around">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography
                  variant="small"
                  className="text-gray-400 uppercase font-medium mb-4"
                >
                  {title}
                </Typography>
                <ul>
                  {items.map((link, idx) => (
                    <li key={idx}>
                      <Typography
                        as="a"
                        href={link.link}
                        className="block py-1.5 font-normal hover:text-blue-gray-400 transition-colors"
                      >
                        {link.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Developer Section */}
          <div className="flex flex-col items-center md:items-start">
            <Typography className="flex items-center uppercase font-medium text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Developed By
            </Typography>
            <p>
              {/* <a
                href="https://www.linkedin.com/in/jaynish-shah-577203322/"
                className="text-neutral-400 hover:text-white transition-colors"
              > */}
              <b>Jaynish Shah</b>
              <span className="social-media-creater flex">
                {" "}
                <a
                  className="mr-4 text-neutral-600 dark:text-neutral-200"
                  href="https://www.linkedin.com/in/jaynish-shah-577203322/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  className="text-neutral-600 dark:text-neutral-200"
                  href="https://github.com/shahjaynish"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </span>
              {/* </a> */}
            </p>
            <br />
            <p>
              {/* <a
                href="https://www.linkedin.com/in/hbsolanki/"
                className="text-neutral-400 hover:text-white transition-colors"
              > */}
              <b>Hardik Solanki</b>
              <span className="social-media-creater flex">
                {" "}
                <a
                  className="mr-4 text-neutral-600 dark:text-neutral-200"
                  href="https://www.linkedin.com/in/hbsolanki/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  className="text-neutral-600 dark:text-neutral-200"
                  href="https://github.com/hbsolanki"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </span>
              {/* </a> */}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <Typography className="text-center text-gray-400">
            &copy; {currentYear} <a href="/">Axiom Infosys</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
