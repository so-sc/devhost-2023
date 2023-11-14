"use client";

import Link from "next/link";
import Image from "next/image";

import { events, Event } from "@/data/events";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1e1e1e" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#1e1e1e" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1e1e1e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Index() {
  return (
    <div className="flex justify-center py-20 xl:px-10 bg-black text-white w-full">
      <div className="w-full flex md:flex-row flex-col md:px-9 lg:px-14 lg:mx-1 px-2">
        <div className="flex w-full flex-col justify-center">
          <h1 className="font-bold text-4xl mx-5 mb-5">Events</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {events.map((event: Event, index: number) => (
              <Dialog>
                <DialogTrigger>
                  <Card className="m-5 text-start tracking-wide hover:scale-[102%] transition duration-200">
                    <CardHeader>
                      <CardTitle className="tracking-wide leading-7">
                        {event.title}
                      </CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AspectRatio
                        ratio={1 / 1}
                        className="bg-muted rounded-md relative"
                      >
                        <Image
                          src={`/speakers/${event.speaker_img}`}
                          alt={event.speaker}
                          fill
                          placeholder={`data:image/svg+xml;base64,${toBase64(
                            shimmer(700, 475)
                          )}`}
                          className="rounded-md object-cover"
                        />
                        <div className="absolute bg-black/60 backdrop-blur-sm w-full px-5 py-2 rounded-t-xl font-semibold tracking-wider bottom-0 flex items-center justify-center text-white">
                          {event.speaker}
                        </div>
                      </AspectRatio>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={event.linkedin}
                        className="hover:underline underline hover:underline-offset-8 underline-offset-4"
                        target="_blank"
                      >
                        Linkedin
                      </Link>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="tracking-wide">
                    <DialogTitle className="tracking-wide leading-7 text-2xl">
                      {event.title}
                    </DialogTitle>
                    <DialogDescription className="space-y-5">
                      <p>{event.event_info}</p>
                      <div className="space-y-3">
                        <h1 className="text-lg text-white font-semibold">
                          Speaker
                        </h1>
                        <h2 className="text-base text-white font-semibold">
                          {event.speaker}
                        </h2>
                        <p>{event.speaker_info}</p>
                        <div className="text-sm text-white font-semibold">
                          <Link
                            href={event.linkedin}
                            className="hover:underline underline hover:underline-offset-8 underline-offset-4"
                            target="_blank"
                          >
                            Linkedin
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-lg text-white font-semibold">
                          When?
                        </h1>
                        <p>{event.date}</p>
                      </div>
                      <div>
                        <h1 className="text-lg text-white font-semibold">
                          Where?
                        </h1>
                        <p>{event.where}</p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
