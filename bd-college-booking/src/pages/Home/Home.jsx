import { useState } from "react";
import "./Home.css"
import CollegeCard from "./CollegeCard";
import CollegeImageGallery from "./CollegeImageGallary";
const Home = () => {
    const allColleges = [
        {
            id: 1,
            collegename: "BMS College",
            clgimage: "https://i.ibb.co/NjXLXqX/image.png",
            admission_date: "2023-08-15",
            events: "Annual Fest, Technical Symposium",
            research_history: "Established in 1990, focused on Engineering research",
            sports: "Football, Basketball, Cricket"
        },
        {
            id: 2,
            collegename: "BMS College",
            clgimage: "https://i.ibb.co/NjXLXqX/image.png",
            admission_date: "2023-08-15",
            events: "Annual Fest, Technical Symposium",
            research_history: "Established in 1990, focused on Engineering research",
            sports: "Football, Basketball, Cricket"
        },
        {
            id: 3,
            collegename: "BMS College",
            clgimage: "https://i.ibb.co/NjXLXqX/image.png",
            admission_date: "2023-08-15",
            events: "Annual Fest, Technical Symposium",
            research_history: "Established in 1990, focused on Engineering research",
            sports: "Football, Basketball, Cricket"
        },
        {
            id: 4,
            collegename: "BMS College",
            clgimage: "https://i.ibb.co/NjXLXqX/image.png",
            admission_date: "2023-08-15",
            events: "Annual Fest, Technical Symposium",
            research_history: "Established in 1990, focused on Engineering research",
            sports: "Football, Basketball, Cricket"
        },
    ]
    const [searchQuery, setSearchQuery] = useState("");
    const [colleges, setColleges] = useState(allColleges);

    const onSearch = (query) => {
        // Here, you should implement the logic to filter colleges based on the search query.
        // For this example, let's assume you have a list of colleges stored in a constant `allColleges`.
        // You can filter the colleges based on the `query` and update the `colleges` state accordingly.
        const filteredColleges = allColleges.filter((college) =>
            college.collegename.toLowerCase().includes(query.toLowerCase())
        );
        setColleges(filteredColleges);
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };
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
                    {colleges.map((college, index) => (
                        <CollegeCard key={index} college={college} />
                    ))}
                </div>
            </div>
            <section>
                <CollegeImageGallery></CollegeImageGallery>
            </section>
        </div>
    );
};

export default Home;