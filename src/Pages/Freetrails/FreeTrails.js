import React from 'react';
import './FreeTrails';

function FreeTrails(){
  return(
    <>
            <div className="section header">
            <div className="container-fluid vs-9">
                <div className="videos-1">
                   

                </div>
            </div>
        </div>
        <div className="section">
            <div className="d-flex">
                <div className="col-md-6 bg01">
                    <div className="container bg02">

                        <label><span style={{fontSize: '22px',fontWeight: '600'}}>Get Started</span></label>
                        <div className="d-flex">
                            <p>Providing your email allows us to send you everything you need for your purchase. Already
                                have an account?</p>
                            <button className="bg03" style={{ color: 'rgb(72, 193, 192)' }}>Login</button>
                        </div>

                        <form className="bg04">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Yes, Video School can email me with
                                    promotions and news. (optional)</label>
                            </div>
                        </form>

                        <div className="mt-4">
                            <label style={{paddingBottom: '6px'}}><span style={{fontSize: '22px',fontWeight: '600'}}>Payment
                                    Information</span></label>
                            <div className="d-flex">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                <p>All transactions are secure and encrypted.</p>
                            </div>

                            <form className="bg04">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Card Number</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="1234 1234 1234"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Expiration</label>
                                        <input type="text" className="form-control" id="inputEmail4" placeholder="MM/YY"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">CVC</label>
                                        <input type="password" className="form-control" id="inputPassword4"
                                            placeholder="CVC"/>

                                    </div>
                                    <p>By providing your card information, you allow Teachable Inc. to charge your card
                                        for future payments in accordance with their terms.</p>
                                </div>
                            </form>
                        </div>

                        <div className="mt-4">
                            <label style={{fontSize: '22px',fontWeight: '600'}}>Billing Address</label>
                            <form className="bg04">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Name on Card</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Emily J Smith"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Country</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>INDIA</option>
                                        <option>USA</option>
                                        <option>JAPAN</option>
                                        <option>RUSSIA</option>
                                        <option>CHINA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Street address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Street addressline 2(optional)</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Apt,floor,suit,badge etc."/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">City</label>
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="form-group col-md-6 d-flex bg07">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        <label>Add state, province, or region</label>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Postal Code</label>
                                    <input type="billing postal code" className="form-control" id="billling postal id"
                                        aria-describedby="emailHelp" placeholder="99999"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Delivery Address same as
                                        billing</label>
                                </div>
                                <hr className="hrx-1"/>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Add a business tax ID</label>
                                </div>
                            </form>
                        </div>
                        <div className="mt-4">
                            <label><i className="fa fa-lock" aria-hidden="true"></i>All transactions are secure and
                                encrypted.</label>
                        </div>

                        <div className="vss-3">
                            <button className="btn" type="submit">Subscribe</button>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p> By completing this purchase, you agree to Video School's Terms of Use & Privacy Policy,
                                and Teachable's Terms of Use & Privacy Policy.</p>
                            <h6>What other students are saying...</h6>
                        </div>
                        <div className="d-flex mt-4">
                            <div className="col-md-2">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p className="bg08">Thanks Phil! I've learned so much from you. You're the real deal
                                        and, without a
                                        doubt, one of the best instructors out there.</p>
                                </div>
                                <p>— Steve McDonald</p>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div className="col-md-2">
                                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p className="bg08">Phil has a keen awareness of how to explain concepts in a way I can
                                        understand. He quickly became my favorite go-to instructor.</p>
                                </div>
                                <p>— Jen Puzio</p>
                            </div>
                        </div>
                        <hr className="bg09"/>
                        <div>
                            <h2 className="bg10">What are you getting . . .</h2>
                            <div>
                                <div className="mt-4">
                                    <div className="d-flex bg11">
                                        <div className="col-md-1"><i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-11">
                                            <p>100+ courses for video creators, photographers, designers, entrepreneurs
                                                & marketers</p>
                                        </div>
                                    </div>

                                    <div className="d-flex bg11">
                                        <div className="col-md-1"><i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-11">
                                            <p>Save $1,000s off the individual course prices</p>
                                        </div>
                                    </div>
                                    <div className="d-flex bg11">
                                        <div className="col-md-1"><i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="col-md-11">
                                            <p>Never pay for another course again</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <hr className="bg09"/>
                        <div>
                            <div className="b02">
                                <img src="https://d3gvvapon6fqzo.cloudfront.net/icons/checkout-badge-6.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6  b05">
                    <div className=" bg06">
                        <h5>Order Summary</h5>
                        <form className="bg05">
                            <div className="d-flex bg12">
                                <div className="d-flex">
                                    <img data-testid="course-description-image" alt=""
                                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/gdItahgFQQuIo4xMz0WL"
                                        className="jVwRm"/>
                                    <p style={{fontSize: '13px',color: '#363e48',fontWeight: '400',color: '#646464',paddingLeft: '15px'}}>Video School Membership</p>
                                </div>


                                <p className="b01">$12/month</p>
                            </div>
                            <div className="d-flex bg13 mt-4">
                                <div className="d-flex ">
                                    <h6 style={{fontSize: '14px' ,fontWeight: 400,color: '#646464'}}>FREEMONTH...</h6>
                                    <p style={{fontStyle: 'italic'}}>(First Payment)</p>
                                    <button className="bg14">remove</button>
                                </div>
                                <p className="b01">- $12.00</p>

                            </div>
                            <div className="d-flex bg13">
                                <div className="d-flex ">
                                    <h6 style={{fontSize: '14px',fontWeight: '400',color: '#646464'}}>Est. Tax - 18% (India)</h6>
                                    <i className="fa fa-question-circle" aria-hidden="true"></i>

                                </div>
                                <p>$0</p>

                            </div>
                            <hr style={{width: '100%'}}/>
                            <div className="d-flex bg13">
                                <div className="d-flex ">
                                    <h6>Billed today (USD)</h6>
                                </div>
                                <p className="b01">$0.00</p>

                            </div>
                        </form>
                        <div className="mt-4 d-flex">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                            <label>All transactions are secure and encrypted.</label>
                        </div>

                        <div className="vss-3">
                            <button className="btn" type="submit">Subscribe</button>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p> By completing this purchase, you agree to Video School's Terms of Use & Privacy Policy,
                                and Teachable's Terms of Use & Privacy Policy.</p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    

    <div className="footer b03">
        <div className="section bg3 ">
        <p mt-4 style={{color: '#bac1c7', fontSize: '18px', marginLeft: '20%', paddingTop: '20px'}}>© Video School</p>
        </div>

    </div>
    </>

  );
}

export default FreeTrails;