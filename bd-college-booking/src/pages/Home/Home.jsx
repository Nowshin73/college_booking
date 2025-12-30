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
import Banner from "../../components/banner/Banner";
const Home = () => {
    const [colleges, setColleges] = useState([]);
    //const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://college-booking-rosy.vercel.app/colleges')
            .then(response => response.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);
    const allColleges = colleges.slice(0, 3);

    const [searchQuery, setSearchQuery] = useState("");
    const [filtercolleges, setFilteredColleges] = useState(allColleges);
    const onSearch = (query) => {
        if (query === "") {
            setFilteredColleges(allColleges);
        }
        else{
            const Colleges = colleges.filter((college) =>
                college.collegename.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredColleges(Colleges);
        }

    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };
   
    const gallery = colleges.slice(0, 5);
    return (
        <div className="font-serif">
            {/* Banner section */}
            <Banner></Banner>

            {/* Search Section Added */}
            <section className=" py-10">

            <div className="container mx-auto py-14 ">
                <div className="w-full flex md:w-1/3 mx-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full border-2 border-blue-500  rounded p-2"
                        placeholder="Search for a college name"
                    />
                    <button
                        onSubmit={handleSearch}
                        type="submit"
                        className="btn-secondary shadow-2xl  self-center text-white border-2 border-[#172554] font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-black bg-[#172554]"
                    >
                        Search
                    </button>
                </div>
            </div>
            {/* Search Section Ends */}
           { searchQuery? ( <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtercolleges.map((college, index) => (
                        <CollegeCard key={index} college={college} />
                    ))}
                </div>
            </div>)
            :
            ( <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allColleges.map((college, index) => (
                        <CollegeCard key={index} college={college} />
                    ))}
                </div>
            </div>)
            }
            </section>
          
            <section>
                    <h2 className="text-5xl font-bold my-20 text-center"> Graduation Day</h2>
                <div className="container bg-[#f1f1f1] mx-auto ">
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
                     <h2 className="text-5xl font-bold my-20 text-center"> Research Papers</h2>
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
                <h2 className="text-5xl font-bold my-20 text-center">Reviews</h2>
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2 ">
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