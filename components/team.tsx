"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MotionDiv } from "@/components/ui/motion-client";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Github,
  Globe,
  X,
  Volume2,
  VolumeX,
  Play,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { teamText } from "@/constants/team-translations";
import { BehanceIcon } from "./icons/behance-icon";

type SocialLinks = {
  linkedin?: string;
  instagram?: string;
  github?: string;
  behance?: string;
  website?: string;
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TeamMember = ({
  name,
  role,
  bio,
  image,
  video,
  socialLinks,
  onOpen,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  video?: string;
  socialLinks: SocialLinks;
  onOpen: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        // play silently on hover
        videoRef.current.play().catch(() => {});
      } catch {}
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch {}
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // track viewport coordinates so tooltip can escape the card bounds
    setPopoverPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <MotionDiv
      className="flex flex-col items-center text-center w-fit mb-12"
      variants={fadeIn}
    >
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="group relative w-28 h-36 md:w-60 md:h-[356px] rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-lg transition-shadow"
        aria-label={`Open profile of ${name}`}
      >
        {/* Thumbnail image */}
        <Image
          src={image}
          alt={name}
          width={240}
          height={256}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovering && video ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover video preview */}
        {video && (
          <video
            ref={videoRef}
            muted
            playsInline
            loop
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {/* Hover tooltip (global portal, fixed width, follows cursor) */}
        {isHovering &&
          typeof window !== "undefined" &&
          createPortal(
            <div
              className="fixed z-[60] pointer-events-none w-fit -translate-x-1/2 rounded-full bg-white text-gray-900 text-xs md:text-sm font-medium px-4 py-2 shadow-md"
              style={{ left: popoverPos.x, top: popoverPos.y + 16 }}
            >
              More about {name}
            </div>,
            document.body
          )}
      </button>
    </MotionDiv>
  );
};

export default function TeamSection() {
  const { language } = useLanguage();
  const t = teamText[language as keyof typeof teamText] || teamText.en;
  const {
    heading,
    headingPart1,
    sectionLabel,
    description,
    members,
    badge = "",
  } = t;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const openModal = (index: number) => {
    setActiveIdx(index);
    setIsModalOpen(true);
    setIsMuted(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIdx(null);
    try {
      modalVideoRef.current?.pause();
      if (modalVideoRef.current) modalVideoRef.current.currentTime = 0;
    } catch {}
  };

  // Autoplay video when modal opens
  useEffect(() => {
    if (isModalOpen && activeIdx !== null) {
      try {
        if (modalVideoRef.current) {
          modalVideoRef.current.muted = true;
          modalVideoRef.current.currentTime = 0;
          // next tick to ensure element is mounted
          setTimeout(() => {
            modalVideoRef.current?.play().catch(() => {});
          }, 0);
        }
      } catch {}
    }
  }, [isModalOpen, activeIdx]);

  // Close modal on Escape key
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="team" className=" bg-black px-4">
      <div className="rounded-2xl bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Nueva sección estilo imagen */}
          <div className="mb-16">
            <div className="text-orange-500 text-md font-bold uppercase tracking-wider mb-4">
              {sectionLabel}
            </div>
            <div className="text-4xl lg:text-4xl font-semibold leading-tight max-w-xl">
              <span className="text-gray-900 max-w-2xl">{headingPart1}</span>{" "}
              <span className="text-[#7f7f7f] max-w-5xl">{description}</span>
            </div>
          </div>

          <MotionDiv
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {members.map((member, idx) => (
              <TeamMember
                key={idx}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                video={member.video as string | undefined}
                socialLinks={member}
                onOpen={() => openModal(idx)}
              />
            ))}
          </MotionDiv>

          {/* Modal */}
          {isModalOpen && activeIdx !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center min-h-[800px] min-w-[400px]">
              <div
                className="absolute inset-0 bg-black/60"
                onClick={closeModal}
                aria-hidden="true"
              />
              <div className="relative z-10 bg-white h-[80vh] w-[95vw] max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 p-2 rounded-full  hover:bg-white  "
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                  <div className="relative h-full max-h-[80vh] bg-white flex items-center justify-center overflow-hidden rounded-l-2xl p-2 pr-0">
                    {members[activeIdx].video ? (
                      <div className="relative w-full h-full rounded-l-2xl overflow-hidden">
                        <video
                          ref={modalVideoRef}
                          src={members[activeIdx].video as string}
                          muted={isMuted}
                          playsInline
                          className="w-full h-full object-cover bg-black rounded-xl"
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          onClick={() => {
                            if (!modalVideoRef.current) return;
                            if (modalVideoRef.current.paused) {
                              modalVideoRef.current.play().catch(() => {});
                            } else {
                              modalVideoRef.current.pause();
                            }
                          }}
                        />
                        {/* Mute toggle */}
                        <button
                          onClick={() => setIsMuted((m) => !m)}
                          className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? (
                            <VolumeX className="h-4 w-4 text-gray-700" />
                          ) : (
                            <Volume2 className="h-4 w-4 text-gray-700" />
                          )}
                        </button>
                        {/* Play center button */}
                        {!isPlaying && (
                          <button
                            onClick={() => modalVideoRef.current?.play()}
                            className="absolute inset-0 m-auto h-14 w-14 md:h-16 md:w-16 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/30 hover:bg-black/30 hover:scale-110 transition-all duration-300 ease-out animate-fadeIn"
                            style={{
                              animation: "fadeIn 0.3s ease-out forwards",
                            }}
                            aria-label="Play"
                          >
                            <Play
                              className="h-6 w-6 md:h-7 md:w-7 text-white"
                              fill="white"
                            />
                          </button>
                        )}
                      </div>
                    ) : (
                      <Image
                        src={members[activeIdx].image}
                        alt={members[activeIdx].name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center  overflow-y-auto w-full">
                    <h3 className="text-3xl font-medium text-gray-900">
                      {members[activeIdx].name}
                    </h3>
                    <p className="text-sm font-light mt-2 text-[#5b616b]">
                      {members[activeIdx].role}
                    </p>
                    <p className="text-[#5b616b] mt-4 text-sm leading-relaxed">
                      {members[activeIdx].bio}
                    </p>

                    <div className="flex space-x-2 mt-6">
                      {members[activeIdx].linkedin && (
                        <Link
                          target="_blank"
                          href={members[activeIdx].linkedin!}
                        >
                          <Linkedin className="h-4 w-4 text-gray-600 hover:scale-110" />
                        </Link>
                      )}
                      {members[activeIdx].instagram && (
                        <Link
                          target="_blank"
                          href={members[activeIdx].instagram!}
                        >
                          <Instagram className="h-4 w-4 text-gray-600 hover:scale-110" />
                        </Link>
                      )}
                      {members[activeIdx].github && (
                        <Link target="_blank" href={members[activeIdx].github!}>
                          <Github className="h-4 w-4 text-gray-600 hover:scale-110" />
                        </Link>
                      )}
                      {members[activeIdx].behance && (
                        <Link
                          target="_blank"
                          href={members[activeIdx].behance!}
                        >
                          <BehanceIcon className="h-4 w-4 text-gray-600 hover:scale-110" />
                        </Link>
                      )}
                      {members[activeIdx].website && (
                        <Link
                          target="_blank"
                          href={members[activeIdx].website!}
                        >
                          <Globe className="h-4 w-4 text-gray-600 hover:scale-110" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
