const Addition = () => {
  return (
    <section className="mx-auto max-w-5xl px-8 py-12 max-md:hidden">
      <h1 className="text-heading font-black text-center mb-7 sm:text-left text-neutral-300 pt-4">
        Away From Keyboard
      </h1>
      <div className="text-neutral-400 text-justify leading-relaxed mb-10">
        <video
          className="float-left mr-6 mb-4 shadow-lg w-40 h-40 object-cover"
          muted
          loop
          autoPlay
        >
          <source src="./assets/vids/basketball.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          When I’m away from my keyboard, I often find myself strumming my
          guitar for leisure. I enjoy playing pop and reggae pieces, nothing too
          formal, just enough to unwind and enjoy the rhythm. Music, for me, has
          always been a way to relax and express myself without words.
        </p>
        <br />
        <p>
          I also have a creative side that comes out through art. Whether it’s
          sketching on paper or exploring digital mediums, I find joy in
          creating visuals that reflect my thoughts or the world around me.
        </p>
      </div>

      <div className="text-neutral-400 text-justify leading-relaxed mb-10 clear-both">
        <p>
          When it comes to reading, I usually gravitate toward personal
          development and technical books. One of the recent ones I’ve been
          diving into is <em>Clean Code</em> by Robert C. Martin. Though I
          haven’t finished it yet, it’s already reshaping how I think about
          programming and craftsmanship.
        </p>
        <br />
        <p>
          I used to play basketball regularly, often joining games with friends
          or even with people I’d just met on the court. These days, I play more
          casually, but it still gives me the same thrill and camaraderie that
          I’ve always enjoyed.
        </p>
      </div>

      <div className="text-neutral-400 text-justify leading-relaxed clear-both">
        <video
          className="float-right ml-6 mb-4 shadow-lg w-40 h-40 object-cover"
          muted
          loop
          autoPlay
        >
          <source src="./assets/vids/farm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          Lastly, one of my favorite ways to clear my mind is by going out to
          the farm or nearby fields for a jog. Being from the mountains, I’ve
          always felt at home surrounded by nature. The quiet and the scenery
          bring me a sense of tranquility that’s hard to find elsewhere, it’s
          where I recharge and gather my thoughts.
        </p>
      </div>
    </section>
  );
};

export default Addition;
