@extends('layouts.base')

@section('template')
    <section class="body-sign" id="app">
        <div class="center-sign">
            <a class="logo float-left">
                <img src="{{ asset('img/logo.png') }}" height="54"/>
            </a>

            <div class="panel card-sign">
                <div class="card-title-sign mt-5 text-right">
                    <h2 class="title text-uppercase font-weight-bold m-0">
                        <i class="fas fa-user mr-1"></i> Login
                    </h2>
                </div>

                <div class="card-body">
                    <form method="post" id="login">
                        <div class="form-group mb-3">
                            <label for="email">E-Mail Address:</label>
                            <div class="input-group">
                                <input name="email" type="email" id="email"
                                       class="form-control form-control-lg{{ $errors->has('emal') ? ' is-invalid' : '' }}"
                                       value="{{ old('email') }}" email required/>
                                <span class="input-group-append">
                            <span class="input-group-text">
                            <i class="fas fa-envelope"></i>
                    </span>
                </span>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="form-group mb-3">
                            <label for="password">Password:</label>
                            <div class="input-group">
                                <input name="password" type="password" id="password"
                                       class="form-control form-control-lg" required/>
                                <span class="input-group-append">
                    <span class="input-group-text">
                        <i class="fas fa-key"></i>
                    </span>
                </span>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="checkbox-custom checkbox-default">
                                    <input id="RememberMe" name="rememberme" type="checkbox"/>
                                    <label for="RememberMe">Remember Me</label>
                                </div>
                            </div>
                            <div class="col-sm-4 text-right">
                                <button type="submit" class="btn btn-primary mt-2">Sign In</button>
                            </div>
                        </div>

                        <span class="mt-3 mb-3 line-thru text-center text-uppercase">
								<span>or</span>
							</span>

                        <div class="mb-1 text-center">
                            <a class="btn btn-facebook mb-3 ml-1 mr-1" href="#">Connect with <i class="fab fa-facebook-f"></i></a>
                        </div>

                        <p class="text-center">Don't have an account yet? <a href="pages-signup.html">Sign Up!</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
