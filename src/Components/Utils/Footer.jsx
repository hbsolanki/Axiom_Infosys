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
              Axiom <span className="text-white">Infosys</span>
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
              <a
                href="https://www.linkedin.com/in/jaynish-shah-577203322/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <b>Jaynish Shah</b>
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/hbsolanki/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <b>Hardik Solanki</b>
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <Typography className="text-center text-gray-400">
            &copy; {currentYear} <a href="/">Axiom Infosys</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.299-1.857-.344-1.023-.047-1.351-.058-3.807-.058z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M11.999 5.815a6.184 6.184 0 100 12.368 6.184 6.184 0 000-12.368zm0 1.803a4.38 4.38 0 110 8.76 4.38 4.38 0 010-8.76zm6.486-.29a1.46 1.46 0 11-2.921 0 1.46 1.46 0 012.921 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
