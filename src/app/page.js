'use client'

import { useEffect, useState } from "react";
import HomeLayout from "./homeLayout/layout";
import { fetchData } from "@/lib/fetch";
import Link from "next/link";
import Image from "next/image";
import { POSTS_QUERY_MOST_RECENT } from "@/queries/queries";


export default  function Home() {
	const [posts, setPosts] = useState([])
	
	useEffect(() => {
		const fetchDataAsync = async () => {
			const data = await fetchData(POSTS_QUERY_MOST_RECENT)
			setPosts(data) 
		}

		fetchDataAsync()
	}, [])

	useEffect(() => {
		const initSlick = () => {
		  const slider = $(".promo-slider");
	
		  if (slider.hasClass("slick-initialized")) {
			slider.slick("setPosition"); // Force re-render to fix position
			return;
		  }
	
		  slider.slick({
			dots: true,
			arrows: false,
			autoplay: false,
			autoplaySpeed: 3000,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			adaptiveHeight: true,
			responsive: [
			  { breakpoint: 1024, settings: { slidesToShow: 2 } },
			  { breakpoint: 768, settings: { slidesToShow: 1 } },
			],
		  });
		};
	
		// Use IntersectionObserver to initialize Slick when in view
		const observer = new IntersectionObserver(
		  (entries) => {
			entries.forEach((entry) => {
			  if (entry.isIntersecting) {
				setTimeout(initSlick, 300);
				observer.disconnect();
			  }
			});
		  },
		  { threshold: 0.2 } // Trigger when 20% of the slider is visible
		);
	
		const promoSlider = document.querySelector(".promo-slider");
		if (promoSlider) observer.observe(promoSlider);
	
		return () => observer.disconnect();
	  }, []);
	

	return (
		<>
		<HomeLayout>

		<main>
			<section className="hero-section">
				<div className="hero-inner">
					<div className="hero-slider">
						<div className="swiper-wrapper">
							<div className="hero-image">
								<img src="images/image_000001.jpg" />
							</div>
							<div className="hero-image"><img src="images/image_95791.jpg" /></div>
							<div className="hero-image"><img src="images/image_96819.jpg" /></div>
						</div>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
			</section>
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="text-center">
							<h1 className="text-yellow">
								Join Panalobet Online Casino and Start Winning Today!
							</h1>
							<p>
								Join Panalobet now and be a free member and enjoy the perks in playing with Panalobet! The flexible user option of the mobile app means easy options can be used to browse various promotional opportunities and special deals.
							</p>
						</div>
						<div className="intro-box text-center">
							<h3>Here’s how to get started:</h3>
							<div className="steps-box">
								<div className="step">
									<div className="step-no">1</div>
									<div className="step-copy">
										<p><strong>Visit the Panalobet Login Page:</strong> Place the cursor on the ‘Register’ button.</p>
									</div>
								</div>
								<div className="step">
									<div className="step-no">2</div>
									<div className="step-copy">
										<p><strong>Fill in Your Details:</strong> Enter all the private details that might be requested of you; Usually, ID information is requested first.</p>
									</div>
								</div>
								<div className="step">
									<div className="step-no">3</div>
									<div className="step-copy">
										<p><strong>Start Betting:</strong> You finish the registration process, login and dive into the exciting world of betting and games at once!
                                    </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="games-section">
				<div className="container">
					<h2 className="title-headline orange">Latest Games</h2>
					<div className="games-gallery">
						<div className="games-box">
							<img
								src="images/game_fccrazybuffalo_.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_fc-merge-magic.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_fc-night-market.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_fcsugarbangbang.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_jilichinesenewyear2.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_jili-tongitsgo.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_jiliboxingking.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_jilisuperace.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_cjili-irichbingo.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_pgcandyburst.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_pgfortunetiger.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_pgbuffalowin.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_cyesbingo-beastybingo.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_caesexybaccarat.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
						<div className="games-box">
							<img
								src="images/game_cevolution-speedbaccarat.jpg"
								alt="crazy buffalo"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="text-center">
						<a
							href="https://panalobet.com.ph/ph/tl/slot"
							target="_blank"
							className="btn blue-sky"
							>View More Games</a
						>
					</div>
				</div>
			</section>
			<section className="promotion-section">
				<div className="container">
					<h2 className="title-headline orange">Panalobet Online Casino Promotions & Bonus</h2>
					<div className="promo-banners">
						<div className="promo-slider">
							<div className="item"><img src="images/pro-01.jpg" loading="lazy"/></div>
							<div className="item"><img src="images/pro-02.jpg" loading="lazy"/></div>
							<div className="item"><img src="images/pro-03.jpg" loading="lazy"/></div>
							<div className="item"><img src="images/pro-05.jpg" loading="lazy"/></div>
						</div>
					</div>
					<div className="text-center">
						<a
							href="promotion"
							className="btn blue-sky"
							>View More</a
						>
					</div>
				</div>
			</section>
			<section className="recent-blog-section">
			<div className="container">
            <h2 className="title-headline orange gap-y" >Recent blog</h2>
            <ul className="blog-card-container ">

					{posts.length === 0 ? (

						<p>No blog posts available.</p>

					) : (

						posts.map((post, index) => {

							const aboveFold = index < 1;


							return (

								<Link

									href={`/blogs/${post?.slug?.current}`}

									key={post?._id}

									className="blog-card"

								>

									<li className="blog-card-inner">

										<figure className="blog-card-image-wrapper">

											<Image

												

												src={post?.featuredImage?.asset?.url}

										

												alt={post?.title}

												width={400} // Fallback dimensions

												height={400}

												quality={100} // Maximum quality

												priority={aboveFold} // Preload if above the fold

												loading={aboveFold ? undefined : 'lazy'}

												className="blog-card-image"

												sizes="(max-width: 500px) 400px, (max-width: 768px) 600px(max-width: 1200px) 50vw, 400px"

											/>

										</figure>



										<h2 className="blog-card-title">{post?.title}</h2>

										<small className="blog-card-publish">

											{new Date(post?.publishedAt).toLocaleDateString()}

										</small>

										<p className="blog-card-description">{post?.description}</p>

									</li>

								</Link>

							);

						})

					)}

				</ul>
        </div>
			</section>
			<section className="about-section">
				<div className="container">
					<div className="blurb-gallery">
						<div className="blurb-box">
							<div className="blurb-img">
								<img
									src="images/live-casino.png"
									style={{ animation: "float 6s ease-in-out infinite" }}
									loading="lazy"

								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline">Live Casino</h3>
								<p>Panalobet provides the latest photography equipment and the latest technology in a network to the world of <strong>online live casino games</strong>. Another feature of our site is a <strong>live casino</strong> so every player can be sure that the firm will provide high quality of entertainment and an unique gambling experience that will give players the impression that they are in the real casino without leaving their houses.
                            </p>
								<a
									href="live-casino"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>
						<div className="blurb-box">
							<div className="blurb-img">
								<img
									src="images/slot-games.png"
									style={{ animation: "float 4s ease-in-out infinite" }}
									loading="lazy"
								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline purple">Slot Games</h3>
								<p>Currently, Panalobet offers more than 250 <strong>slot machine games</strong> which are developed by multiple international software providers. Every single game undergoes serious certification for fairness, therefore, every spin is as interesting as the other. Not only are they entertainment to play, but they also have the ability to have massive cash jackpots making them highly lucrative.</p>
								<a
									href="slot-games"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>
						<div className="blurb-box">
							<div className="blurb-img">
								<img
									src="images/cockfight.png"
									style={{ animation: "float 6.5s ease-in-out infinite" }}
									loading="lazy"

								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline cyan-green">Cockfight</h3>
								<p>
									Watch and enjoy a flood of matches and events for cockfighting inside Panalobet. Lovers of poker are also catered for with both one-to-one combat and four-cock-derbies available at Panalobet. Get in this world and feel the heat of each game.
								</p>
								<a
									href="cockfight"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>

						<div className="blurb-box">
							<div className="blurb-img">
								<img src="images/sports-img.png" style={{ animation: "float 4.5s ease-in-out infinite" }} loading="lazy"
								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline cy">Sports</h3>
								<p>
									Panalobet offers a comprehensive sports betting platform with real-time updates and live betting. Bet on NBA, World Cups, European Cups, Champions League, French Open, and Wimbledon. Experience the thrill of active participation in every match, enhancing your love for sports.
								</p>
								<a
									href="/index"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>

							<div className="blurb-box">
							<div className="blurb-img">
								<img src="images/lottery-bingo-img.png" style={{ animation: "float 5.2s ease-in-out infinite" }} loading="lazy"
								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline yellow">Lottery</h3>
								<p>Panalobet is an online platform that provides fun and exciting bingo and lottery games online. Our <strong>bingo casino games</strong> come in many sorts of themes and different game formats, ideal for newcomers and expert players alike. Also presented here are our lottery games, where you can try your luck while playing for huge prizes with draws held frequently.</p>
								<a
									href="/index"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>

						
						<div className="blurb-box">
							<div className="blurb-img">
								<img
									src="images/promotion-img.png"
									style={{ animation: "float 5.5s ease-in-out infinite" }}
									loading="lazy"

								/>
							</div>
							<div className="blurb-copy">
								<h3 className="title-headline orange">Promotions</h3>
								<p>Discover more offers and deals in Panalobet that make your betting more exciting and thrilling. Welcome bonuses, ongoing promotions, cashback, and other types of bonuses are presented for every user of Panalobet to maximize the entertainment effect of <strong>online gambling</strong>. Do not miss our next promotion; stay tuned!
                            </p>
								<a
									href="promotion"
									className="btn blue-sky"
								>
									Learn More</a
								>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		</HomeLayout>
		
		
		
		</>
	)
}
