import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className='w-full bg-blue-800 dark-footer main-footer'>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="footer-widget fl-wrap">
							<h3>About Us</h3>
							<div className="footer-contacts-widget fl-wrap">
								<p>We are a professional moving company, powered by
									technology and created to move more than just your belongings.
									We'll move you with our hardwork and genuine smiles.</p>
								<ul className="footer-contacts fl-wrap">
									<li><span><i className="fa fa-envelope-o"></i> Mail :</span><a href="#" target="_blank">book@packmyload.com</a></li>
								
									<li><span><i className="fa fa-phone"></i> Phone :</span><a href="#">0700- PACK-PRO (0700-722-5776)</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className="footer-widget fl-wrap">
							<h3>Our Services</h3>

							<div className="col-md-6">
								<div className="widget-posts fl-wrap">
									<ul>
										<li className="clearfix">
											<div className="widget-posts-descr">
												<a href="/home-moves" title="">Home Moves</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/office-moves" title="office Relocations">
													Office Relocation</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/student-moves" title="Student Moves">Student
													Moves</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/cleaning" title="Cleaning">Cleaning Services</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/wedding-handling" title="">Wedding Gift
													Handling</a>

											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-md-6">
								<div className="widget-posts fl-wrap">
									<ul>
										<li className="clearfix">
											<div className="widget-posts-descr">
												<a href="/home-moves" title="">Small Moves</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/Junk-moves" title=""> Junk Removal</a>

											</div>
										</li>
										<li className="clearfix">

											<div className="widget-posts-descr">
												<a href="/storage" title="">Storage</a>

											</div>
										</li>

									</ul>
								</div>
							</div>

						</div>
					</div>
					<div className="col-md-4">
					<div className="footer-widget fl-wrap">
                                <h3>Subscribe</h3>
                                <div className="subscribe-widget fl-wrap">
                                    <p>Want to be notified when we have Moving tip or offers. Just sign up and we'll send you a notification by email.</p>
                                    <div className="subcribe-form">
                                        <form id="subscribe">
                                            <input className="enteremail" name="EMAIL" id="subscribe-email" placeholder="Email" type="email" required/>
                                            <button type="submit"  id="subscribe-button" className="subscribe-button"><i className="fa fa-rss"></i> Subscribe</button>
										</form>
										{/* <button disabled="disabled" id="subscribe-button" className="subscribebutton2" style="display: none;"><span><i className="fa fa-spinner load-animate"></i></span></button>
										
                                         <div id="progressnotif" style="margin-top: 30px; display: none;" className="notification success fl-wrap">
                                                <p id="signupalert"></p>
                                            </div> */}
                                    </div>
                                </div>
                                
                            </div>
						<div className="footer-menu fl-wrap">

							
							<div className="footer-menu fl-wrap">
								<ul>
									<li><a href="/Faqs">FAQs </a></li>
									<li><a href="https://www.blog.packmyload.com">Blog</a></li>
									<li><a href="/partner">Partner</a></li>
									<li><a href="/become_a_packer">Become a Packer</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sub-footer fl-wrap">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="about-widget">
                <Image src="/images/iconpackmyload1.png" style={{ width:"30px" }} alt="image" width={30} height={30}/>
							</div>
						</div>
						<div className="col-md-4">
							<div className="copyright">© Total Moves &amp; Company LTD
								{' '}{new Date().getFullYear()}. All rights reserved.</div>
						</div>
						<div className="col-md-4">
							<div className="footer-social">
								<ul>
									<li><a href="https://facebook.com/packmyload" target="_blank"></a></li>
									<li><a href="https://twitter.com/packmyload" target="_blank"></a></li>
									<li><a href="https://instagram.com/packmyload" target="_blank"></a></li>
									<li><a href="https://www.linkedin.com/company/packmyload-com/about/" target="_blank"></a></li>
									<li><a href="https://www.pinterest.com/Packmyload/" target="_blank"></a></li>
									<li><a href="https://www.youtube.com/channel/UC7QlhSoPlX3oJN8hZes2abQ" target="_blank"></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}