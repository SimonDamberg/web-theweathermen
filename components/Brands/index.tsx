import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import technologiesData from "./technologiesData";

const Brands = () => {
  return (
    <>
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp bg-gray-light dark:bg-gray-dark"
              data-wow-delay=".1s">
              <div><h2 className="pt-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">API:s</h2></div>
              <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-16">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp bg-gray-light dark:bg-gray-dark"
            data-wow-delay=".1s"
          >
            <div><h2 className="pt-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">Frameworks</h2></div>
            <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
            {technologiesData.map((techs) => (
              <SingleBrand key={techs.id} brand={techs} />
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[140px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-full opacity-100 grayscale-0 transition hover:opacity-70 hover:grayscale dark:opacity-100 dark:hover:opacity-60"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
