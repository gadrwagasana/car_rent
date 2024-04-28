import { SitHero } from "@/components/site/home/hero/hero";
import { Site_explore_car } from "@/components/site/home/site_explore_car";
import { Site_popular_Car } from "@/components/site/home/site_popular_products";

const Home_page = () => {
  return ( 
    <section className=" w-full px-1 lg:p-2 space-y-6">
      <div>
        <SitHero />
      </div>
      <Site_popular_Car/>
      <Site_explore_car/>
      <div className=" h-screen w-full">
        Other hello
      </div>
    </section>
   );
}
 
export default Home_page;