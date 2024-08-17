import React, { useEffect } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blog } from "@/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import { error } from "console";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}

const fetchInstagramFeed = async () => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;
    const data = await fetch(url);
    console.log("data", data);
    if (!data.ok) {
      throw new Error("Failed to fetch Instagram Feed");
    }
    const instagramFeed = await data.json();
    console.log("Instagram feed:", instagramFeed);
    return { instagramFeed, error: null };
  } catch (err: any) {
    console.error("Error fetching Instagram Feed:", err.message);
    return { instagramFeed: null, error: err.message };
  }
};

const Posts = async () => {
  const { instagramFeed, error } = await fetchInstagramFeed();

  return (
    <div className="flex flex-col bg-white w-full place-content-center pb-28 pt-8 xl:pt-4">
      <div className="container space-y-14">
        <div className="flex flex-col gap-4">
          <h1 className="relative font-bold leading-tight text-balance text-black text-2xl md:text-4xl ">
            <span className="relative z-10">Our Social Media Post</span>
            <img
              src="/highlight_post.png"
              className="absolute z-0 bottom-0 left-10 w-40 h-4 md:left-20 md:w-56 md:h-5 "
              alt=""
            />
          </h1>
          <p className="text-[#A6A6A6] text-balance text-xs md:text-sm">
            Follow our latest posts on social media to stay updated with all our
            activities, news, and insights. From exciting project highlights to
            helpful tips and behind-the-scenes looks, our social media channels
            are the best way to connect with us and join our community.
          </p>
        </div>
        <div className="flex justify-center">
          {error && <p className="text-red-500">{error}</p>}
          {instagramFeed && (
            <Carousel className="w-full h-full flex relative">
              <CarouselContent className="flex gap-12 md:gap-4 pb-14">
                {instagramFeed.data.map((post: InstagramPost) => (
                  <CarouselItem
                    key={post.id}
                    className="flex basis-full md:basis-3/6 lg:basis-2/5 xl:basis-1/3"
                  >
                    <Link
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="flex flex-col rounded-2xl px-1 shadow-md group">
                        <CardHeader className="rounded-2xl relative flex w-full h-full">
                          <div className="flex relative w-80 h-48">
                            {post.media_type === "VIDEO" ? (
                              <video
                                src={post.media_url}
                                controls={false}
                                className="object-cover rounded-2xl"
                              />
                            ) : (
                              <img
                                src={post.media_url}
                                className="object-cover rounded-2xl"
                                alt={post.caption}
                              />
                            )}
                            <div className="absolute rounded-2xl inset-0 flex mx-auto my-auto w-full h-full opacity-0 ease-in-out group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white"></div>
                          </div>
                          <div className="flex px-10 py-8 absolute inset-0">
                            <div className="flex-col">
                              <Badge className=" bg-white text-[#666FC9] group-hover:bg-fuchsia-100">
                                Adiarko
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="grow flex flex-col gap-2">
                          <p className="text-[#A6A6A6] truncate line-clamp-3 text-balance text-[10px] md:text-xs">
                            {post.caption}
                          </p>
                        </CardContent>
                        <CardFooter className="flex shrink-0 justify-between">
                          <span className="flex gap-4 cursor-pointer">
                            <p className="text-black font-medium text-xs md:text-sm">
                              See more
                            </p>
                            <MoveRight className="my-auto text-black w-3 h-3" />
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-0 right-12 left-12">
                <CarouselPrevious
                  prevText="Previous"
                  className="gap-4 shadow-md border-2 border-slate-500 w-32 h-8 text-base md:w-36 md:h-10 md:text-lg"
                />
                <CarouselNext
                  nextText="Next"
                  className="gap-4 shadow-md border-2 border-slate-500 w-32 h-8 text-base md:w-36 md:h-10 md:text-lg"
                />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
