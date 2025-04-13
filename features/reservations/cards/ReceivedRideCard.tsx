import React from "react";
import { RideCard } from "../RideCard";
import { RideItem } from "../types";

interface Props {
  item: RideItem;
  onAccept: () => void;
  onDecline: () => void;
  onMessage: () => void;
  onTrack: () => void;
}

export default function ReceivedRideCard({ item, onAccept, onDecline, onMessage, onTrack }: Props) {
  return (
    <RideCard
      item={item}
      isPassenger={false}
      onAccept={onAccept}
      onDecline={onDecline}
      onMessage={onMessage}
      onTrack={onTrack}
      showTrackButton={true}
    />
  );
}
