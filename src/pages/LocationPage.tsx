import MapComponent from "@/components/Map";
import { Header } from "@/components/commons/Header";
import { SectionHeader } from "@/components/commons/SectionHeader";
import TargetLocationList from "@/components/TargetLocationList";

const mockTargets = [
  {
    name: "이수성",
    imageUrl: "/icons/target.png",
    address: "서울특별시 마포구 마포대로",
    distance: "1km",
    updatedAgo: "5분 전",
  },
  {
    name: "이재형",
    imageUrl: "/icons/target.png",
    address: "서울특별시 마포구 신촌로",
    distance: "4km",
    updatedAgo: "9분 전",
  },
];

const LocationPage = () => (
  <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-6 bg-white min-h-screen">
    <Header title="지도" />
    <MapComponent />
    <SectionHeader title="위치 목록" />
    <div className="pt-0 px-2 pb-4">
    <TargetLocationList targets={mockTargets} />
  </div>
  </div>
);

export default LocationPage;