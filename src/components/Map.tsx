import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useWatchLocation from "@/hooks/useWatchLocation"; // 위치 추적 커스텀 훅
import { useUserStore } from "@/store/userStore";

const MapComponent = () => {
  const { currentUser } = useUserStore();
  const { location, error } = useWatchLocation({
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000,
  });

  const [mapCenter, setMapCenter] = useState({
    lat: 37.543684, 
lng: 126.951553,
  });

  useEffect(() => {
    if (location) {
      setMapCenter({
        lat: location.latitude,
        lng: location.longitude,
      });
    }
  }, [location]);

  if (!currentUser) {
    return (
      <div className="p-4 text-sm text-center text-gray-500">
        로그인한 사용자만 지도를 볼 수 있습니다.
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] rounded-md overflow-hidden shadow">
      <Map
        center={mapCenter}
        style={{ width: "100%", height: "100%" }}
        level={3}
      >
        {location && (
          <MapMarker position={mapCenter}>
            <div style={{ padding: "4px", color: "#000" }}>
              {currentUser.name}님, 여기에 계신가요?
            </div>
          </MapMarker>
        )}
      </Map>

      {/* 에러 메시지 표시 */}
      {error && (
        <div className="mt-2 text-sm text-red-500 text-center">
          위치 정보를 불러올 수 없습니다: {error}
        </div>
      )}
    </div>
  );
};

export default MapComponent;