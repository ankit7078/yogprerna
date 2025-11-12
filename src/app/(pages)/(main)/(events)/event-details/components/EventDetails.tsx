"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  DollarSign,
  Ticket,
  User,
  Globe,
  Star,
  CheckCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { ButtonGroup } from "@/common/ButtonGroup";
import { BackLink } from "@/common/BackButton";

const EventDetails = ({ event }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-[var(--secondary-bg)] text-[var(--primary-text)] py-6 max-w-7xl mx-auto px-2 sm:px-8">
      <div className="py-4">
        <BackLink label="Back Eevents" />
      </div>
      {/* Main Content */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6 ">
            <div className="relative rounded-custom overflow-hidden shadow-custom transition">
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={500}
                className="w-full object-cover"
                priority
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--text-color-primary)] text-[var(--primary-text-h)] paragraph font-medium rounded-custom shadow-custom">
                {event.category}
              </span>
            </div>

            <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
              <h1 className="heading-lg text-[var(--secondary-text)] font-medium mb-2">
                {event.title}
              </h1>
              <p>
                {event.description}
              </p>
            </div>

            <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
              <h2 className="heading text-[var(--secondary-text)] font-medium mb-4">
                Event Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {/* Language */}
                <div className="flex items-center gap-2 p-5 rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] p-2 text-[var(--text-hover-color)] rounded-full">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Language</p>
                    <p>
                      {event.language.join(", ")}
                    </p>
                  </div>
                </div>
                {/* Venue */}
                <div className="flex items-center gap-2 p-5 py-2  rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] text-[var(--text-hover-color)] p-2 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Venue</p>
                    <p>{event.venue}</p>
                  </div>
                </div>
                {/* Host */}
                <div className="flex items-center gap-2 p-5 rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] text-[var(--text-hover-color)] p-2 rounded-full">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Host</p>
                    <p >{event.host}</p>
                  </div>
                </div>
                {/* Entrance Type */}
                <div className="flex items-center gap-2 p-5 rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] text-[var(--text-hover-color)] p-2 rounded-full">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Entrance Type</p>
                    <p >{event.entranceType}</p>
                  </div>
                </div>
                {/* Ticket Booking Dates */}
                <div className="flex items-center gap-2 p-5 rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] text-[var(--text-hover-color)] p-2 rounded-full">
                    <Ticket size={20} />
                  </div>
                  <div>
                    <p className="font-medium">
                      Ticket Booking
                    </p>
                    <p>
                      {event.ticketBooking.startDate} -{" "}
                      {event.ticketBooking.endDate}
                    </p>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2 p-5 rounded-custom bg-[var(--secondary-bg)] shadow-custom">
                  <div className="bg-[var(--primary-heading-bg)] text-[var(--text-hover-color)] p-2 rounded-full">
                    <Star size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Rating</p>
                    <p>
                      {event.rating} ({event.reviews} reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* **IMPROVEMENT: Added Highlights & Requirements Sections** */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Highlights */}
              <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
                <h3 className="heading font-medium text-[var(--secondary-text)] mb-3 flex items-center gap-2">
                  Workshop Highlights
                </h3>
                <ul className="space-y-3 list-inside">
                  {event.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 "
                    >
                      <CheckCircle
                        size={16}
                        className="text-[var(--text-success-color)] mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Requirements */}
              <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
                <h3 className="heading font-medium text-[var(--secondary-text)] mb-3 flex items-center gap-2">
                  Requirements
                </h3>
                <ul className="space-y-3 list-inside">
                  {event.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle
                        size={16}
                        className="text-[var(--text-success-color)] mt-1 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Event Partners - Improved Design */}
            <div className="bg-[var(--primary-bg)] rounded-custom shadow-xs p-5 shadow-custom transition">
              <h3 className="heading font-medium text-[var(--secondary-text)] mb-6">
                Our Esteemed Partners
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {event.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex flex-col items-center overflow-hidden rounded-custom shadow-custom bg-[var(--secondary-bg)] transform hover:scale-105 transition-all duration-300 group"
                  >
                    <div className="aspect-[2/1] h-full w-full relative overflow-hidden">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        layout="fill"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full text-center bg-[var(--secondary-bg)] py-3 px-2">
                      <span className=" font-semibold text-[var(--primary-text)] cursor-pointer group-hover:text-[var(--primary-text-h)] transition">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[var(--primary-bg)] rounded-custom shadow-custom sticky top-24 p-5  transition">
              <div className="text-center justify-center items-center mb-6">
                <div className="heading-lg font-bold text-[var(--text-hover-color)]">
                  {event.price}
                </div>
                <p>per person</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between sub-heading">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-[var(--text-hover-color)]"/> Date:
                  </span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center justify-between sub-heading">
                  <span className="flex items-center gap-2 ">
                    <Clock size={16} className="text-[var(--text-hover-color)]"/> Time:
                  </span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center justify-between  ">
                  <span className="flex items-center gap-2 sub-heading">
                    <Clock size={16} className="text-[var(--text-hover-color)]"/> Duration:
                  </span>
                  <span>6 hours</span>
                </div>
                <div className="flex items-center justify-between  ">
                  <span className="flex items-center gap-2 sub-heading">
                    <Users size={16} className="text-[var(--text-hover-color)]"/> Spots left:
                  </span>
                  <span className="font-semibold text-orange-600">
                    {event.maxAttendees - event.attendees}
                  </span>
                </div>
              </div>
              <ButtonGroup
                label="Book Now"
                type="submit"
                className="w-full mt-3 mb-3"
              />
              <div>
                <h4 className="font-medium text-[var(--secondary-text)] heading mb-2">Venue Details</h4>
                <p className="mb-1 flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--primary-text-h)]" />
                  {event.venue}
                </p>
                <p className=" flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--primary-text-h)]" />
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;