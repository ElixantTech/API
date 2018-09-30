@extends('layouts.base')

@section('template')
    <section class="body-sign" id="app" style="max-width: 700px !important;">
        <div class="center-sign">
            <a class="logo float-left">
                <img src="{{ asset('img/logo.png') }}" height="54"/>
            </a>

            <section class="card form-wizard" id="signup">
                <div class="tabs">
                    <ul class="nav nav-tabs nav-justify wizard-steps">
                        <li class="nav-item active">
                            <a href="#signup-account" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">1</span>
                                Account
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-profile" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">2</span>
                                Profile
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-company" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">3</span>
                                Company
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#signup-billing" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">4</span>
                                Billing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#w2-confirm" data-toggle="tab" class="nav-link text-center">
                                <span class="badge badge-primary">5</span>
                                Confirm
                            </a>
                        </li>
                    </ul>
                    <form class="form-horizontal" novalidate="novalidate">
                        <div class="tab-content">
                            <div id="w2-account" class="tab-pane p-3 active">
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-username">Username</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" id="w2-username" name="username" required="" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-password">Password</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="password" id="w2-password" required="" minlength="6" type="password">
                                    </div>
                                </div>
                            </div>
                            <div id="signup-profile" class="tab-pane p-3">
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-first-name">First Name</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="first-name" id="w2-first-name" required="" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-last-name">Last Name</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="last-name" id="w2-last-name" required="" type="text">
                                    </div>
                                </div>
                            </div>
                            <div id="signup-profile" class="tab-pane p-3"></div>
                            <div id="signup-company" class="tab-pane p-3"></div>
                            <div id="signup-billing" class="tab-pane p-3"></div>
                            <div id="w2-confirm" class="tab-pane p-3">
                                <div class="form-group row">
                                    <label class="col-sm-4 control-label text-sm-right pt-1" for="w2-email">Email</label>
                                    <div class="col-sm-8">
                                        <input class="form-control" name="email" id="w2-email" required="" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2"></div>
                                    <div class="col-sm-10">
                                        <div class="checkbox-custom">
                                            <input name="terms" id="w2-terms" required="" type="checkbox">
                                            <label for="w2-terms">I agree to the terms of service</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <ul class="pager">
                        <li class="previous disabled">
                            <a><i class="fas fa-angle-left"></i> Previous</a>
                        </li>
                        <li class="finish hidden float-right">
                            <a>Finish</a>
                        </li>
                        <li class="next">
                            <a>Next <i class="fas fa-angle-right"></i></a>
                        </li>
                    </ul>
                </div>
            </section>

            <div class="panel card-sign">
                <div class="card-title-sign mt-3 text-right">
                    <h2 class="title text-uppercase font-weight-bold m-0">
                        <i class="fas fa-user mr-1"></i> Sign Up
                    </h2>
                </div>

                <div class="card-body">
                    <form method="post" id="login">

                        <div class="row form-group mb-3">
                            <div class="col-md-6">
                                <label class="col-form-label" for="first_name">First Name</label>
                                <input type="text" name="first_name" id="first_name"
                                       class="form-control form-control-lg" value="{{ old('first_name') }}">
                            </div>
                            <div class="col-md-6">
                                <label class="col-form-label" for="last_name">First Name</label>
                                <input type="text" name="last_name" id="last_name" class="form-control form-control-lg"
                                       value="{{ old('last_name') }}">
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="form-group mb-3">
                            <label for="company_name">Company Name:</label>
                            <input name="company_name" type="text" id="company_name"
                                   class="form-control form-control-lg{{ $errors->has('company_name') ? ' is-invalid' : '' }}"
                                   value="{{ old('email') }}" required/>

                                @if ($errors->has('company_name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('company_name') }}</strong>
                                    </span>
                                @endif
                        </div>

                        <div class="clearfix"></div>

                        <div class="row form-group mb-3">
                            <div class="col-md-8">
                                <label class="col-form-label" for="street_address">Company Address:</label>
                                <input type="text" name="street_address" id="street_address"
                                       class="form-control form-control-lg" value="{{ old('street_address') }}" required>
                            </div>
                            <div class="col-md-4">
                                <label class="col-form-label" for="city">City:</label>
                                <input type="text" name="city" id="city" class="form-control form-control-lg"
                                       value="{{ old('city') }}" required>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="form-group mb-3">
                            <label for="email">Company E-Mail Address:</label>
                            <div class="input-group">
                                <input name="email" type="email" id="email"
                                       class="form-control form-control-lg{{ $errors->has('email') ? ' is-invalid' : '' }}"
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
                            <a class="btn btn-facebook mb-3 ml-1 mr-1" href="#">Connect with <i
                                    class="fab fa-facebook-f"></i></a>
                        </div>

                        <p class="text-center">Don't have an account yet? <a href="pages-signup.html">Sign Up!</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
