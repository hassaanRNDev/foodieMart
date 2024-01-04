import React, { useMemo, useRef } from "react";

import { useOrderTracking } from "@/store/OrderTracking";
import { Dimensions } from "react-native";
import { calculateDistance } from "@/utils";
import { Button, View } from "@/ui";
import { scale } from "react-native-size-matters";
import { createOpenLink, ShowOptions } from "react-native-open-maps";

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

export const OpenGoogleMapView = ({
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

      // Find the Ist element of the locations
      const firstElement = customerLocations[0];

      finalDestination = {
        lat: firstElement?.lat,
        long: firstElement?.long,
      };
    }

    return { finalDestination, wayPoints };
  }, [customerLocations, activeOrders, location]);

  const coordinates: ShowOptions = {
    start: `${location?.lat},${location?.long}`,
    end: `${destinations?.finalDestination?.lat},${destinations?.finalDestination?.long}`,
    waypoints: [],
    provider: "google",
  };

  const openYosemiteZoomedOut = createOpenLink({ ...coordinates, zoom: 30 });

  if (
    destinations?.finalDestination?.lat === undefined &&
    destinations?.finalDestination?.long === undefined
  )
    return;

  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <View width={scale(280)}>
        <Button variant={"primary"} label="Track Order" onPress={openYosemiteZoomedOut} />
      </View>
    </View>
  );
};
