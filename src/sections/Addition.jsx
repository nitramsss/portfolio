const Addition = () => {
  return (
    <section className="container mx-auto mt-5" id="addition">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 xl:px-40">
        {/* Video (Right on Desktop, Hidden on Mobile) */}
        <div className="hidden rounded-3xl bg-slate-950 grid-col-2 md:flex justify-center items-center max-sm:h-100">
          <video
            className="m-0 rounded-lg mask-r-from-30% object-cover w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src="assets/vids/more.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content */}
        <div className="grid-default-color grid-col-1 md:col-span-2 text-justify bg-gradient-to-r from-emerald-500 from-10% via-indigo-950 via-20% to-slate-500 to-90% rounded-3xl p-6">
          <h1 className="text-2xl font-bold mb-4 text-neutral-300 flex max-sm:justify-center items-center">
            Away From Keyboard
          </h1>
          <p className="text-sm hidden md:block xl:text-xl leading-relaxed text-neutral-400">
            When I’m away from my keyboard, I often find myself strumming my
            guitar for leisure. I enjoy playing pop and reggae pieces — nothing
            too formal, just enough to unwind and enjoy the rhythm. Music, for
            me, has always been a way to relax and express myself without words.
            <br />
            <br />
            I also have a creative side that comes out through art. Whether it’s
            sketching on paper or exploring digital mediums, I find joy in
            creating visuals that reflect my thoughts or the world around me.
            Art, in all its forms, gives me a sense of freedom and creativity
            that complements my more logical side.
            <br />
            <br />
            When it comes to reading, I usually gravitate toward personal
            development and technical books. One of the recent ones I’ve been
            diving into is <em>Clean Code</em> by Robert C. Martin. Though I
            haven’t finished it yet, it’s already reshaping how I think about
            programming and craftsmanship.
            <br />
            <br />
            I used to play basketball regularly, often joining games with
            friends or even with people I’d just met on the court. These days, I
            play more casually, but it still gives me the same thrill and
            camaraderie that I’ve always enjoyed.
            <br />
            <br />
            Lastly, one of my favorite ways to clear my mind is by going out to
            the farm or nearby fields for a jog. Being from the mountains, I’ve
            always felt at home surrounded by nature. The quiet and the scenery
            bring me a sense of tranquility that’s hard to find elsewhere — it’s
            where I recharge and gather my thoughts.
          </p>

          {/* Shorter text for mobile */}
          <p className="text-sm md:hidden xl:text-xl leading-relaxed text-neutral-400">
            When I’m away from my keyboard, I often find myself strumming my
            guitar for leisure. I enjoy playing pop and reggae pieces — nothing
            too formal, just enough to unwind and enjoy the rhythm.
            <br />
            <br />
            I also express my creativity through art — sketching, painting, or
            digital design. It balances my logical side and keeps me inspired.
            <br />
            <br />
            I love reading books like <em>Deep Work by Cal Newport</em>, playing casual
            basketball games, and spending time in nature to recharge.
          </p>
        </div>

        {/* Video for Mobile */}
        <div className="rounded-3xl bg-slate-950 grid-col-2 md:hidden justify-center items-center h-100">
          <video
            className="m-0 rounded-lg mask-r-from-30% mask-b-from-40% mask-b-to-99% object-cover overflow-hidden w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src="assets/vids/more.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Addition;
