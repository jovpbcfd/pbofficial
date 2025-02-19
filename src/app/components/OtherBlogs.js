import styles from '@/styles/relatedArticles.module.css';
import Image from 'next/image';
import { formatDate } from '@/utils/dateFormatter';

export const OtherBlogs = ({ otherBlogs }) => {
	return (
		<section className={styles['related-articles']}>
			<h2> Read More Blogs: </h2>

			<ul>
				{otherBlogs.length === 0 ? (
					<h3>No more blogs at the moment, but stay tuned for more!</h3>
				) : (
					otherBlogs.map((blog) => (
						<li key={blog._id}>
							<article>
								<a
									href={`/blogs/${blog.slug.current}`}
									title={blog.title}
								>
									<div className={styles['related-contents']}>
										{blog.featuredImage?.asset?.url && (
											<Image
												src={blog.featuredImage.asset.url}
												alt={blog.featuredImage.alt}
												width={400}
												height={250}
												async
												loading="lazy"
											/>
										)}

										<article>
											<h4>{blog.title}</h4>
											<p>{blog.description}</p>

											<span className="read-more">
												Continue reading{' '}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													height="24px"
													viewBox="0 -960 960 960"
													width="24px"
													fill="#ffd000"
												>
													<path d="M682.92-460H220q-8.54 0-14.27-5.73T200-480q0-8.54 5.73-14.27T220-500h462.92L533.54-649.38q-5.85-5.85-6.12-13.77-.27-7.93 6.12-14.54 6.61-6.62 14.27-6.73 7.65-.12 14.27 6.5l175.3 175.3q5.24 5.24 7.35 10.7 2.12 5.46 2.12 11.92t-2.12 11.92q-2.11 5.46-7.35 10.7l-175.3 175.3q-5.85 5.85-13.89 6.12-8.04.27-14.65-6.35-6.39-6.61-6.5-14.15-.12-7.54 6.5-14.16L682.92-460Z" />
												</svg>
											</span>

											<small>{formatDate(blog?.publishedAt)}</small>
										</article>
									</div>
								</a>
							</article>
						</li>
					))
				)}
			</ul>
		</section>
	);
};
