import { Carousel } from "@material-tailwind/react";
 
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl w-[600px]">
      <img
        src="https://static.bandainamcoent.eu/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.cnet.com/a/img/resize/c3f018606cbd01ce8d0f9ca3506d7dce15d66acc/hub/2023/07/05/b8503974-3baa-4311-bfa1-5e5b747c83ad/jujutsu-kaisen-season-2.jpg?auto=webp&width=1200"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://staticg.sportskeeda.com/editor/2022/09/7b2f6-16632302973114-1920.jpg?w=840"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}