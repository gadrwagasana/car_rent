import { SitHero } from "@/components/site/home/hero/hero";
import { Site_popular_Car } from "@/components/site/home/popular_products";

const Home_page = () => {
  return ( 
    <section className=" w-full px-1 lg:p-2 space-y-4">
      <div>
        <SitHero />
      </div>
      <Site_popular_Car/>
      <div className=" h-screen w-full">
        Other hello
      </div>
    </section>
   );
}
 
export default Home_page;