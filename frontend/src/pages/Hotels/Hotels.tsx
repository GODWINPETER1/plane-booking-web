import ExploreComponent from "../../components/hotel_components/explore/Explore";
import HospitalityComponent from "../../components/hotel_components/hospitality/Hosp";
import { Navbar } from "../../components/Layout/Navbar";

export default function Hotels () {

    return (
        <div className="font-sans min-h-screen bg-gray-100">
            <Navbar/>
            <ExploreComponent/>
            <HospitalityComponent/>
        </div>
        
    )

}