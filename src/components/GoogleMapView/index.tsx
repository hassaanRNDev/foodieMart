import React, { useMemo, useRef, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { useOrderTracking } from "@/store/OrderTracking";
import { Dimensions } from "react-native";
import { calculateDistance } from "@/utils";

const { height, width } = Dimensions.get("window");

type Location = {
  lat: number;
  long: number;
  distance?: number;
};

type FinalDestination = {
  lat?: number;
  long?: number;
};

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const GoogleMapView = ({
  location,
  heading,
}: {
  location: Location;
  heading: number;
}) => {
  const activeOrders = useOrderTracking((state) => state?.activeOrders);

  const ref = useRef(null);

  let customerLocations = activeOrders?.map((user) => {
    return {
      lat: user?.address?.lat,
      long: user?.address?.long,
    };
  });

  //console.log("customerLocations", JSON.stringify(activeOrders, null, 2));

  let destinations = useMemo(() => {
    let finalDestination: FinalDestination = {};
    let wayPoints: Location[] = [];

    if (customerLocations?.length === 1) {
      finalDestination = {
        lat: customerLocations?.[0]?.lat,
        long: customerLocations?.[0]?.long,
      };
    } else {
      // Calculate distances and add them to the locations array
      customerLocations.forEach((locationData) => {
        // @ts-ignore
        locationData.distance = calculateDistance({
          riderLat: location?.lat,
          riderLong: location?.long,
          destinationLat: locationData?.lat,
          destinationLong: locationData?.long,
        });
      });

      // @ts-ignore
      customerLocations.sort((a, b) => a?.distance - b?.distance);

      // Find the last element of the locations
      const lastElement = customerLocations[customerLocations.length - 1];

      // Create a new array without the last element
      const makeWayPoints = [...customerLocations?.slice(0, -1)];

      finalDestination = {
        lat: lastElement?.lat,
        long: lastElement?.long,
      };

      wayPoints = makeWayPoints;
    }

    return { finalDestination, wayPoints };
  }, [customerLocations, activeOrders, location]);

  useEffect(() => {
    let center = {
      latitude: location?.lat,
      longitude: location?.long,
    };

    if (ref?.current) {
      // @ts-ignore
      ref?.current?.animateCamera({ heading: heading, center: center });
    }
  }, [location]);

  console.log("destinations", destinations);
  console.log("location", location);

  if (
    destinations?.finalDestination?.lat === undefined &&
    destinations?.finalDestination?.long === undefined
  )
    return;

  return (
    <MapView
      ref={ref}
      //minZoomLevel={12}
      provider={PROVIDER_GOOGLE}
      style={{
        flex: 1,
      }}
      initialRegion={{
        latitude: location?.lat,
        longitude: location?.long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      {destinations?.wayPoints?.map((item, index) => {
        return (
          <Marker
            key={index}
            image={require("@/assets/images/user-location.png")}
            coordinate={{
              latitude: item?.lat,
              longitude: item?.long,
            }}
          />
        );
      })}

      {destinations?.wayPoints?.length === 0 ? (
        <Marker
          image={require("@/assets/images/user-location.png")}
          style={{
            height: 64,
            width: 65,
          }}
          coordinate={{
            //@ts-ignore
            latitude: parseFloat(destinations?.finalDestination?.lat),
            //@ts-ignore
            longitude: parseFloat(destinations?.finalDestination?.long),
          }}
        />
      ) : null}

      <Marker
        image={require("@/assets/images/bike.png")}
        style={{
          height: 100,
          width: 84,
        }}
        coordinate={{
          latitude: location?.lat,
          longitude: location?.long,
        }}
      />
      {/* {destinations?.finalDestination?.lat && destinations?.finalDestination?.long ? ( */}
      <MapViewDirections
        origin={{
          latitude: location?.lat,
          longitude: location?.long,
        }}
        destination={{
          //@ts-ignore
          latitude: parseFloat(destinations?.finalDestination?.lat),
          //@ts-ignore
          longitude: parseFloat(destinations?.finalDestination?.long),
        }}
        waypoints={destinations?.wayPoints?.map((element) => {
          return {
            //@ts-ignore
            latitude: parseFloat(element?.lat),
            //@ts-ignore
            longitude: parseFloat(element?.long),
          };
        })}
        resetOnChange={false}
        apikey="AIzaSyDie6WGH7bXSxAUryDSxxuE0Jnb1Ay0_xI"
        strokeWidth={4}
        strokeColor="#111111"
        onError={(error) => {
          console.log("error", error);
        }}
      />
      {/* ) : null} */}
    </MapView>
  );
};

// import React, { useRef, useEffect } from "react";
// import MapViewDirections from "react-native-maps-directions";
// import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// import { useOrderTracking } from "@/store/OrderTracking";
// import { Dimensions } from "react-native";
// import { scale } from "react-native-size-matters";

// const { height, width } = Dimensions.get("window");

// type Location = {
//   lat: number;
//   long: number;
//   distance?: number;
// };

// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// export const GoogleMapView = ({
//   location,
//   heading,
// }: {
//   location: Location;
//   heading: number;
// }) => {
//   const ref = useRef(null);

//   const latitude = 31.502853452153147;

//   const longitude = 74.3487219624405;

//   useEffect(() => {
//     let center = {
//       latitude: location?.lat,
//       longitude: location?.long,
//     };

//     if (ref?.current) {
//       // @ts-ignore
//       ref?.current?.animateCamera({ heading: heading, center: center });
//     }
//   }, [location]);

//   if (location?.lat === 0 && location?.long === 0) return;

//   return (
//     <MapView
//       ref={ref}
//       provider={PROVIDER_GOOGLE}
//       style={{
//         flex: 1,
//       }}
//       initialRegion={{
//         latitude: location?.lat,
//         longitude: location?.long,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }}
//     >
//       <Marker
//         image={require("@/assets/images/user-location.png")}
//         style={{
//           height: 64,
//           width: 65,
//         }}
//         coordinate={{
//           //@ts-ignore
//           latitude: latitude,
//           //@ts-ignore
//           longitude: longitude,
//         }}
//       />

//       <Marker
//         image={require("@/assets/images/bike.png")}
//         style={{
//           height: 100,
//           width: 84,
//         }}
//         coordinate={{
//           latitude: location?.lat,
//           longitude: location?.long,
//         }}
//       />

//       <MapViewDirections
//         origin={{
//           latitude: location?.lat,
//           longitude: location?.long,
//         }}
//         destination={{
//           //@ts-ignore
//           latitude: latitude,
//           //@ts-ignore
//           longitude: longitude,
//         }}
//         //waypoints={}
//         resetOnChange={false}
//         apikey="AIzaSyDie6WGH7bXSxAUryDSxxuE0Jnb1Ay0_xI"
//         strokeWidth={4}
//         strokeColor="#111111"
//         onError={(error) => {
//           console.log("error", error);
//         }}
//       />
//     </MapView>
//   );
// };
