import React from "react";
import { RideCard } from "../RideCard";
import { RideItem } from "../types";

interface Props {
  item: RideItem;
  onMessage: () => void;
  onDelete: () => void;
  // onTrack: () => void;
}

export default function SentRideCard({ item, onMessage, onDelete }: Props) {
  return (
    <RideCard
      item={item}
      isPassenger={false}
      onMessage={onMessage}
      onDelete={onDelete}
      // onTrack={onTrack}
      showTrackButton={true}
    />
  );
}
