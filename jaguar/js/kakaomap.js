//visual
$(document).ready(function(){

    //카카오맵에 표시될 DOM지정
    var container = document.getElementById('map');

    //표시할 지역의 경도, 위도, 줌레벨 설정
    var options = {
        center: new daum.maps.LatLng(37.5676617, 126.9830813),
        level: 3
        };

    //map 인스턴스 생성
    var map = new daum.maps.Map(container, options);

    // 마커가 표시될 위치 
    var markerPosition  = new daum.maps.LatLng(37.5676617, 126.9830813); 

    // 마커를 생성
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);

    //드래그기능 활성화
    setDraggable(true);           
        function setDraggable(draggable) {
                map.setDraggable(draggable);    
    }

    //줌기능 활성화
        setZoomable(false);
        function setZoomable(zoomable) {          
            map.setZoomable(zoomable);    
        }

           
});