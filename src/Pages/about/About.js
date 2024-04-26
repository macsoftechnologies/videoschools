import React from "react";
import './About.css';


function About() {
    return (
        <>
            <section>
                <div className="AboutHeader">
                    <h1>Our mission</h1>
                    <p>
                        We teach creative skills that enrich lives and improve businesses around the world through accessible online content.</p>
                </div>
                <div>

                </div>

            </section>
            <section>
                <div className="row">
                    <div className="col-md-6 container p-5">
                        <div className="contentheader">
                            <h1>welcome all creators</h1>
                        </div>
                        <div className="conenttext">
                            <p>Whether you’re trying to learn a new skill from scratch, or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.</p>
                        </div>
                        <div className="">
                            <ul>
                                <li>2,000,000+ students around the world</li>
                                <li>100+ premium courses</li>
                                <li>1,000+ free tutorials</li>
                                <li>
                                    A true desire to help you</li>
                            </ul>
                            <div className="contenttext1">
                                <h2>Ready to become a better creator?</h2>
                            </div>
                            <div className="contenttext2">
                                <p>You’ll find free tutorials and premium courses that teach you new skills. If you’re an absolute beginner – perfect! We’ve got courses aimed at getting you off the ground. Looking for more advanced skills? Great! We’ve got tutorials and courses that take you to the next level.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="aboutimg">
                            <img src="https://www.videoschool.com/wp-content/uploads/2019/01/Phil-Ebiner-Headshot-2019a.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="vso">
                <div className="vsoimg">
                    <img src="https://www.videoschool.com/wp-content/uploads/2017/08/Home-Photographer-3.jpg" />
                </div>
                <div className="vsocontent">
                    <div className="vsoheader">
                        <h1>What is Video School Online?</h1>
                    </div>
                    <div className="vsotext">
                        <p>
                            VSO was founded in 2012 as a place to share our knowledge with the world.<br></br>
                            It started out with a few courses and tutorials, and has grown into a full-scale media company with books, webinars, a podcast, social media projects, and a ton of other great resources.<br></br>
                            Now we partner with other experts so we can provide the best training in all kinds of topics!
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-md-6 channel">
                        <img src="https://www.videoschool.com/wp-content/uploads/2018/07/image4.jpg" />
                    </div>
                    <div className="col-md-6 container channelcontent">
                        <div>
                            <h2>What can you learn here?</h2>
                            <p>Most of our topics fit into one of these themes: video, photography, design, and business. You can learn everything from email marketing and photo editing to motion graphics and cinematography.</p>
                            <h2>Stay up to date
                            </h2>
                            <p>Get all of our latest tutorials and courses delivered to you by signing up for our weekly email newsletter, which includes special discounts too. You can also subscribe to our <b> YouTube Channel</b> and like our <b>Facebook Page</b> to get instant updates</p>




                        </div>
                    </div>
                </div>
            </section>

            <section className="phil">
                <div className="philtext">
                    <h1>About Phil</h1>
                    <h5>I am a creator + I am a teacher</h5>
                    <div className="philtext1">
                        <p>My passion is to inspire and educate others through documentary and educational media.</p>
                    </div>
                    <div className="philtext2">
                        <p>I grew up in San Dimas, California and my biggest passion as a kid was baseball. Later on, I studied film and television production at Loyola Marymount University. After graduation, I shot, edited, and created motion graphics for hundreds of corporate and non-profit videos.
                        </p>
                        <p>At one point, I moved to Berkeley where my wife got her Masters in Social Work at UC Berkeley, and I made videos for their public affairs and educational technology departments. A few years later, we settled back down in the most excellent San Dimas.</p>

                    </div>
                    <div className="philimg">
                        <img src="https://www.videoschool.com/wp-content/uploads/2018/12/FamilyPhotos2018-20.jpg" />
                    </div>
                    <div className="philtext3">
                        <p>Back in 2012, I felt an itch to create a business of my own. With no experience teaching, no audience, and no idea what I was doing, I started making videos about everything I knew.</p>

                    </div>
                    <div className="philtext4">
                        <p>To date, my courses have grown to be some of the most successful on Udemy. Hundreds of thousands of students from every country in the world have enrolled in my courses.</p>
                    </div>
                    <div className="philtext5">
                        <p>I’m always experimenting with other platforms and other ways to best serve my audience. From this experience, I started the Online Course Masters podcast where I train people how to teach their own online courses.</p>

                    </div>
                    <div className="philtext6">
                        <p>Today, I spend most of my time helping students, creating new educational content, helping friends with film projects, and brainstorming my next documentary.</p>
                    </div>


                </div>
            </section>

            <section>
                <div className="ebiner">
                 <div className="ebinertext">
                <h1>I appreciate you!</h1>

                 </div>
                 <div className="ebinertext1">
                    <p>Thank you for being here. Without you, I couldn’t have done any of this. Hearing success stories from students who’ve obtained jobs with the skills learned on Video School Online urges me to create more courses, blog posts, free videos. I’m looking forward to the future of Video School Online, and I’m glad to have you here!</p>
                 <p>Thank you,</p>
                 <p>Phil Ebiner</p>
                 <p>Founder of VideoSchoolOnline.com</p>
                 </div>
                 <div className="edinerimg">
                    <img src="https://www.videoschool.com/wp-content/uploads/2018/07/image22.jpg"/>
                 </div>
                </div>
            </section>
        </>
    )
}
export default About;
