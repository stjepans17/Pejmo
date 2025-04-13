// SentPassengerCard.tsx
import React from "react";
import {RideCard} from "../RideCard";
import { RideItem } from "../types";

interface Props {
  item: RideItem;
  onMessage: () => void;
  onDelete: () => void;
  onTrack: () => void;
}

export default function SentPassengerCard({
    item,
    onMessage,
    onDelete,
    onTrack
}: Props) {
  return (
    <RideCard
        item={item}
        isPassenger={true}
        onDelete={onDelete}
        onMessage={onMessage}
        showTrackButton={false}
    />
  );
}
