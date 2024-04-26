import React from "react";
import './Login.css';

function Login(){
    return(
        <>
        <div>
        <div class="section header">
            <div class="container-fluid vs-9">
                <div class="videos-1">
                    <button type="submit" ><a href="	https://process.fs.teachablecdn.com/ADNupMnWyR7kCW…//www.filepicker.io/api/file/evDgLnsaSaOIZVp1uHfT"><img src="./video school wide teal 1000.png" alt="" class="logo-1"/></a></button>
                    

                </div>
            </div>
        </div>
        <div class="section vs-2">
            <form class="vs-1">
                <h3 class="vs-5">Log in</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                         {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>  */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div class="password">
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </div>

                    </div>
                    <div class="form-group form-check d-flex">
                        <div>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>

                        <div>
                            <p class="vs-7">Forgot Password</p>
                        </div>
                    </div>
                    <div class="vs-3">
                        <button class="btn " type="submit" >Log in</button>

                    </div>
                    <hr style={{width: '100%',color: 'black'}}/>
                    <div class="vs-4">
                        <button class="btn " type="submit" >Log in with Teachable</button>

                    </div>

                </form>


            </form>
        </div>
        <div class="footer">
            <div class="container-fluid vs-8">
                <div class="videos-2">
                    <p class="vs-10"> Video school 2024</p>

                </div>
            </div>
        </div>
    </div>


        </>
    )
}
export default Login;