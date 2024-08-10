export default function Company() {
  return (
    <div className="bg-white  sm:py-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <h2 className="text-center text-lg font-bold leading-8 text-gray-900">
          Service Brands
        </h2>
        <p className="text-center  font-serif leading-8 text-gray-900">
          We service all brands of Desktop and Laptop computers.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="apple"
            src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="hp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sv6WsbE6BaMx9bAfzpRluvtIWU_jZVZq7w&s"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Lenovo"
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/24/full/1684909628-1013.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Samsung"
            src="https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Asus"
            src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
