import { useEffect, useState } from "react";
import "./Home.css"
import CollegeCard from "./CollegeCard";
import CollegeImageGallery from "./CollegeImageGallary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ResearchPapersSection from "./ResearchPaperSection";
import ReviewSection from "./ReviewSection";
const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [colleges, setColleges] = useState([]);
    //const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(' https://college-booking-rosy.vercel.app/colleges')
            .then(response => response.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);
    const onSearch = (query) => {
        // Here, you should implement the logic to filter colleges based on the search query.
        // For this example, let's assume you have a list of colleges stored in a constant `allColleges`.
        // You can filter the colleges based on the `query` and update the `colleges` state accordingly.
        const filteredColleges = colleges.filter((college) =>
            college.collegename.toLowerCase().includes(query.toLowerCase())
        );
        setColleges(filteredColleges);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };
    const allColleges = colleges.slice(0, 3);
    const gallery = colleges.slice(0, 5);
    return (
        <div>
            <div className="container mx-auto mt-4">
                <div className="w-full flex md:w-1/3 mx-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full border-2 border-blue-500 rounded p-2"
                        placeholder="Search for a college name"
                    />
                    <button
                        onSubmit={handleSearch}
                        type="submit"
                        className="bg-white text-blue-500 font-medium py-2 px-4 rounded-md hover:bg-blue-100"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allColleges.map((college, index) => (
                        <CollegeCard key={index} college={college} />
                    ))}
                </div>
            </div>
            <section>
                <div className="container  mx-auto mt-8 mb-20">
                    <h2 className="text-2xl font-bold mb-4 text-center"> Graduation Day</h2>
                    <div className="hidden md:block">
                        <Swiper
                            slidesPerView={2.3}
                            spaceBetween={15}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper mb-24 ml-10 max-w-[1500px]"
                        >
                            {gallery.map((college, index) => (
                                <SwiperSlide >
                                    <CollegeImageGallery key={index} college={college}></CollegeImageGallery>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    <div className="block md:hidden">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper mb-24 ml-10 max-w-[1500px]"
                        >
                            {gallery.map((college, index) => (
                                <SwiperSlide >
                                    <CollegeImageGallery key={index} college={college}></CollegeImageGallery>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


            </section >
            <section>
                <div className="container mx-auto px-4 flex justify-center flex-wrap gap-2">
                    {allColleges.map((college, index) => (
                        <div key={index} className="mb-8 w-[450px] p-4  ">
                            <h1 className="text-3xl text-blue-950 font-bold mb-4">{college.collegename}</h1>
                            <ResearchPapersSection collegeName={college.collegename} researchPapers={college.research_papers} />
                           
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
                    {allColleges.map((college, index) => (
                        <div key={index} className="mb-8 w-[450px] p-4  ">
                            
                            <ReviewSection collegeName={college.collegename} reviews={college.reviews} />
                        </div>
                    ))}
                </div>
            </section>
        </div >
    );
};

export default Home;