import { SitHero } from "@/components/site/home/hero/hero";

const Home_page = () => {
  return ( 
    <section className=" w-full px-1 lg:p-2">
      <div>
        <SitHero />
      </div>
      <div className=" h-screen w-full">
        Other hello
      </div>
    </section>
   );
}
 
export default Home_page;