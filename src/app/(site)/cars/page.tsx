import { Car_card } from "@/components/my_ui/car_card";

const Cars_page = () => {
    return ( 
        <section className=" w-full px-2">
            <div>
                <h3 className=" font-semibold text-2xl">All <span className=" text-success">cars</span></h3>
                {/* cars */}
                <div className=' mt-3 space-x-2 grid max-lg:grid-cols-2 space-y-3 grid-cols-3'>
                    {[...Array(6)].map((items, index ) => (
                        <Car_card className=" w-[19rem] h-[26rem]" key={index + 1} product_amount={5000} car_image={["/images/8.jpg" , "/images/1.jpg", "/images/4.jpg"]} profile_image='/logo.png' profile_name='Rent car'/>
                    ))}
                </div>
            </div>
            <div className=" h-screen">
                bruno 
            </div>
            <div className=" h-screen">
                allen 
            </div>
        </section>
     );
}
 
export default Cars_page;