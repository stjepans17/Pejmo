// ReceivedPassengerCard.tsx
import React from "react";
import { RideCard } from "../RideCard";
import { RideItem } from "../types";

interface Props {
  item: RideItem;
  onAccept: () => void;
  onDecline: () => void;
  onMessage: () => void;
}

export default function ReceivedPassengerCard({ item, onAccept, onDecline, onMessage }: Props) {
  return (
    <RideCard
      item={item}
      isPassenger={true}
      onAccept={onAccept}
      onDecline={onDecline}
      onMessage={onMessage}
      showTrackButton={false}
    />
  );
}
