"use client";

import React from "react";
import HomeCard from "@/components/HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingType, setMeetingType] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeetingType("isJoiningMeeting");
        }}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => {
          setMeetingType("isScheduleMeeting");
        }}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeetingType("isInstantMeeting");
        }}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
