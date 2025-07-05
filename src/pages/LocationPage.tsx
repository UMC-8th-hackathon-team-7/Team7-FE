import MapComponent from "@/components/Map";
import { Header } from "@/components/commons/Header";

const LocationPage = () => (
  <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
    <Header title="내 위치 지도" />
    <MapComponent />
  </div>
);

export default LocationPage;